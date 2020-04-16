importScripts("/assets/js/workbox-v5.1.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v5.1.1"});

self.__precacheManifest = [{"url":"/index.html","revision":"6f35f861e069c6fe9aa8e259d1e43af7"},{"url":"/html5/technology/2016/01/20/game.html","revision":"c145dc5de6eb714de79ebbb392c0d79f"},{"url":"/association/diy/technology/2015/09/04/repair.html","revision":"05c6181c19ecd1d6c62be31a82d68cff"},{"url":"/arduino/raspberrypi/2015/07/10/screen.html","revision":"b27351a15ea6d1951bb5d5ef127de3a1"},{"url":"/arduino/raspberrypi/reverse%20engineering/2015/03/12/weather-station.html","revision":"1956eceeda9a86a5980d0a91f6e70c1e"},{"url":"/general/2014/12/11/opening.html","revision":"5652fb1508846ac0270d2599b3f77fee"}];

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'my-blog',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `NetworkFirst` strategy for html
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.NetworkFirst()
);

// use `StaleWhileRevalidate` strategy for css and js
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate()
);

// use `CacheFirst` strategy for images
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst()
);
