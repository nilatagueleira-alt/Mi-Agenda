const CACHE="agenda-v1";
const ASSETS=["agenda-universitaria-elegante-v11-libretita-visible.html","manifest.json"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
