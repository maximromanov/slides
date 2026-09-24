#!/usr/bin/env python3
"""
Build the slide decks: decks/<deck>/deck.md  ->  docs/<deck>/index.html (+ img/ copied)
and docs/index.html (the list of decks).

Deck format (deck.md):
  ---              front matter (YAML): title, subtitle, author, date, event, description
  ---
  Slides are separated by a line beginning with `---`. The rest of that line names the layout
  and options:   --- figure caption="FIGURE 1.1 …" frame
  Layouts: title, section, agenda, text (default), figure, full, split, quote.
  Inside a slide: Markdown (HTML allowed). A block starting with `Notes:` on its own line is the
  speaker notes. In `split`, the two columns are separated by a line `|||`.

Dependencies: pip install pyyaml markdown
"""
import html
import re
import shutil
import sys
from pathlib import Path

import markdown
import yaml

ROOT = Path(__file__).resolve().parent
DECKS = ROOT / "decks"
OUT = ROOT / "docs"
MD_EXT = ["extra", "sane_lists", "attr_list", "md_in_html"]


def md(text):
    return markdown.markdown(text, extensions=MD_EXT)


def mdi(text):
    out = markdown.markdown(text, extensions=["extra"])
    return re.sub(r"^<p>(.*)</p>$", r"\1", out.strip(), flags=re.S)


def esc(s):
    return html.escape(str(s), quote=True)


def parse_opts(s):
    """'figure caption="Fig 1" frame two' -> ('figure', {'caption': 'Fig 1', 'frame': True, 'two': True})"""
    s = s.strip()
    if not s:
        return "text", {}
    parts = re.findall(r'(\w[\w-]*)(?:=("[^"]*"|\S+))?', s)
    layout = parts[0][0] if parts and not parts[0][1] else "text"
    opts = {}
    start = 1 if parts and not parts[0][1] else 0
    for k, v in parts[start:]:
        opts[k] = v.strip('"') if v else True
    return layout, opts


def split_notes(body):
    m = re.search(r"^Notes:\s*$", body, flags=re.M)
    if not m:
        return body, ""
    return body[: m.start()], body[m.end():].strip()


def first_heading(body):
    m = re.search(r"^#\s+(.+)$", body, flags=re.M)
    return re.sub(r"<[^>]+>", "", mdi(m.group(1))) if m else ""


def render_slide(layout, opts, body, deck):
    body, notes = split_notes(body)
    classes = [layout] + [c for c in (opts.get("class") or "").split() if c]
    classes += [k for k, v in opts.items() if v is True and not k.startswith("w-") and k != "steps"]
    title = opts.get("title") or first_heading(body)
    inner = ""
    if layout == "title":
        fm = deck
        logos = "".join(f'<img src="{esc(l)}" alt="">' for l in (fm.get("logos") or []))
        cover = f'<div class="cover"><img src="{esc(opts["cover"])}" alt=""></div>' if opts.get("cover") else ""
        inner = (
            f'{cover}<div class="block"><p class="kicker">{esc(fm.get("event", ""))}</p><h1>{mdi(fm["title"])}</h1>'
            + (f'<p class="sub">{mdi(fm["subtitle"])}</p>' if fm.get("subtitle") else "")
            + f'<p class="who">{mdi(fm.get("author", ""))}</p><p class="meta">{mdi(fm.get("date", ""))}'
            + (f' · {mdi(fm["affiliation"])}' if fm.get("affiliation") else "") + "</p></div>"
            + (f'<div class="logos">{logos}</div>' if logos else "")
        )
        title = re.sub(r"<[^>]+>", "", mdi(fm["title"]))
    elif layout == "section":
        inner = f'<div class="inner">{md(body)}</div>'
    elif layout == "quote":
        inner = f'<div class="q">{md(body)}</div>'
    elif layout == "figure":
        head, imgs = re.subn(r"!\[([^\]]*)\]\(([^)]+)\)", "", body)
        images = re.findall(r"!\[([^\]]*)\]\(([^)]+)\)", body)
        head = re.sub(r"\n{3,}", "\n\n", head).strip()
        figcls = "fig" + (" framed" if opts.get("frame") else "") + (" two" if len(images) > 1 else "") + (" ratio-60" if opts.get("ratio") == "60" else "")
        cap = f"<figcaption>{mdi(opts['caption'])}</figcaption>" if opts.get("caption") else ""
        imgs_html = '<div class="imgs">' + "".join(f'<img src="{esc(src)}" alt="{esc(alt)}">' for alt, src in images) + "</div>"
        inner = md(head) + f'<figure class="{figcls}">{imgs_html}{cap}</figure>'
    elif layout == "full":
        images = re.findall(r"!\[([^\]]*)\]\(([^)]+)\)", body)
        rest = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", "", body).strip()
        mode = "contain" if opts.get("contain") else "bg"
        inner = "".join(f'<img class="{mode}" src="{esc(src)}" alt="{esc(alt)}">' for alt, src in images) + md(rest)
        if opts.get("contain"):
            classes.append("paper")
    elif layout == "split":
        head, _, cols = body.partition("\n|||\n") if "\n|||\n" in body else ("", "", body)
        # a heading before the first ||| belongs to the slide head; find the first '|||' split
        parts = body.split("\n|||\n")
        if len(parts) == 2:
            left, right = parts
            # heading lines at the top of `left` go to the head
            mh = re.match(r"^(#\s.+\n)", left)
            head = mh.group(1) if mh else ""
            left = left[len(head):] if head else left
        else:
            head, left, right = "", parts[0], ""
        w = next((k for k in opts if k.startswith("w-")), "w-50-50")
        inner = md(head) + f'<div class="cols {esc(w)}"><div class="col{" center" if opts.get("center") else ""}">{md(left)}</div><div class="col{" center" if opts.get("vcenter") else ""}">{md(right)}</div></div>'
    elif layout == "agenda":
        items = re.findall(r"^\s*(\*?)\s*(?:\d+[.)]\s*)?(.+?)\s*$", body.strip(), flags=re.M)
        items = [(on, t) for on, t in items if t and not t.startswith("#")]
        nums = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
        head = first_heading(body)
        lis = "".join(f'<li class="{"on" if on else ""}"><span class="n">{nums[i]}</span><span>{mdi(t)}</span></li>' for i, (on, t) in enumerate(items))
        inner = (f"<h1>{esc(head)}</h1>" if head else "") + f"<ol>{lis}</ol>"
    else:
        inner = md(body)
    inner = re.sub(r"<p>(<img[^>]+>)</p>", r"\1", inner)  # bare images are not paragraphs
    if opts.get("steps"):
        # every top-level list item (and .punch line) becomes a step
        inner = re.sub(r"<li(?![^>]*class=)", '<li class="step"', inner)
        inner = re.sub(r'<li class="([^"]*)"', lambda m: f'<li class="{m.group(1)} step"' if "step" not in m.group(1) else m.group(0), inner)
        inner = re.sub(r'<p class="([^"]*punch[^"]*)"', lambda m: f'<p class="{m.group(1)} step"', inner)
    notes_html = f'<aside class="notes">{md(notes)}</aside>' if notes else ""
    fitmax = f' data-fit-max="{esc(opts["max"])}"' if opts.get("max") else ""
    return f'<section class="slide {" ".join(classes)}" data-title="{esc(title)}"{fitmax}>{inner}{notes_html}</section>'


