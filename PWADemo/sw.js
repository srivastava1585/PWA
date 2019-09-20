<<<<<<< HEAD
var cacheName = 'PSoC'; 
  
var filesToCache = [
 
'/',    
 
'/Account/Login', 
   
'/Scripts/main.js'];
    
self.addEventListener('install', function(e) { 
 
e.waitUntil(
       
caches.open(cacheName).then(function(cache) { 
        
return cache.addAll(filesToCache);   
    
})    
 
);  
 
}); 
    
/* Serve cached content when offline */ 
  
self.addEventListener('fetch', function(e) {  
   
e.respondWith(      caches.match(e.request).then(function(response) {  
       
return response || fetch(e.request);
       
})   
  
);  
 
=======
var cacheName = 'PSoC'; 
  
var filesToCache = [
 
'/',    
 
'/Account/Login', 
   
'/Scripts/main.js'];
    
self.addEventListener('install', function(e) { 
 
e.waitUntil(
       
caches.open(cacheName).then(function(cache) { 
        
return cache.addAll(filesToCache);   
    
})    
 
);  
 
}); 
    
/* Serve cached content when offline */ 
  
self.addEventListener('fetch', function(e) {  
   
e.respondWith(      caches.match(e.request).then(function(response) {  
       
return response || fetch(e.request);
       
})   
  
);  
 
>>>>>>> 7ad166977e2cfc9a3bbb4eb9e38f22befb25c4f2
});