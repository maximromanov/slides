import sys, glob
from playwright.sync_api import sync_playwright
from PIL import Image, ImageDraw
deck, outdir = sys.argv[1], sys.argv[2]
import os; os.makedirs(outdir, exist_ok=True)
for f in glob.glob(f'{outdir}/*.png'): os.remove(f)
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1920,'height':1080})
    errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(f'http://localhost:8800/{deck}/#1', wait_until='load'); pg.wait_for_timeout(1500)
    n=pg.evaluate("document.querySelectorAll('.slide').length")
    for i in range(1,n+1):
        pg.evaluate(f"location.hash='#{i}'"); pg.wait_for_timeout(200)
        for _ in range(8):
            if pg.evaluate("document.querySelectorAll('.slide.current .step:not(.on)').length")>0: pg.keyboard.press('ArrowRight')
        pg.wait_for_timeout(330); pg.screenshot(path=f'{outdir}/s-{i:03d}.png', clip={'x':0,'y':0,'width':1920,'height':1080})
    b.close()
    print(deck, n, 'slides; errors:', errs)
files=sorted(glob.glob(f'{outdir}/s-*.png')); w,h=384,216; cols,rows=4,5
for sheet in range(0,len(files),cols*rows):
    im=Image.new('RGB',(cols*(w+8)+8,rows*(h+22)+8),'#888'); d=ImageDraw.Draw(im)
    for k,f in enumerate(files[sheet:sheet+cols*rows]):
        x=8+(k%cols)*(w+8); y=8+(k//cols)*(h+22); im.paste(Image.open(f).resize((w,h),Image.LANCZOS),(x,y+14)); d.text((x,y+1),f'{sheet+k+1}',fill='white')
    im.save(f'{outdir}/sheet-{sheet//(cols*rows)+1:02d}.png')