def build_deck(deck_dir):
    src = (deck_dir / "deck.md").read_text(encoding="utf-8")
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", src, flags=re.S)
    fm = yaml.safe_load(m.group(1)) or {}
    body = m.group(2)
    chunks = re.split(r"^---(.*)$", body, flags=re.M)
    # chunks: [pre, opts1, body1, opts2, body2, ...]
    slides = []
    for i in range(1, len(chunks), 2):
        layout, opts = parse_opts(chunks[i])
        slides.append(render_slide(layout, opts, chunks[i + 1].strip("\n"), fm))
    out_dir = OUT / deck_dir.name
    out_dir.mkdir(parents=True, exist_ok=True)
    if (deck_dir / "img").exists():
        shutil.copytree(deck_dir / "img", out_dir / "img", dirs_exist_ok=True)
    template = (ROOT / "assets" / "deck.html").read_text(encoding="utf-8")
    page = template
    for k, v in {
        "title": esc(fm["title"]),
        "description": esc(fm.get("description") or fm["title"]),
        "author": esc(fm.get("author", "")),
        "deck": esc(fm["title"]),
        "slides": "\n".join(slides),
        "count": str(len(slides)),
    }.items():
        page = page.replace("{{" + k + "}}", v)
    (out_dir / "index.html").write_text(page, encoding="utf-8")
    return fm, len(slides)


def build_index(entries):
    template = (ROOT / "assets" / "index.html").read_text(encoding="utf-8")
    rows = ""
    for name, fm, n in sorted(entries, key=lambda e: e[0], reverse=True):
        rows += (
            f'<li class="item"><div class="it-label"><span class="it-year">{esc(fm.get("date", ""))}</span></div>'
            f'<div class="it-body"><h3 class="it-title"><a href="{esc(name)}/">{mdi(fm["title"])}</a></h3>'
            f'<p class="it-meta">{mdi(fm.get("event", ""))}' + (f' · {mdi(fm["subtitle"])}' if fm.get("subtitle") else "") + f' · {n} slides</p>'
            f'<p class="it-links"><a class="it-link" href="{esc(name)}/">Open</a> <a class="it-link" href="{esc(name)}/#1">From the start</a></p></div></li>'
        )
    (OUT / "index.html").write_text(template.replace("{{rows}}", rows), encoding="utf-8")


def main():
    OUT.mkdir(exist_ok=True)
    shutil.copytree(ROOT / "assets", OUT / "assets", dirs_exist_ok=True)
    for p in ["deck.html", "index.html"]:
        (OUT / "assets" / p).unlink(missing_ok=True)
    entries = []
    for d in sorted(DECKS.iterdir()):
        if (d / "deck.md").exists():
            head = (d / "deck.md").read_text(encoding="utf-8")[:2000]
            if re.search(r"^draft:\s*true", head, flags=re.M):
                print(f"{d.name}: draft, skipped"); shutil.rmtree(OUT / d.name, ignore_errors=True); continue
            fm, n = build_deck(d)
            if fm.get("unlisted"):
                print(f"{d.name}: {n} slides (unlisted)"); continue
            entries.append((d.name, fm, n))
            print(f"{d.name}: {n} slides")
    build_index(entries)
    (OUT / ".nojekyll").write_text("")


if __name__ == "__main__":
    main()
