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
    "revision": "ed4a933e553f644c7125044606e0d173"
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
    "url": "assets/js/10.2d250fdf.js",
    "revision": "182f5e2397e8958be3ef49a076ae7275"
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
    "url": "assets/js/2.7e5ffb75.js",
    "revision": "2828cfb6edb8deb8a5ec2dbab3d09ce9"
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
    "url": "assets/js/app.bbbbf138.js",
    "revision": "423272031e405d253879fd45d6768125"
  },
  {
    "url": "index.html",
    "revision": "ba813c5dd7bb5a30860191b317e91a40"
  },
  {
    "url": "js/custom.js",
    "revision": "f824c93bba723b1cd2436a862948725a"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "be1a96aea8ba1b68f098147d512bf576"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "c9e7e1d899ec0bc3573e4d9246d222d4"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "8df3e426781866f8814626549b068278"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "c8035ede45a84a6e6495bba8d534d6e2"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "c3048db86532a2aa56a879d67a21e294"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "78abd99461abee28dbd26b41d3c1a5cc"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "d5c22a41131b8eadbb83a621d50ed5f3"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "2e3686c0e735285fdca246396b686fea"
  },
  {
    "url": "Linux/1.html",
    "revision": "c069b21804b9e99c2b9fe490d69cfc43"
  },
  {
    "url": "Linux/index.html",
    "revision": "892cd493d8be0f098d13865874bb4903"
  },
  {
    "url": "markdown/index.html",
    "revision": "ae1e4968fd681dc8531f51ab824d3c7a"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "36e9c8a1ef061853673b2aeff428c26b"
  },
  {
    "url": "mathjax/index.html",
    "revision": "e7598e995b7d2b11fa716e6c86020aeb"
  },
  {
    "url": "ML/elkan.html",
    "revision": "5ef505587422d7fc0f31f6a7e2773879"
  },
  {
    "url": "ML/index.html",
    "revision": "31235a6f5ef3100ed336b4ec4b5cbe0a"
  },
  {
    "url": "SQLite/1.html",
    "revision": "807ad29a92a84700471e4f4562d5195a"
  },
  {
    "url": "SQLite/2.html",
    "revision": "586e71d8aaff07f5ff0339244f780f22"
  },
  {
    "url": "SQLite/index.html",
    "revision": "f00df46ff02e72c5476a3a6553d36aa3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
