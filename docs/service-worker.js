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
    "revision": "ac3a64b77298ee9bc4207946aaf05518"
  },
  {
    "url": "about/index.html",
    "revision": "41a09ec3b52cec227c41467d9ef9a288"
  },
  {
    "url": "assets/css/22.styles.5a6a753a.css",
    "revision": "f672524b0df9cb42605c9852128f873a"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/0.150a916a.js",
    "revision": "b22b8068301af8ae657ffd59c15b5700"
  },
  {
    "url": "assets/js/1.e30cecaf.js",
    "revision": "3b9270523d1d58e59a628bd906985563"
  },
  {
    "url": "assets/js/10.5c24085b.js",
    "revision": "78cddeef0fe64a74df2867731d726e15"
  },
  {
    "url": "assets/js/11.12bf63ab.js",
    "revision": "738deaf07e9a2c717ef809dde098de24"
  },
  {
    "url": "assets/js/12.8f684032.js",
    "revision": "3d395edf7baec2f9cb2c40753687f56f"
  },
  {
    "url": "assets/js/13.bcbd45bf.js",
    "revision": "8995130b6ba089e4b021d0cbc1923d6b"
  },
  {
    "url": "assets/js/14.94d24b6a.js",
    "revision": "2e5a3a00c2f7529b39537c4d72f046f6"
  },
  {
    "url": "assets/js/15.c44ae8af.js",
    "revision": "988806773fb0bb31a5fa6a778d8a925e"
  },
  {
    "url": "assets/js/16.272fcf7a.js",
    "revision": "8c47fcc27754d882585d1e2c49e1911b"
  },
  {
    "url": "assets/js/17.8bf3ba36.js",
    "revision": "390b9d52c787172733290e9d6720ebfa"
  },
  {
    "url": "assets/js/18.62a0f222.js",
    "revision": "68f82ebbf6bb5742fe509bfb5991be96"
  },
  {
    "url": "assets/js/19.0970f135.js",
    "revision": "2befb4d8a7ac1b4d96d4ce4e308330d7"
  },
  {
    "url": "assets/js/2.b969faf6.js",
    "revision": "e94d0dd6695673a6543ddccc3982612e"
  },
  {
    "url": "assets/js/20.db414069.js",
    "revision": "10da76b9ee9fbc493f5f8fa8b749e59c"
  },
  {
    "url": "assets/js/21.1257f805.js",
    "revision": "2902dbb218d87d6794363be4e2cf6740"
  },
  {
    "url": "assets/js/3.86aeb167.js",
    "revision": "02de892b3eae4811a0eea743dc6fd607"
  },
  {
    "url": "assets/js/4.ded13591.js",
    "revision": "85a183a00b637f1e4cd53672b955971b"
  },
  {
    "url": "assets/js/5.8451b38e.js",
    "revision": "db722716f70139bd59084cd3f5d355f5"
  },
  {
    "url": "assets/js/6.4edca215.js",
    "revision": "a5573d2873dc630c12a0d59dd982ea6c"
  },
  {
    "url": "assets/js/7.47c9ba0a.js",
    "revision": "86e5dc956c479760397bf7ebca7a7b02"
  },
  {
    "url": "assets/js/8.4f107ee9.js",
    "revision": "ba1f5ef0e5747f6da75d7dc3599c4687"
  },
  {
    "url": "assets/js/9.730f2bd9.js",
    "revision": "0885e2c88724571e969e17193ad15fda"
  },
  {
    "url": "assets/js/app.d6cd9e3b.js",
    "revision": "9c1f1a418fc6e19fe0a4b9b84cce5c2a"
  },
  {
    "url": "index.html",
    "revision": "7433bdd7edb071ceedbc78733b25a4ee"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "69a7235b78dc0abf167eb7ef8184b3a6"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "5172b197b821a64931820e96c24ab4a1"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "463a301a200a56accb25eba316771df8"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "93df233ffa1c2564b648c025e696e88f"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "c0ff65cf4920dd9d8526a9fec80db88a"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "cb0f659431dbb4b65faef597aa094662"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "7169c3c418bd369fadf96579996176dd"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "958b643016ada4b39d15b1d0725cb4dc"
  },
  {
    "url": "Linux/1.html",
    "revision": "8f39dc971dedb2f7b71c9e675ed933a4"
  },
  {
    "url": "Linux/index.html",
    "revision": "a17b687f03c017e9c5eb7532da160cb6"
  },
  {
    "url": "markdown/index.html",
    "revision": "822a9ba00124a0be6fcc3ccec00d321f"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "97f88ff11677cd44f668c04dcef2d4d9"
  },
  {
    "url": "mathjax/index.html",
    "revision": "05e75dccfaf23a950b535f023789c21e"
  },
  {
    "url": "ML/elkan.html",
    "revision": "e337d3a75368fc948ebfbb30d7288c79"
  },
  {
    "url": "ML/index.html",
    "revision": "00accb2692efae8c7f13defdf0d7d793"
  },
  {
    "url": "SQLite/1.html",
    "revision": "bf4c238aed01c659e0657a702ac05d8e"
  },
  {
    "url": "SQLite/2.html",
    "revision": "e0d2976708e3d5278afa462e5344d259"
  },
  {
    "url": "SQLite/index.html",
    "revision": "091105f3afc39848b31f7c3baff52a1d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
