#!/usr/bin/env python3
"""
Start a new deck:  python3 new.py 2026-11-14-mesa "Title of the talk"
Creates decks/<name>/deck.md from a template and an empty img/ folder.
"""
import sys
from pathlib import Path

if len(sys.argv) < 3:
    sys.exit(__doc__)
name, title = sys.argv[1], sys.argv[2]
d = Path(__file__).resolve().parent / "decks" / name
if d.exists():
    sys.exit(f"{d} exists")
(d / "img").mkdir(parents=True)
(d / "deck.md").write_text(f'''---
title: "{title}"
subtitle: ""
event: ""
author: "Maxim Romanov"
affiliation: "The Evolution of Islamic Societies (c. 600–1600 CE), Universität Hamburg"
date: "{name[:10]}"
description: ""
logos:
  - ../2026-09-22-fub-keynote/img/logo-dfg.png
  - ../2026-09-22-fub-keynote/img/logo-uhh.png
  - ../2026-09-22-fub-keynote/img/logo-eis1600.png
---

--- title

--- agenda
# Outline
* First part
Second part
Third part

--- section
<p class="kicker">Part one</p>
# A section divider

--- text steps
# A slide with points that appear one by one

- First point
- Second point
- Third point

<p class="bottom punch">The line that lands.</p>

--- figure caption="FIGURE 1 · What the figure shows."
# A figure with a heading
![Alt text](img/figure.png)

--- split w-40-60
# Text beside an image

Left column: Markdown or HTML.

|||

![Alt text](img/figure.png)

--- quote
“A quotation, centred.”
<span class="by">— Who said it</span>

Notes:
Speaker notes for this slide; press S in the browser to open them in a second window.
''', encoding="utf-8")
print(f"created {d}/deck.md and {d}/img/ — edit, then: python3 build.py")
