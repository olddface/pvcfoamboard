// sw.js - Service Worker
const CACHE_NAME = 'v1';
const urlsToCache = [
    './css/',
    './index.html',
    '',
    '',
    './asset-folder/IMAGES/1673704852_11_11zon.jpg',
    './asset-folder/IMAGES/BANNER CNC.jpg',
    './asset-folder/IMAGES/banner opsi3@2x-100_11zon.jpg',
    './asset-folder/IMAGES/BANNER PVC  (2)_9_11zon.jpg',
    './',
    '',
    '',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response from cache
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
