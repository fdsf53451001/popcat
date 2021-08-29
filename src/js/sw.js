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
    console.log('now fetch!');
    const dataUrl = 'http://localhost';
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request).then(res =>
				// 存 caches 之前，要先打開 caches.open(dataCacheName)
				caches.open(dataCacheName)
				.then(function(cache) {
					// cache.put(key, value)
					// 下一次 caches.match 會對應到 event.request
					cache.put(event.request, res.clone());
					return res;
				})
			);
		})
	);
});