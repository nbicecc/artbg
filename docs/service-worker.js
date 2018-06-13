/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c1dcce395dba8956898dbe52708225dd"
  },
  {
    "url": "assets/css/20.styles.cd733759.css",
    "revision": "f672524b0df9cb42605c9852128f873a"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/0.28751148.js",
    "revision": "67f819e2a3fc2e5cd310306fcbd1dd3f"
  },
  {
    "url": "assets/js/1.4d9d1b3c.js",
    "revision": "b977d9cbdfd4d17e0050a5802d300b75"
  },
  {
    "url": "assets/js/10.512d373b.js",
    "revision": "825dc7ac17999b2bf8de49e5f68eedea"
  },
  {
    "url": "assets/js/11.1d9a614a.js",
    "revision": "47a8fc9ee9d8d36b524aeba54e988e08"
  },
  {
    "url": "assets/js/12.6338883e.js",
    "revision": "b6b0fdd68269d9ff4596197868aeae38"
  },
  {
    "url": "assets/js/13.dbb4fac8.js",
    "revision": "0cccbe5e421b9c1d8babb480a012c8b1"
  },
  {
    "url": "assets/js/14.089dba92.js",
    "revision": "58c7033fdec6650d3bc02a1fd90b7256"
  },
  {
    "url": "assets/js/15.28f433f0.js",
    "revision": "3e6c746d276a38f4776deada9fbce4e5"
  },
  {
    "url": "assets/js/16.42122a2f.js",
    "revision": "2d2ed73e35bbe1ae33f07e7b80379872"
  },
  {
    "url": "assets/js/17.ee456609.js",
    "revision": "66fe9f37a1d6be348600ffe9d9fcd985"
  },
  {
    "url": "assets/js/18.a326902d.js",
    "revision": "dcde16b1976abd67766b794e1fcb4a75"
  },
  {
    "url": "assets/js/19.d27cd5c5.js",
    "revision": "b7340e0e831dc526e53d024e3af685f9"
  },
  {
    "url": "assets/js/2.39bc110f.js",
    "revision": "661bc6ee83c6fb2264721dcb34581a86"
  },
  {
    "url": "assets/js/3.8a03f68c.js",
    "revision": "3aff66cbaa5943b06875ff8c6d6f965f"
  },
  {
    "url": "assets/js/4.9cd52f8e.js",
    "revision": "ab9d08d758ceda92dbc01fc4d5d9f100"
  },
  {
    "url": "assets/js/5.9a1e7694.js",
    "revision": "9a7d89213b4eb334b8856218ec8e0592"
  },
  {
    "url": "assets/js/6.f557888a.js",
    "revision": "a5a327009efe9831dbef38642419ea80"
  },
  {
    "url": "assets/js/7.399c97b3.js",
    "revision": "14b738a7b908919daac3d94d9b0fa21d"
  },
  {
    "url": "assets/js/8.6f73dab8.js",
    "revision": "403bf269bab0e3d1397d6e97d3bb7e50"
  },
  {
    "url": "assets/js/9.df2b533c.js",
    "revision": "7c6741148cf9e880caa4ed31544a2be0"
  },
  {
    "url": "assets/js/app.ac5cdc57.js",
    "revision": "6b081b6a8926e0f3cd944c562d265bdd"
  },
  {
    "url": "index.html",
    "revision": "796a4d153506a5a0e62883852997516c"
  },
  {
    "url": "js/custom.js",
    "revision": "f824c93bba723b1cd2436a862948725a"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "97779b97bd571235fd61af348fe9c60b"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "91e1349296a544c4ace7ee7023cd38f2"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "b624510d86e6eca1e364071070fdb268"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "2692d5d903bb0a03dfcfc665647b038d"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "b3b1c665580ed7edb35a8dbcdbb75b93"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "0fb9bc090313fba70de59cca6f1650e6"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "62d942d3cb08b6f754ae2b22884b6016"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "8b2ff423805ed59124b9b062ebba34e0"
  },
  {
    "url": "Linux/1.html",
    "revision": "029b82790d7f6335300f069346d4969b"
  },
  {
    "url": "Linux/index.html",
    "revision": "886eac465ad2272aca24fb74714272e6"
  },
  {
    "url": "markdown/index.html",
    "revision": "b5709d15344eea309b3c31b3a0515be3"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "bf31cb22c71bd396b9e506b9def759f1"
  },
  {
    "url": "mathjax/index.html",
    "revision": "32883ce43fdb105d51787f056274cdc6"
  },
  {
    "url": "ML/elkan.html",
    "revision": "2ced4e21f1075502b37503da5ad13630"
  },
  {
    "url": "ML/index.html",
    "revision": "c8ecced9e890f56de8a35cbfcfb63cd6"
  },
  {
    "url": "SQLite/1.html",
    "revision": "1128afcd5594b95d01e9b1b5e2f3742e"
  },
  {
    "url": "SQLite/2.html",
    "revision": "12c140aaf30f6f8b830051aefeedde9c"
  },
  {
    "url": "SQLite/index.html",
    "revision": "f46a4742674692752241e1dde7d86a2c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
