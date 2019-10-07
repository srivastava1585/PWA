var cacheName = 'pwa-content-store-v1';

var filesToCache = [
'/',
'/Account/Login',
'/Home/About',
'/Home/Contact',
'/Account/Register',
'/Scripts/main.js',
'/Content/bootstrap.css',
'/Content/site.css',
'/Scripts/modernizr-2.6.2.js',
'/Scripts/jquery-1.10.2.min.js',
'/Scripts/bootstrap.js',
'/Scripts/respond.js',
'/Assets/Images/Image1.jpg',
'/Assets/Images/Image2.jpg',
'/Assets/Images/Image3.jpg',
'/Assets/Images/Image4.jpg'];

self.addEventListener('install', function (e) {
    e.waitUntil(
    caches.open(cacheName).then(function (cache) {
        return cache.addAll(filesToCache);
    })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
    })
    );
});

    );

});
