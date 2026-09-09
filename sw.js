/* Service worker: guarda la app en el celular para que abra rápido y funcione sin señal.
   Cada vez que se publica una versión nueva, cambia el número de VERSION. */
const VERSION = 'stm-v2.4.1';
const SHELL = ['./', './index.html', './styles.css', './app.js', './datos.js', './manifest.webmanifest', './img/stm-crest.png', './icons/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

/* Primero intenta la red (para tener el contenido más nuevo); si no hay señal, usa la copia guardada. */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
