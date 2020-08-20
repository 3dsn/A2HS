self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('TestePWA-store').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/botao.js',
                '/images/icons',
                '/images/icons/icon-128x128.png',
                '/images/icons/icon-144x144.png',
                '/images/icons/icon-152x152.png',
                '/images/icons/icon-192x192.png',
                '/images/icons/icon-384x384.png',
                '/images/icons/icon-512x512.png',
                '/images/icons/icon-72x72.png',
                '/images/icons/icon-96x96.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});