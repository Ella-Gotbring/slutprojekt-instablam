
self.addEventListener('install', event => {
    console.log('ServiceWorker installed at: ', new Date().toLocaleTimeString());
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll(['index.html', 'offline.html'])
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('ServiceWorker activated at: ', new Date().toLocaleTimeString());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (!navigator.onLine) {
                    if (response) {
                        return response;
                    } else {
                        return caches.match(new Request('offline.html'));
                    }
                } else {
                    return updateCache(event.request);
                }
            })
    )
});

async function updateCache(request) {
    return fetch(request).then((response) => {
        if (response) {
            return caches.open('v1').then((cache) => {
                return cache.put(request, response.clone())
                    .then(() => {
                        return response;
                    })
            });
        }
    })
}