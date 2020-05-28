const staticCachename = "static-files";
const assets = ["/", "/index.html", "/offline.html"];

self.addEventListener('install', event => {
    self.skipWaiting();

    console.log('sw installed at:', new Date().toLocaleTimeString());
    event.waitUntil(
        caches.open(staticCachename).then((cache) => {
            cache.addAll(assets);
        })
    );

});

self.addEventListener('activate', event => {
    self.skipWaiting();
    console.log("sw activated at:", new Date().toLocaleTimeString());
});

self.addEventListener('fetch', event => {
    console.log(event.request.url);
    if (!navigator.onLine) {
        EventTarget.respondWith(
            caches.match(event.request).then((cacheRes) => {
                return cacheRes
            })
        );
    } else {
        if (event.request.method === "GET") {
            return updateCache(event.request)
        } else {
            return fetch(event.request)
        }
    }
});

function updateCache(request) {
    return fetch(request).then((response) => {
        if (response) {
            return caches.open(staticCachename).then((cache) => {
                return cache.put(request,
                    response.clone())
                    .then(() => {
                        return response;
                    })
            });
        }
    })

}