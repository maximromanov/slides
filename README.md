# slides

Talks by Maxim Romanov as web pages, served at https://maximromanov.github.io/slides/. One folder per
deck; no framework. Each deck is a single HTML page with a fixed 1920×1080 stage scaled to the
window, so every slide keeps its proportions on any screen, like a Google Slides slide.

## Layout

```
build.py                      renders decks/*/deck.md into docs/ (python3 build.py)
assets/deck.css, deck.js      the slide runtime (scaling, keys, overview, notes, print)
assets/deck.html, index.html  page templates
assets/fonts/, assets/img/    self-hosted fonts and shared images (the EIS1600 strip, the RM mark)
decks/<date>-<name>/deck.md   the deck: front matter + slides
decks/<date>-<name>/img/      its images
docs/                         the published site: docs/<deck>/index.html, docs/index.html (deck list)
```

## Starting a new deck

```
python3 new.py 2026-11-14-mesa "Title of the talk"     # scaffold decks/2026-11-14-mesa/deck.md + img/
python3 build.py                                        # render into docs/
python3 -m http.server -d docs 8000                     # preview at http://localhost:8000/2026-11-14-mesa/
```

Write the slides in `deck.md`, drop images into `img/`, rebuild, preview, commit `decks/` and
`docs/` together, push. The deck appears in the list at the root and can be linked from the website's
Talks page.

## Converting a Google Slides or PowerPoint deck

Export the deck as PPTX and as PDF (File → Download in Google Slides), then:

```
python3 tools/extract_pptx.py "talk.pptx" work/talk        # text, notes, images, positions -> work/talk/
python3 tools/extract_tables.py "talk.pptx" work/talk/tables.json
python3 tools/draft_deck.py work/talk "talk.pdf" decks/<date>-<name> front-matter.md [pdf-render slides] [skip slides]
python3 build.py
python3 tools/contact_sheets.py <date>-<name> work/shots    # needs a local server on :8800
```

`draft_deck.py` writes a first `deck.md`: each original slide becomes a slide with the closest layout
(text, figure, split, section), tables become Markdown tables, and slides listed as "pdf-render"
(diagrams built from many shapes) are taken as an image of the PDF page. Read the result against
the contact sheets and fix by hand what the heuristics got wrong; the `<!-- n -->` comments keep
the original slide numbers.

A deck with `draft: true` in its front matter is skipped by the build and does not appear in the
list; remove the line to publish it.

## Writing a deck

`deck.md` starts with YAML front matter (`title`, `subtitle`, `event`, `author`, `affiliation`,
`date`, `description`, `logos`). Slides follow, separated by a line that begins with `---`; the rest
of that line names the layout and options:

```
--- title                      cover slide from the front matter (logos at the bottom)
--- section [light]            centred divider on dark (or paper) ground; body: kicker + heading
--- agenda                     one item per line; prefix the current item with `* `
--- text  (or just ---)        heading + Markdown/HTML body
--- figure [frame] [caption="…"]   heading, then the image(s) scaled into the free area
--- full [contain] [dark]      full-bleed image; `contain` fits the whole image on paper (or dark) ground
--- split [w-40-60] [vcenter]  heading, then two columns separated by a line `|||`
--- quote                      centred quotation
```

Any option that is just a word becomes a class on the slide (`no-strip` removes the left strip).
`steps` on a `text` slide makes every top-level list item (and a `.punch` line) appear one per
keypress; for finer control give any element the class `step` (`{.step}` on a Markdown line, or
`class="step"` in HTML). Steps already shown dim slightly as the next one appears.

Auto-fit: on `text`, `split`, `agenda`, and `quote` slides the base type size is chosen at load time
so that the content fills the stage: it grows to at most 1.4× the default on sparse slides and shrinks
on dense ones, never overflowing. Everything on a slide scales together (headings, lists, boxes,
callouts), so write sizes in `em`, not `px`. `max=48` on a slide caps its size; `nofit` switches the
fitting off for that slide. Figure and full-bleed slides are not fitted.

Motion: slides slide in from the right (from the left when going back); stat tiles, chain boxes,
period pills, and agenda rows build in with a short stagger; the red rule under a heading grows in;
a punch line fades in. Clicking any figure opens it full-screen (Esc or click to close). Everything
respects the system's reduced-motion setting, and nothing animates in the overview or in print.
Inside a slide, Markdown and HTML both work. Helper classes: `.small .tiny .big .muted .accent
.indent .kicker .punch .bottom`, `.callout` (`.red`), `.stats` with `.stat` (`.red .paper .gold`),
`.pills` with `.pill` (`.on`, `.timeline`), `.chain` with `.box` (`.hi`), `.twocol`, `.ar` for Arabic.
A block that starts with a line `Notes:` is the speaker notes for that slide.

Keys in the browser: arrows or space to move, `F` fullscreen, `O` overview, `S` speaker notes in a
second window, `?` help. The notes window shows the current and the next slide, the notes, and a
clock (`R` resets it); its arrow keys drive the presentation, so it can sit on the laptop screen
while the deck is on the projector. It works when the deck is opened from disk as well. `#12` in the address opens slide 12.
Print (⌘P) gives one slide per page at 16:9, which is how a PDF is made.

## Design

Slides have a plain white ground (figures and screenshots usually come with white backgrounds, so
they sit flush), with the website's red, gold, and navy as accents and the same fonts.

## Images

Put images in the deck's `img/` folder at up to 1920 px wide; photographs as JPEG, charts and
screenshots as PNG. The build copies the folder as is.

## Publishing

`python3 build.py`, commit `decks/`, `assets/`, and `docs/` together, push to `master`. GitHub Pages
serves `docs/` (`docs/.nojekyll` disables Jekyll).
