const C = 'ed-equipment-quiz-v2';
const SHELL = ['./', 'index.html', 'style.css', 'items.js', 'images.js', 'app.js', 'icon.svg', 'manifest.webmanifest'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(C).then((c) => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== C).map((k) => caches.delete(k))))); self.clients.claim(); });
// App shell: network first (so updates show up), fall back to cache. Images: cache first, filled as you go.
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (u.pathname.includes('/img/')) {
    e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request).then((res) => { const cp = res.clone(); caches.open(C).then((c) => c.put(e.request, cp)); return res; })));
  } else {
    e.respondWith(fetch(e.request).then((res) => { const cp = res.clone(); caches.open(C).then((c) => c.put(e.request, cp)); return res; }).catch(() => caches.match(e.request)));
  }
});
