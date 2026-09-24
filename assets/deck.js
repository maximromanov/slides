/* Slide runtime: scaling, navigation, overview, speaker notes, hash routing. No dependencies. */
(function () {
  var stage = document.querySelector('.stage');
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var progress = document.querySelector('.progress');
  var counter = document.querySelector('.counter');
  var help = document.querySelector('.help');
  var W = 1920, H = 1080;
  var idx = 0;
  var channel = null;
  try { channel = new BroadcastChannel('deck-' + location.pathname); } catch (e) {}

  function fit() {
    if (document.body.classList.contains('overview')) { stage.style.transform = ''; return; }
    var s = Math.min(window.innerWidth / W, window.innerHeight / H);
    stage.style.transform = 'scale(' + s + ')';
  }

  function steps(s) { return Array.prototype.slice.call(s.querySelectorAll('.step')); }
  function resetSteps(s, all) {
    steps(s).forEach(function (el) { el.classList.toggle('on', !!all); el.classList.remove('was'); });
  }
  function next() {
    var cur = slides[idx], pending = steps(cur).filter(function (el) { return !el.classList.contains('on'); });
    if (pending.length) {
      steps(cur).forEach(function (el) { if (el.classList.contains('on')) el.classList.add('was'); });
      pending[0].classList.add('on'); return;
    }
    show(idx + 1);
  }
  function prev() {
    var cur = slides[idx], done = steps(cur).filter(function (el) { return el.classList.contains('on'); });
    if (done.length) { done[done.length - 1].classList.remove('on'); done.forEach(function (el) { el.classList.remove('was'); }); if (done.length > 1) done[done.length - 2].classList.remove('was'); return; }
    show(idx - 1);
  }
  function show(n, push) {
    n = Math.max(0, Math.min(slides.length - 1, n));
    var back = n < idx;
    idx = n;
    slides.forEach(function (s, i) {
      var on = i === n;
      s.classList.toggle('current', on); s.classList.toggle('back', on && back);
      if (on) resetSteps(s, back || document.body.classList.contains('preview')); else resetSteps(s, false);
    });
    if (progress) progress.style.width = ((n + 1) / slides.length * 100) + '%';
    if (counter) counter.textContent = (n + 1) + ' / ' + slides.length;
    if (push !== false) history.replaceState(null, '', '#' + (n + 1));
    if (channel) channel.postMessage({ idx: n });
    syncNotes();
    document.title = (slides[n].getAttribute('data-title') || document.body.getAttribute('data-deck') || 'Slides') + ' · ' + (n + 1);
  }

  function fromHash() {
    var m = location.hash.match(/#(\d+)/);
    show(m ? parseInt(m[1], 10) - 1 : 0, false);
  }

  function toggleOverview(on) {
    var body = document.body;
    var next = on === undefined ? !body.classList.contains('overview') : on;
    body.classList.toggle('overview', next);
    slides.forEach(function (s) {
      var w = s.querySelector(':scope > .scaled');
      if (next && !w) {
        var wrap = document.createElement('div'); wrap.className = 'scaled';
        while (s.firstChild) wrap.appendChild(s.firstChild);
        s.appendChild(wrap);
      } else if (!next && w) {
        while (w.firstChild) s.appendChild(w.firstChild); s.removeChild(w);
      }
    });
    fit();
    if (next) { var cur = slides[idx]; if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'center' }); }
  }

  var notesWin = null;
  function openNotes() {
    if (notesWin && !notesWin.closed) { notesWin.focus(); return; }
    var win = window.open('', 'deck-notes', 'width=1100,height=760');
    if (!win) return;
    notesWin = win;
    var doc = win.document;
    var base = location.href.split('#')[0];
    doc.open();
    doc.write('<!doctype html><html><head><meta charset="utf-8"><title>Speaker notes</title><style>' +
      'body{margin:0;font-family:Georgia,serif;background:#1c1917;color:#eee;display:grid;grid-template-rows:auto auto 1fr;height:100vh;overflow:hidden}' +
      'header{padding:12px 20px;font:13px/1.4 ui-monospace,Menlo,monospace;letter-spacing:.1em;color:#aaa;border-bottom:1px solid #333;display:flex;justify-content:space-between;align-items:center}' +
      'header b{color:#eee;font-weight:600}#clock{font-size:20px;color:#eee}' +
      '.previews{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:16px 20px;border-bottom:1px solid #333}' +
      '.pv{position:relative;background:#fff;aspect-ratio:16/9;overflow:hidden;border-radius:3px}.pv iframe{width:1920px;height:1080px;border:0;transform-origin:top left;pointer-events:none;position:absolute;left:0;top:0}' +
      '.pv .tag{position:absolute;left:8px;top:6px;font:11px ui-monospace,Menlo,monospace;letter-spacing:.12em;color:#fff;background:rgba(0,0,0,.55);padding:2px 7px;border-radius:2px;z-index:2}' +
      'main{padding:22px 28px;overflow:auto;font-size:24px;line-height:1.5}main p{margin:0 0 .8em}.empty{color:#666;font-style:italic}' +
      'footer{padding:8px 20px;font:12px ui-monospace,Menlo,monospace;color:#777;border-top:1px solid #333}' +
      '</style></head><body><header><span id="pos"></span><span id="clock">0:00</span></header>' +
      '<div class="previews"><div class="pv"><span class="tag">CURRENT</span><iframe id="cur"></iframe></div><div class="pv"><span class="tag">NEXT</span><iframe id="nxt"></iframe></div></div>' +
      '<main id="notes"></main><footer>Arrow keys here move the presentation. R resets the clock.</footer></body></html>');
    doc.close();
    var start = Date.now();
    function fitPreviews() {
      var pv = doc.querySelector('.pv'); if (!pv) return;
      var k = pv.clientWidth / 1920;
      Array.prototype.forEach.call(doc.querySelectorAll('.pv iframe'), function (f) { f.style.transform = 'scale(' + k + ')'; });
    }
    function render(n) {
      var s = slides[n]; if (!s || win.closed) return;
      var notes = s.querySelector('aside.notes');
      var nx = slides[n + 1];
      doc.getElementById('pos').innerHTML = 'SLIDE <b>' + (n + 1) + '</b> / ' + slides.length + ' &nbsp;·&nbsp; ' + (s.getAttribute('data-title') || '') + (nx ? ' &nbsp;&nbsp;<span style="color:#666">next: ' + (nx.getAttribute('data-title') || 'slide ' + (n + 2)) + '</span>' : '');
      doc.getElementById('notes').innerHTML = notes ? notes.innerHTML : '<p class="empty">No notes for this slide.</p>';
      var cur = doc.getElementById('cur'), nxt = doc.getElementById('nxt');
      var want = base + '?preview#' + (n + 1); if (cur.getAttribute('src') !== want) cur.setAttribute('src', want);
      var wantN = base + '?preview#' + (n + 2); if (nx) { nxt.style.visibility = ''; if (nxt.getAttribute('src') !== wantN) nxt.setAttribute('src', wantN); } else { nxt.style.visibility = 'hidden'; }
      fitPreviews();
    }
    win.__render = render;
    render(idx);
    win.addEventListener('resize', fitPreviews);
    win.setInterval(function () {
      var t = Math.floor((Date.now() - start) / 1000);
      doc.getElementById('clock').textContent = Math.floor(t / 60) + ':' + ('0' + (t % 60)).slice(-2);
    }, 1000);
    doc.addEventListener('keydown', function (e) {
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown': case ' ': case 'PageDown': next(); e.preventDefault(); break;
        case 'ArrowLeft': case 'ArrowUp': case 'PageUp': prev(); e.preventDefault(); break;
        case 'r': case 'R': start = Date.now(); break;
      }
    });
  }
  function setScale(v) {
    v = Math.max(70, Math.min(140, v)); typeState.scale = v;
    var el = document.querySelector('#tp-scale'); if (el) { el.value = v; }
    applyType(typeState); try { localStorage.setItem(TYPE_KEY, JSON.stringify(typeState)); } catch (e) {}
    var o = document.querySelector('#o-scale'); if (o) o.textContent = v + '%';
    var out = document.querySelector('#tp-out'); if (out) out.value = describe();
    clearTimeout(setScale.t); setScale.t = setTimeout(fitText, 120);
    var tag = document.querySelector('.scale-tag'); if (!tag) { tag = document.createElement('div'); tag.className = 'scale-tag'; document.body.appendChild(tag); }
    tag.textContent = 'Text ' + v + '%'; tag.classList.add('on'); clearTimeout(setScale.h); setScale.h = setTimeout(function () { tag.classList.remove('on'); }, 900);
  }
  function syncNotes() { if (notesWin && !notesWin.closed && notesWin.__render) notesWin.__render(idx); }

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case ' ': case 'PageDown': case 'n': case 'j': next(); e.preventDefault(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': case 'p': case 'k': prev(); e.preventDefault(); break;
      case 'Home': show(0); break;
      case 'End': show(slides.length - 1); break;
      case 'f': case 'F': if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); break;
      case 'o': case 'O': case 'Escape': if (e.key === 'Escape' && help.classList.contains('on')) { help.classList.remove('on'); break; } toggleOverview(e.key === 'Escape' ? false : undefined); break;
      case 's': case 'S': openNotes(); break;
      case 't': case 'T': panel.classList.toggle('on'); break;
      case '+': case '=': setScale((typeState.scale || 100) + 4); break;
      case '-': case '_': setScale((typeState.scale || 100) - 4); break;
      case '0': setScale(100); break;
      case '?': case 'h': case 'H': help.classList.toggle('on'); break;
    }
  });

  // click: right half forward, left half back; in overview, click a slide to go there
  stage.addEventListener('click', function (e) {
    if (document.body.classList.contains('overview')) {
      var s = e.target.closest('.slide'); if (s) { show(slides.indexOf(s)); toggleOverview(false); }
      return;
    }
    if (e.target.closest('a')) return;
    var img = e.target.closest('.slide.figure .fig img, .slide img.zoomable');
    if (img) { lightbox.querySelector('img').src = img.src; lightbox.classList.add('on'); return; }
    var r = stage.getBoundingClientRect();
    if ((e.clientX - r.left) / r.width > 0.5) next(); else prev();
  });
  // touch: swipe
  var tx = null;
  document.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev(); }
  });
  help.addEventListener('click', function () { help.classList.remove('on'); });

  /* Type tester: pick faces and weights live; the choice is kept in this browser for every deck. */
  var FACES = [
    ['Literata (default)', '"Literata", Georgia, serif'], ['Source Serif 4', '"Source Serif 4", Georgia, serif'], ['Merriweather', '"Merriweather", Georgia, serif'],
    ['Newsreader', '"Newsreader", Georgia, serif'], ['Lora', '"Lora", Georgia, serif'], ['PT Serif', '"PT Serif", Georgia, serif'], ['Alegreya', '"Alegreya", Georgia, serif'],
    ['Georgia (system)', 'Georgia, serif'], ['Palatino (system)', '"Palatino Linotype", Palatino, "Book Antiqua", serif'], ['Iowan Old Style (Mac)', '"Iowan Old Style", Georgia, serif'], ['Charter (Mac)', 'Charter, Georgia, serif'],
    ['Inter (sans)', '"Inter", system-ui, sans-serif'], ['Source Sans 3 (sans)', '"Source Sans 3", system-ui, sans-serif'], ['IBM Plex Sans (sans)', '"IBM Plex Sans", system-ui, sans-serif'], ['Helvetica Neue (system sans)', '"Helvetica Neue", Helvetica, Arial, sans-serif'], ['Avenir (Mac sans)', 'Avenir, "Avenir Next", system-ui, sans-serif']
  ];
  var TYPE_KEY = 'deck-type';
  var typeDefaults = { text: 0, head: 0, wText: 400, wHead: 600, ls: 0, scale: 100 };
  function loadType() { try { return Object.assign({}, typeDefaults, JSON.parse(localStorage.getItem(TYPE_KEY) || '{}')); } catch (e) { return Object.assign({}, typeDefaults); } }
  function applyType(t) {
    var r = document.documentElement.style;
    r.setProperty('--f-text', FACES[t.text][1]); r.setProperty('--f-head', FACES[t.head][1]);
    r.setProperty('--w-text', t.wText); r.setProperty('--w-head', t.wHead); r.setProperty('--ls-text', t.ls / 1000);
    r.setProperty('--type-scale', (t.scale || 100) / 100);
  }
  var typeState = loadType(); applyType(typeState);
  var panel = document.createElement('div'); panel.className = 'typepanel';
  function opts(sel) { return FACES.map(function (f, i) { return '<option value="' + i + '"' + (i === sel ? ' selected' : '') + '>' + f[0] + '</option>'; }).join(''); }
  panel.innerHTML = '<h2>Type tester</h2>' +
    '<label>Body face <select id="tp-text">' + opts(typeState.text) + '</select><span></span></label>' +
    '<label>Body weight <input type="range" id="tp-wtext" min="300" max="900" step="10" value="' + typeState.wText + '"><output id="o-wtext">' + typeState.wText + '</output></label>' +
    '<label>Spacing <input type="range" id="tp-ls" min="-20" max="40" step="1" value="' + typeState.ls + '"><output id="o-ls">' + typeState.ls + '</output></label>' +
    '<label>Size <input type="range" id="tp-scale" min="70" max="140" step="2" value="' + (typeState.scale || 100) + '"><output id="o-scale">' + (typeState.scale || 100) + '%</output></label>' +
    '<label>Heading face <select id="tp-head">' + opts(typeState.head) + '</select><span></span></label>' +
    '<label>Heading weight <input type="range" id="tp-whead" min="300" max="900" step="10" value="' + typeState.wHead + '"><output id="o-whead">' + typeState.wHead + '</output></label>' +
    '<div class="row"><button id="tp-reset">Reset</button><button id="tp-copy">Copy settings</button><button id="tp-close">Close</button></div>' +
    '<p class="hint">Weights are continuous for the variable faces (Literata, Source Serif 4, Merriweather, Newsreader, Lora, Alegreya, Source Sans 3); others snap to their available weights. Settings persist in this browser for all decks. Send the copied line to have them baked in.</p>' +
    '<textarea id="tp-out" readonly></textarea>';
  document.body.appendChild(panel);
  function describe() { return 'body: ' + FACES[typeState.text][0] + ' ' + typeState.wText + ', spacing ' + typeState.ls + ' · heading: ' + FACES[typeState.head][0] + ' ' + typeState.wHead + ' · size ' + typeState.scale + '%'; }
  function typeChanged() {
    typeState.text = +panel.querySelector('#tp-text').value; typeState.head = +panel.querySelector('#tp-head').value;
    typeState.wText = +panel.querySelector('#tp-wtext').value; typeState.wHead = +panel.querySelector('#tp-whead').value; typeState.ls = +panel.querySelector('#tp-ls').value; typeState.scale = +panel.querySelector('#tp-scale').value;
    panel.querySelector('#o-wtext').textContent = typeState.wText; panel.querySelector('#o-whead').textContent = typeState.wHead; panel.querySelector('#o-ls').textContent = typeState.ls; panel.querySelector('#o-scale').textContent = typeState.scale + '%';
    applyType(typeState); try { localStorage.setItem(TYPE_KEY, JSON.stringify(typeState)); } catch (e) {}
    panel.querySelector('#tp-out').value = describe();
    clearTimeout(typeChanged.t); typeChanged.t = setTimeout(fitText, 150);
  }
  panel.addEventListener('input', typeChanged); panel.addEventListener('change', typeChanged);
  panel.addEventListener('keydown', function (e) { e.stopPropagation(); });
  panel.querySelector('#tp-out').value = describe();
  panel.querySelector('#tp-reset').addEventListener('click', function () {
    typeState = Object.assign({}, typeDefaults); try { localStorage.removeItem(TYPE_KEY); } catch (e) {}
    panel.querySelector('#tp-text').value = 0; panel.querySelector('#tp-head').value = 0; panel.querySelector('#tp-wtext').value = 400; panel.querySelector('#tp-whead').value = 600; panel.querySelector('#tp-ls').value = 0; panel.querySelector('#tp-scale').value = 100; typeChanged();
  });
  panel.querySelector('#tp-copy').addEventListener('click', function () { var o = panel.querySelector('#tp-out'); o.select(); try { navigator.clipboard.writeText(o.value); } catch (e) { document.execCommand('copy'); } });
  panel.querySelector('#tp-close').addEventListener('click', function () { panel.classList.remove('on'); });
  var lightbox = document.createElement('div'); lightbox.className = 'lightbox'; lightbox.innerHTML = '<img alt="">'; document.body.appendChild(lightbox);
  lightbox.addEventListener('click', function () { lightbox.classList.remove('on'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && lightbox.classList.contains('on')) { lightbox.classList.remove('on'); e.stopImmediatePropagation(); } }, true);
  window.addEventListener('resize', fit);
  window.addEventListener('hashchange', fromHash);
  if (location.search.indexOf('preview') >= 0) document.body.classList.add('preview');
  // Auto-fit: grow or shrink the base font size of text slides so the content fills the stage.
  function overflows(s) {
    var r = s.getBoundingClientRect(), k = r.height / H;
    var cs = getComputedStyle(s);
    var bottom = r.bottom - parseFloat(cs.paddingBottom) * k, right = r.right - parseFloat(cs.paddingRight) * k;
    var bad = false;
    function walk(el) {
      if (bad || el.tagName === 'ASIDE') return;
      var st = getComputedStyle(el);
      if (st.position === 'absolute' || st.position === 'fixed') return;
      var b = el.getBoundingClientRect();
      if (b.height > 0 && (b.bottom > bottom + 1 || b.right > right + 1)) { bad = true; return; }
      for (var i = 0; i < el.children.length; i++) walk(el.children[i]);
    }
    for (var i = 0; i < s.children.length; i++) walk(s.children[i]);
    return bad;
  }
  function fitText() {
    slides.forEach(function (s) {
      if (!/\b(text|split|agenda|quote)\b/.test(s.className) || s.classList.contains('nofit')) return;
      var k = (typeState && typeState.scale ? typeState.scale : 100) / 100;
      var min = 22 * k, max = (parseFloat(s.getAttribute('data-fit-max')) || 56) * k, lo = min, hi = max, best = min;
      s.classList.add('measuring');
      for (var i = 0; i < 9; i++) {
        var mid = (lo + hi) / 2;
        s.style.fontSize = mid + 'px';
        if (!overflows(s)) { best = mid; lo = mid; } else { hi = mid; }
      }
      s.style.fontSize = best.toFixed(2) + 'px';
      s.classList.remove('measuring');
    });
  }
  if (location.search.indexOf('preview') >= 0) document.body.classList.add('preview');
  // Auto-fit: grow or shrink the base font size of text slides so the content fills the stage.
  if (location.search.indexOf('preview') >= 0) document.body.classList.add('preview');
  fit();
  fromHash();
  function refit() { fitText(); show(idx, false); }
  if (document.readyState === 'complete') refit(); else window.addEventListener('load', refit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);
})();
