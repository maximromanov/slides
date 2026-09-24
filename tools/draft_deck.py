"""Draft a deck.md from an extracted PPTX (slides.json + tables.json + img/) and the PDF render."""
import json, sys, os, re, shutil, subprocess
from PIL import Image
src_dir, pdf, out_dir, fm_path = sys.argv[1:5]
slides = json.load(open(f'{src_dir}/slides.json')); tables = json.load(open(f'{src_dir}/tables.json'))
fm = open(fm_path).read()
os.makedirs(f'{out_dir}/img', exist_ok=True)
LOGO = 'eb0d258199'; EIS = 'f24d4270cd'
PDF_RENDER = set(int(x) for x in (sys.argv[5].split(',') if len(sys.argv) > 5 and sys.argv[5] else []))
SKIP = set(int(x) for x in (sys.argv[6].split(',') if len(sys.argv) > 6 and sys.argv[6] else []))

def copy_img(fn):
    base = os.path.basename(fn); stem, ext = os.path.splitext(base)
    im = Image.open(f'{src_dir}/{fn}')
    if im.width > 1920: im = im.resize((1920, round(im.height * 1920 / im.width)), Image.LANCZOS)
    photo = ext.lower() in ('.jpg', '.jpeg')
    outn = f'img/{stem}.jpg' if photo else f'img/{stem}.png'
    if not os.path.exists(f'{out_dir}/{outn}'):
        if photo: im.convert('RGB').save(f'{out_dir}/{outn}', quality=86, optimize=True, progressive=True)
        else:
            if im.mode not in ('RGB', 'RGBA', 'P', 'L'): im = im.convert('RGBA')
            im.save(f'{out_dir}/{outn}', optimize=True)
    return outn

