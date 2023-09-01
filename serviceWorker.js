
const CACHE_NAME = "app-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/app.js",
    "style.css",
    "/audio/Lesson Ended 3.mp3",
    "/audio/Lesson-Ended-4.wav",
]



self.addEventListener("install", (e) => {
    // window.addEventListener("load", (e) => {
    e.waitUntil(caches.open(CACHE_NAME)
        .then(cache => {
            // console.log("open cache");
            return cache.addAll(urlsToCache)
        }))
    // })
})

self.addEventListener("activate", (e) => {
    console.log("Service worker activated");
})



// Fetch Resources
self.addEventListener("fetch", e => {
    // console.log(e);
    e.respondWith(caches.match(e.request).then(response => {
        return response || fetch(e.request);
    }))
})





