const cacheFiles = [
    'index.html',
    'index.css',
    'src/js/global.js',
    'src/js/index.js',
    'src/js/view.js',
    'asset/photo/CAT1.JPG',
    'asset/photo/CAT2.JPG',
]
const cacheName = 'static-v1';

//install
self.addEventListener('install',event=>{
    console.log('installing');
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(cacheFiles);
        })
    );
});

//activate
self.addEventListener('activate',event=>{
    console.log('activated, ready to fetch request.');
	  event.waitUntil(
		caches.keys().then(function(cacheNames) {
            console.log(cacheNames)
			var promiseArr = cacheNames.map(function(item) {
                console.log(item);
				if (item !== cacheName) {
					// Delete that cached file
					return caches.delete(item);
				}
			})
			return Promise.all(promiseArr);
		})
	);
});

//fetch
self.addEventListener('fetch',event=>{
    console.log('now fetch!',event.request);
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request).then(res =>
				caches.open(cacheName)
				.then(function(cache) {
					// cache.put(key, value)
					cache.put(event.request, res.clone());
					return res;
				})
			);
		})
	);
});