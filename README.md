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
Inside a slide, Markdown and HTML both work. Helper classes: `.small .tiny .big .muted .accent
.indent .kicker .punch .bottom`, `.callout` (`.red`), `.stats` with `.stat` (`.red .paper .gold`),
`.pills` with `.pill` (`.on`, `.timeline`), `.chain` with `.box` (`.hi`), `.twocol`, `.ar` for Arabic.
A block that starts with a line `Notes:` is the speaker notes for that slide.

Keys in the browser: arrows or space to move, `F` fullscreen, `O` overview, `S` speaker notes in a
second window (synchronised with the main one), `?` help. `#12` in the address opens slide 12.
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
