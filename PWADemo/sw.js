var cacheName = 'pwa-content-store-v1';

var filesToCache = [
<<<<<<< HEAD
'/'];
=======
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
>>>>>>> ec19b402425391d331cdb38f39591294eaacb8df

/* install app */
self.addEventListener('install', function (e) {
    e.waitUntil(
    caches.open(cacheName).then(function (cache) {
        return cache.addAll(filesToCache);
    })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
<<<<<<< HEAD
    // Parse the URL:
    //const requestURL = new URL(e.request.url);
    e.respondWith(caches.match(e.request).then(function (response) {
        return response || fetch(e.request).then(function (r) {
            response = r;
            caches.open(cacheName).then(function (cache) {
                cache.put(e.request, response);
            });
            return response.clone();
        });
    })
    );
});

/* remove these cached files from user’s browser and replace with new ones */
self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(keys => Promise.all(
        keys.map(key => {
            if (key !== cacheName) {
                console.log(key + 'now ready to handle fetches!');
                return caches.delete(key);
            }
        })
      )).then(() => {
          console.log(cacheName + 'now ready to handle fetches!');
      })
    );
});
=======
    e.respondWith(caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
    })
    );
});
>>>>>>> ec19b402425391d331cdb38f39591294eaacb8df
