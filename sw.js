// install
self.addEventListener('install', e => {
	e.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll(["./", "./result.html", "./scan.html", "./index.js", "./script/html5-qrcode.min.js", "./script/moment-with-locales.js", "./script/jquery.min.js", "./images/icon-128x128.png"]);
		})
	);
});


self.addEventListener("fetch", e => {
	console.log(`inter for: ${e.request.url}`);
});