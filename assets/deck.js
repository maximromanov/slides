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

  function show(n, push) {
    n = Math.max(0, Math.min(slides.length - 1, n));
    idx = n;
    slides.forEach(function (s, i) { s.classList.toggle('current', i === n); });
    if (progress) progress.style.width = ((n + 1) / slides.length * 100) + '%';
    if (counter) counter.textContent = (n + 1) + ' / ' + slides.length;
    if (push !== false) history.replaceState(null, '', '#' + (n + 1));
    if (channel) channel.postMessage({ idx: n });
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

  function openNotes() {
    var win = window.open('', 'deck-notes', 'width=900,height=700');
    if (!win) return;
    var doc = win.document;
    doc.open();
    doc.write('<!doctype html><html><head><meta charset="utf-8"><title>Speaker notes</title><style>' +
      'body{margin:0;font-family:Georgia,serif;background:#1c1917;color:#eee;display:grid;grid-template-rows:auto 1fr auto;height:100vh}' +
      'header{padding:14px 20px;font:14px/1.4 ui-monospace,Menlo,monospace;letter-spacing:.1em;color:#aaa;border-bottom:1px solid #333;display:flex;justify-content:space-between}' +
      'main{padding:24px 28px;overflow:auto;font-size:22px;line-height:1.5}main p{margin:0 0 .8em}' +
      '.next{padding:14px 20px;border-top:1px solid #333;color:#bbb;font-size:16px}.next b{color:#eee}' +
      '.empty{color:#666;font-style:italic}</style></head><body><header><span id="pos"></span><span id="clock"></span></header><main id="notes"></main><div class="next" id="next"></div></body></html>');
    doc.close();
    var start = Date.now();
    function render(n) {
      var s = slides[n]; if (!s) return;
      var notes = s.querySelector('aside.notes');
      doc.getElementById('pos').textContent = 'SLIDE ' + (n + 1) + ' / ' + slides.length + ' · ' + (s.getAttribute('data-title') || '');
      doc.getElementById('notes').innerHTML = notes ? notes.innerHTML : '<p class="empty">No notes for this slide.</p>';
      var nx = slides[n + 1];
      doc.getElementById('next').innerHTML = nx ? 'Next: <b>' + (nx.getAttribute('data-title') || ('slide ' + (n + 2))) + '</b>' : 'Last slide.';
    }
    render(idx);
    setInterval(function () {
      var t = Math.floor((Date.now() - start) / 1000);
      doc.getElementById('clock').textContent = Math.floor(t / 60) + ':' + ('0' + (t % 60)).slice(-2);
    }, 1000);
    if (channel) {
      var rx = new BroadcastChannel('deck-' + location.pathname);
      rx.onmessage = function (e) { if (e.data && typeof e.data.idx === 'number') render(e.data.idx); };
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case ' ': case 'PageDown': case 'n': case 'j': show(idx + 1); e.preventDefault(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': case 'p': case 'k': show(idx - 1); e.preventDefault(); break;
      case 'Home': show(0); break;
      case 'End': show(slides.length - 1); break;
      case 'f': case 'F': if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); break;
      case 'o': case 'O': case 'Escape': if (e.key === 'Escape' && help.classList.contains('on')) { help.classList.remove('on'); break; } toggleOverview(e.key === 'Escape' ? false : undefined); break;
      case 's': case 'S': openNotes(); break;
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
    var r = stage.getBoundingClientRect();
    show((e.clientX - r.left) / r.width > 0.5 ? idx + 1 : idx - 1);
  });
  // touch: swipe
  var tx = null;
  document.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 40) show(dx < 0 ? idx + 1 : idx - 1);
  });
  help.addEventListener('click', function () { help.classList.remove('on'); });
  window.addEventListener('resize', fit);
  window.addEventListener('hashchange', fromHash);
  fit(); fromHash();
})();