def render_pdf_page(n, top_pct=0):
    outn = f'img/slide-{n:03d}.png'
    if not os.path.exists(f'{out_dir}/{outn}'):
        subprocess.run(['pdftoppm', '-png', '-r', '170', '-f', str(n), '-l', str(n), pdf, f'{out_dir}/img/tmp'], check=True, capture_output=True)
        f = [x for x in os.listdir(f'{out_dir}/img') if x.startswith('tmp')][0]
        im = Image.open(f'{out_dir}/img/{f}'); w, h = im.size
        g = im.convert('L')
        def whitecol(x):
            col = [g.getpixel((x, y)) for y in range(0, h, 3)]; return sum(1 for v in col if v > 245) / len(col)
        strip = next((x for x in range(0, w // 4) if whitecol(x) > 0.97), int(w * 0.072))
        im = im.crop((strip, int(h * top_pct / 100), w, int(h * 0.965)))  # drop the strip, the title area, the page number
        im.save(f'{out_dir}/{outn}', optimize=True); os.remove(f'{out_dir}/img/{f}')
    return outn

def md_inline(t):
    t = t.replace('\x0b', ' ').replace('\r', ' ')
    t = t.replace('*', '\\*')
    t = re.sub(r'(https?://\S+)', lambda m: m.group(0) if 'localhost' in m.group(0) else f'[{m.group(1).rstrip(".,;)")}]({m.group(1).rstrip(".,;)")})', t)
    return t.strip()

def bullets(paras, allbold):
    out = []
    for p in paras:
        t = md_inline(p['t'])
        if not t or t in ('‹#›', '<#>', '\\<#\\>'): continue
        if re.search(r'[\u0600-\u06FF]', t):
            out.append(f'<p class="ar" dir="rtl">{t}</p>'); continue
        if p['b'] and not allbold: t = f'**{t}**'
        out.append('  ' * p['lvl'] + '- ' + t)
    return '\n'.join(out)

def table_md(rows):
    rows = [[c.replace('|', '\\|').replace('\n', ' ') for c in r] for r in rows]
    w = max(len(r) for r in rows); rows = [r + [''] * (w - len(r)) for r in rows]
    out = ['| ' + ' | '.join(rows[0]) + ' |', '|' + '---|' * w]
    out += ['| ' + ' | '.join(r) + ' |' for r in rows[1:]]
    return '\n'.join(out)

def classify(s):
    n = s['n']; shapes = s['shapes']
    imgs = [sh for sh in shapes if 'image' in sh and not sh['image'].startswith(f'img/{LOGO}')]
    eis = [sh for sh in imgs if sh['image'].startswith(f'img/{EIS}')]
    imgs = [sh for sh in imgs if sh not in eis]
    texts = [sh for sh in shapes if 'text' in sh]
    title = next((sh for sh in texts if sh['y'] <= 12 and sh['h'] <= 17 and sh['w'] > 60), None)
    body = [sh for sh in texts if sh is not title]
    tbl = tables.get(str(n), [])
    notes = ('\n\nNotes:\n' + s['notes']) if s['notes'] else ''
    tt = md_inline(title['text'][0]['t']) if title else ''
    alltext = ' '.join(p['t'] for sh in texts for p in sh['text']).strip()
    if alltext.lower().startswith('thank you') and not imgs:
        return f'--- section light\n<img src="../2026-09-22-fub-keynote/img/logo-eis1600.png" alt="EIS1600" style="width:220px;height:auto;margin:0 auto 30px;display:block">\n# Thank you!{notes}'
    bigbold = next((sh for sh in texts if sh['y'] <= 15 and sh['h'] >= 25 and sh['w'] >= 85 and sh['text'][0]['size'] and sh['text'][0]['size'] >= 28), None)
    if bigbold and not imgs:
        rest = [sh for sh in texts if sh is not bigbold]
        sub = '\n'.join(f'<p>{md_inline(p["t"])}</p>' for sh in rest for p in sh['text'] if p['t'].strip() not in ('‹#›', '<#>'))
        return f'--- section light\n# {md_inline(" ".join(p["t"] for p in bigbold["text"]))}\n{sub}{notes}'
    # section slides: big centred text at y~14
    big = next((sh for sh in texts if 10 <= sh['y'] <= 18 and sh['h'] >= 35 and sh['x'] <= 8), None)
    if big and not imgs:
        sub = [sh for sh in body if sh is not big and sh['y'] > 50]
        subtxt = '\n'.join(f'<p>{md_inline(p["t"])}</p>' for sh in sub for p in sh['text'] if p['t'].strip() not in ('‹#›', '<#>'))
        head = ' '.join(p['t'] for p in big['text'])
        return f'--- section light\n# {md_inline(head)}\n{subtxt}{notes}'
    if n in PDF_RENDER:
        if title:
            img = render_pdf_page(n, title['y'] + title['h'] + 1)
            return f'--- figure\n# {tt}\n![]({img}){notes}'
        img = render_pdf_page(n)
        return f'--- full contain\n![]({img}){notes}'
    # image-only slides
    if imgs and not body and not tbl:
        if len(imgs) == 1 and imgs[0]['w'] >= 95 and imgs[0]['h'] >= 95:
            return f'--- full contain\n{"# " + tt if tt else ""}\n![]({copy_img(imgs[0]["image"])}){notes}'
        ims = '\n'.join(f'![]({copy_img(i["image"])})' for i in sorted(imgs, key=lambda i: (i['y'], i['x'])))
        return f'--- figure\n{"# " + tt if tt else ""}\n{ims}{notes}'
    # one image on the left, a text column on the right (sources, comments)
    right_text = [sh for sh in body if sh['x'] >= 55 and sh['w'] <= 42 and sh['h'] > 40]
    if len(imgs) == 1 and right_text and imgs[0]['x'] < 40 and not tbl:
        allb = all(p['b'] for sh in right_text for p in sh['text'])
        txt = '\n\n'.join(bullets(sh['text'], allb) for sh in right_text)
        return f'--- split w-60-40 vcenter\n# {tt}\n\n![]({copy_img(imgs[0]["image"])})\n\n|||\n\n<div class="small" markdown="1">\n\n{txt}\n\n</div>{notes}'
    left_text = [sh for sh in body if sh['x'] < 25 and sh['w'] <= 25 and sh['h'] > 40]
    if len(imgs) == 1 and left_text and imgs[0]['x'] >= 20 and not tbl:
        txt = '\n\n'.join(bullets(sh['text'], True) for sh in left_text)
        return f'--- split w-35-65 vcenter\n{"# " + tt if tt else ""}\n\n<div class="small" markdown="1">\n\n{txt}\n\n</div>\n\n|||\n\n![]({copy_img(imgs[0]["image"])}){notes}'
    # small overlay/caption texts on figure slides
    if imgs and body and all((sh['w'] <= 35 or sh['h'] <= 14) for sh in body) and not tbl:
        ims = '\n'.join(f'![]({copy_img(i["image"])})' for i in sorted(imgs, key=lambda i: (i['y'], i['x'])))
        extras = ''
        for sh in body:
            txt = ' '.join(md_inline(p['t']) for p in sh['text'] if p['t'].strip() not in ('‹#›', '<#>'))
            if not txt.strip(): continue
            if sh['y'] <= 3: extras += f'\n<p class="caption" style="position:absolute;right:24px;top:6px;font-size:18px">{txt}</p>'
            elif sh['x'] >= 60 and sh['y'] < 40: extras += f'\n<div class="stat red" style="position:absolute;right:24px;top:70px;min-width:0;padding:10px 20px"><b style="font-size:30px">{txt}</b></div>'
            elif sh['w'] <= 35 and sh['h'] > 50: extras += f'\n<p class="caption" style="position:absolute;right:24px;top:90px;width:16%;font-size:16px;line-height:1.35">{txt}</p>'
            else: extras += f'\n<p class="caption" style="font-size:20px">{txt}</p>'
        return f'--- figure\n{"# " + tt if tt else ""}\n{ims}{extras}{notes}'
    # text + image side by side
    if imgs and body:
        left = [sh for sh in body if sh['x'] < 45]; right_imgs = [i for i in imgs if i['x'] >= 40]
        if left and right_imgs and len(imgs) == 1:
            allb = all(p['b'] for sh in left for p in sh['text'])
            txt = '\n\n'.join(bullets(sh['text'], allb) for sh in left)
            return f'--- split w-40-60 vcenter\n# {tt}\n\n{txt}\n\n|||\n\n![]({copy_img(imgs[0]["image"])}){notes}'
        # image below text
        allb = all(p['b'] for sh in body for p in sh['text'])
        txt = '\n\n'.join(bullets(sh['text'], allb) for sh in body)
        ims = '\n'.join(f'![]({copy_img(i["image"])})' for i in imgs)
        return f'--- figure\n# {tt}\n\n{txt}\n\n{ims}{notes}'
    # tables
    if tbl:
        allb = all(p['b'] for sh in body for p in sh['text'])
        txt = '\n\n'.join(bullets(sh['text'], allb) for sh in body)
        tb = '\n\n'.join(f'<div class="small" markdown="1">\n\n{table_md(t)}\n\n</div>' for t in tbl)
        if body and all(sh['w'] <= 45 for sh in body):
            return f'--- split w-35-65\n# {tt}\n\n{txt}\n\n|||\n\n{tb}{notes}'
        return f'--- text\n# {tt}\n\n{txt}\n\n{tb}{notes}'
    # text slides
    allb = all(p['b'] for sh in body for p in sh['text'])
    parts = []
    for sh in sorted(body, key=lambda b: (b['y'], b['x'])):
        parts.append(bullets(sh['text'], allb))
    return f'--- text\n{"# " + tt if tt else ""}\n\n' + '\n\n'.join(parts) + notes

out = [fm.rstrip('\n'), '']
for s in slides:
    if s['n'] in SKIP: continue
    out.append(f'<!-- {s["n"]} -->')
    out.append(classify(s)); out.append('')
open(f'{out_dir}/deck.md', 'w').write('\n'.join(out))
print(out_dir, len(slides), 'slides ->', sum(1 for l in out if l.startswith('---')), 'written;', len(os.listdir(f'{out_dir}/img')), 'images')
