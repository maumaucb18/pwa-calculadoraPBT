/*const CACHE_NAME = 'calculadora-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});*/
// https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
// ------------------------------
// Pre Cache and Update
// ------------------------------
importScripts('./workbox-sw.prod.v1.0.1.js');

const workboxSW = new WorkboxSW({ clientsClaim: true });
/**
 * precache() is passed a manifest of URLs and versions
 * each time the service worker starts up.
 * Use workbox-build to generate the manifest
 */
workboxSW.precache([]);
manifest
