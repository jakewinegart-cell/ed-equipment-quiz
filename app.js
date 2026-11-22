(function () {
  'use strict';
  const ITEMS = window.ITEMS.filter((it) => window.IMAGES[it.id]);
  const IMG = window.IMAGES, CATS = window.CATS;
  const byId = Object.fromEntries(ITEMS.map((it) => [it.id, it]));
  const LEVELS = { 1: 'Level 1 · Basic', 2: 'Level 2 · Intermediate', 3: 'Level 3 · Advanced' };
  const STAR_KEY = 'edq-stars-v1';
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ---- seeded RNG helpers ----
  const hash = (s) => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  function rng32(a) { return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffle(a, r) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  // ---- stars (saved on this device) ----
  let stars = new Set();
  try { stars = new Set(JSON.parse(localStorage.getItem(STAR_KEY) || '[]').filter((id) => byId[id])); } catch (e) { stars = new Set(); }
  const saveStars = () => { try { localStorage.setItem(STAR_KEY, JSON.stringify([...stars])); } catch (e) { /* private mode */ } };

  // ---- state ----
  let cat = 'all', lvl = 0, hardOnly = false, shuffled = false, seed = 1;
  let deck = [], idx = 0, answers = {}, optCache = {}, showingDone = false;

  function pool() {
    return ITEMS.filter((it) => (cat === 'all' || it.cat === cat) && (!lvl || it.level === lvl) && (!hardOnly || stars.has(it.id)));
  }
  function buildDeck() {
    const p = pool().map((it) => it.id);
    if (shuffled) return shuffle(p, rng32((Math.random() * 2 ** 32) >>> 0));
    // default: basic -> advanced, mixed within each level (stable order)
    const r = rng32(777); const out = [];
    [1, 2, 3].forEach((L) => out.push(...shuffle(p.filter((id) => byId[id].level === L), r)));
    return out;
  }
  function options(id) {
    if (optCache[id]) return optCache[id];
    const it = byId[id], r = rng32(hash(id) ^ seed);
    const picks = [];
    const add = (x) => { if (x && x !== id && byId[x] && !picks.includes(x) && byId[x].name !== it.name && picks.length < 3) picks.push(x); };
    shuffle((it.sim || []).slice(), r).forEach(add);
    shuffle(ITEMS.filter((x) => x.cat === it.cat).map((x) => x.id), r).forEach(add);
    shuffle(ITEMS.map((x) => x.id), r).forEach(add);
    return (optCache[id] = shuffle([id, ...picks], r));
  }
  const score = () => { const a = Object.values(answers); const x = a.filter((z) => z.ok).length; return { x, y: a.length, p: a.length ? Math.round((x / a.length) * 100) : 0 }; };

  function renderScore() {
    const s = score();
    $('score').innerHTML = `You got ${s.x} out of ${s.y} correct · <span class="pct">${s.y ? s.p + '%' : '0%'}</span>`;
  }
  function renderHardCount() {
    $('hardCount').textContent = stars.size;
    $('hardBtn').setAttribute('aria-pressed', String(hardOnly));
  }
  function renderStar(id) {
    const on = stars.has(id);
    $('starBtn').setAttribute('aria-pressed', String(on)); $('starBtn').textContent = on ? '★' : '☆';
    $('starBtn').setAttribute('aria-label', on ? 'Unstar (remove from hard ones)' : 'Star as hard');
    $('starInline').setAttribute('aria-pressed', String(on));
    $('starInline').textContent = on ? '★ Starred as hard (tap to unstar)' : '☆ Star this one as hard';
  }
  function creditHTML(m) {
    if (m.type === 'illustration') return 'Illustration drawn for this app (not a photo).';
    const lic = m.licenseUrl ? `<a href="${esc(m.licenseUrl)}" target="_blank" rel="noopener">${esc(m.license)}</a>` : esc(m.license);
    return `Photo: ${esc(m.author)} · ${lic} · <a href="${esc(m.source)}" target="_blank" rel="noopener">Wikimedia Commons</a>`;
  }

  function setView(v) { $('quiz').hidden = v !== 'quiz'; $('empty').hidden = v !== 'empty'; $('done').hidden = v !== 'done'; showingDone = v === 'done'; }

  function show(dir) {
    renderScore(); renderHardCount();
    if (!deck.length) {
      setView('empty');
      $('progress').textContent = 'Item 0 / 0'; $('levelTag').textContent = ''; $('barFill').style.width = '0';
      const filtered = cat !== 'all' || lvl;
      $('emptyMsg').textContent = hardOnly
        ? (stars.size && filtered ? `You have ${stars.size} starred, but none match this category/level. Switch to "All" to see them.` : 'Tap the ☆ on any card to save it here, then come back to retake just those.')
        : 'No items match this category and level.';
      $('empty').querySelector('h2').textContent = hardOnly ? (stars.size ? 'No starred items here' : 'No hard ones starred yet') : 'Nothing here';
      $('emptyBack').textContent = hardOnly ? 'Back to all items' : 'Show all items';
      return;
    }
    setView('quiz');
    const id = deck[idx], it = byId[id], m = IMG[id], ans = answers[idx];
    $('progress').textContent = `${hardOnly ? '★ Hard ones · ' : ''}Item ${idx + 1} / ${deck.length}`;
    $('levelTag').textContent = `${CATS[it.cat]} · L${it.level}`;
    $('barFill').style.width = ((idx + 1) / deck.length * 100) + '%';
    const pic = $('pic'); pic.src = m.src; pic.alt = ans ? it.name : 'Mystery item ' + (idx + 1);
    $('illoTag').hidden = m.type !== 'illustration';
    $('credit').innerHTML = creditHTML(m);
    renderStar(id);
    $('options').innerHTML = options(id).map((oid, i) => `<button class="opt" data-id="${oid}"><span class="L">${'ABCD'[i]}</span><span>${esc(byId[oid].name)}</span></button>`).join('');
    $('options').querySelectorAll('.opt').forEach((el) => el.addEventListener('click', () => answer(el.dataset.id)));
    $('feedback').hidden = true;
    if (ans) paint(ans.choice);
    $('prevBtn').disabled = idx === 0;
    $('nextBtn').textContent = idx === deck.length - 1 ? 'Finish ✓' : 'Next ›';
    if (dir) { const c = $('card'); c.classList.remove('anim', 'animBack'); void c.offsetWidth; c.classList.add(dir < 0 ? 'animBack' : 'anim'); }
    const nx = deck[idx + 1]; if (nx) { const pre = new Image(); pre.src = IMG[nx].src; }
  }
  function paint(choice) {
    const id = deck[idx], it = byId[id], ok = choice === id;
    $('options').querySelectorAll('.opt').forEach((el) => {
      el.disabled = true;
      if (el.dataset.id === id) el.classList.add('correct');
      else if (el.dataset.id === choice) el.classList.add('wrong');
      else el.classList.add('dim');
    });
    const v = $('verdict'); v.className = 'verdict ' + (ok ? 'ok' : 'bad');
    v.textContent = ok ? '✓ Correct: ' + it.name : '✗ Not quite. It’s the ' + it.name;
    $('why').innerHTML = it.why.map((w) => `<li>${esc(w)}</li>`).join('');
    $('pic').alt = it.name;
    $('feedback').hidden = false;
  }
  function answer(choice) {
    if (answers[idx] || !deck.length) return;
    answers[idx] = { choice, ok: choice === deck[idx] };
    paint(choice); renderScore();
  }
  function toggleStar() {
    if (!deck.length || showingDone) return;
    const id = deck[idx];
    if (stars.has(id)) stars.delete(id); else stars.add(id);
    saveStars(); renderStar(id); renderHardCount();
  }
  function go(d) {
    if (showingDone) { if (d < 0) { setView('quiz'); show(-1); } return; }
    if (!deck.length) return;
    const n = idx + d;
    if (n < 0) return;
    if (n >= deck.length) { finish(); return; }
    idx = n; show(d); window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function finish() {
    const s = score();
    setView('done');
    $('doneMsg').innerHTML = `You got <b>${s.x} out of ${s.y}</b> correct${s.y ? ` · <b>${s.p}%</b>` : ''}` + (s.y < deck.length ? `<br>(${deck.length - s.y} left unanswered)` : '') + `<br>You have <b>${stars.size}</b> starred as hard.`;
    $('doneHard').disabled = !stars.size;
    $('doneHard').textContent = `★ Retake hard ones (${stars.size})`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function restart() { seed = (seed * 31 + 7) >>> 0; optCache = {}; deck = buildDeck(); idx = 0; answers = {}; show(1); window.scrollTo({ top: 0 }); }

  // ---- filters ----
  const counts = {}; ITEMS.forEach((it) => { counts[it.cat] = (counts[it.cat] || 0) + 1; });
  $('catSel').innerHTML = `<option value="all">All categories</option>` + Object.keys(CATS).filter((k) => counts[k]).map((k) => `<option value="${k}">${CATS[k]} (${counts[k]})</option>`).join('');
  $('catSel').addEventListener('change', (e) => { cat = e.target.value; restart(); });
  $('lvlSel').addEventListener('change', (e) => { lvl = +e.target.value; restart(); });
  $('hardBtn').addEventListener('click', () => { hardOnly = !hardOnly; restart(); });
  $('emptyBack').addEventListener('click', () => { hardOnly = false; cat = 'all'; lvl = 0; $('catSel').value = 'all'; $('lvlSel').value = '0'; restart(); });
  $('doneHard').addEventListener('click', () => { hardOnly = true; cat = 'all'; lvl = 0; $('catSel').value = 'all'; $('lvlSel').value = '0'; restart(); });
  $('doneRestart').addEventListener('click', restart);
  $('doneBack').addEventListener('click', () => go(-1));

  $('nextBtn').addEventListener('click', () => go(1));
  $('prevBtn').addEventListener('click', () => go(-1));
  $('starBtn').addEventListener('click', toggleStar);
  $('starInline').addEventListener('click', toggleStar);
  $('restartBtn').addEventListener('click', () => { if (!Object.keys(answers).length || confirm('Restart this deck and reset your score?')) restart(); });
  $('shuffleBtn').addEventListener('click', () => { shuffled = !shuffled; $('shuffleBtn').setAttribute('aria-pressed', String(shuffled)); restart(); });

  // ---- credits ----
  function openCredits() {
    if (!$('creditList').children.length) {
      $('creditList').innerHTML = ITEMS.slice().sort((a, b) => a.name.localeCompare(b.name)).map((it) => {
        const m = IMG[it.id];
        const body = m.type === 'illustration' ? 'Illustration drawn for this app · original work'
          : `${esc(m.author)} · ${m.licenseUrl ? `<a href="${esc(m.licenseUrl)}" target="_blank" rel="noopener">${esc(m.license)}</a>` : esc(m.license)}<br><a href="${esc(m.source)}" target="_blank" rel="noopener">${esc(m.title)}</a>`;
        return `<li><img loading="lazy" src="${m.src}" alt=""><div><b>${esc(it.name)}</b>${body}</div></li>`;
      }).join('');
    }
    $('credits').hidden = false;
  }
  $('creditsBtn').addEventListener('click', openCredits);
  $('creditsClose').addEventListener('click', () => { $('credits').hidden = true; });
  $('credits').addEventListener('click', (e) => { if (e.target.id === 'credits') $('credits').hidden = true; });

  // ---- keyboard + swipe ----
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'SELECT') return;
    if (!$('credits').hidden) { if (e.key === 'Escape') $('credits').hidden = true; return; }
    if (e.key === 'ArrowRight') go(1);
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 's' || e.key === 'S') toggleStar();
    else { const k = Math.max('abcd'.indexOf(e.key.toLowerCase()), '1234'.indexOf(e.key)); if (k >= 0) { const el = $('options').querySelectorAll('.opt')[k]; if (el && !el.disabled) el.click(); } }
  });
  let sx = null, sy = null;
  $('card').addEventListener('touchstart', (e) => { const t = e.changedTouches[0]; sx = t.clientX; sy = t.clientY; }, { passive: true });
  $('card').addEventListener('touchend', (e) => {
    if (sx == null) return; const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy; sx = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
  }, { passive: true });

  window.__edq = { get deck() { return deck; }, get idx() { return idx; }, stars: () => [...stars], answer, go, toggleStar, items: ITEMS };   // test hook
  deck = buildDeck(); show(0);
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
