# Working on the slides

Companion to Maxim Romanov's personal website (../personal_research_website_CLAUDE_Fable): the same
palette, fonts, and conventions. Read `README.md` for the deck format.

- Edit `decks/*/deck.md`, `assets/`, and `build.py`; never the generated files under `docs/` except
  by rebuilding. Commit sources and `docs/` together.
- A new deck: `decks/<YYYY-MM-DD>-<short-name>/deck.md` plus `img/`. The date is the talk's date.
- Converting from Google Slides or PowerPoint: export as PPTX and PDF; extract text and images with
  python-pptx (see the site's history for the script); rebuild slide by slide in the deck format,
  keeping the original order, text, and speaker notes; keep figures as images; rebuild simple boxes
  and lists as HTML. Do not invent text that was not on the original slide.
- Transliteration and prose rules are the website's (see its CLAUDE.md); slide text quotes the
  original talk as given.
- Check a deck by rendering every slide with playwright at 1920×1080 into contact sheets before
  committing; look for clipped text, overlapping overlays, and captions duplicated inside images.
- GitHub Pages serves `docs/` of `master`; pushing publishes.
