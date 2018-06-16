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
    "revision": "530a8c69c029bc5afcba0fe64492567c"
  },
  {
    "url": "about/index.html",
    "revision": "07ce0b5f10e8c6b1d08440c87631c853"
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
    "url": "assets/js/11.0f6d8556.js",
    "revision": "78cf346892e0be014fc3fec19c98b220"
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
    "url": "assets/js/app.db244ed3.js",
    "revision": "743deebb7212fbbf18bf128e235c06f2"
  },
  {
    "url": "index.html",
    "revision": "3091811adfea0b98e079dee54949ee19"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "20079fcd9d17569f4e88a239bbf36d20"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "7ed9e36c23f13c6bedd85f124a53bfa6"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "989cc0335163d2745fc915cbcd837ff3"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "c3f638a897cdf0a3e6b3eaed53b48582"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "dc68fb0635856a8fd30e4b4b266d4674"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "c50cdfa20f88c9218054a54c2cfb25f3"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "5d7158d2e4925062fa2a9db3cd526651"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "0478e2a902561591c338b7520f280c96"
  },
  {
    "url": "Linux/1.html",
    "revision": "6636d501855b1fe76b2a5cb97a073d79"
  },
  {
    "url": "Linux/index.html",
    "revision": "11a8f34bef7732968a32faf49cadfdb3"
  },
  {
    "url": "markdown/index.html",
    "revision": "f072e635138898b35f333821dd93079b"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "2d586ebdd3bb3b06e98c1337de03bccb"
  },
  {
    "url": "mathjax/index.html",
    "revision": "7351fb6b1de2b2f23e26dcd93f38a613"
  },
  {
    "url": "ML/elkan.html",
    "revision": "0fb25d6208ee4d9b47e4d57361b32480"
  },
  {
    "url": "ML/index.html",
    "revision": "19f193914487976c8e2cc0df8fde57bc"
  },
  {
    "url": "SQLite/1.html",
    "revision": "15b9c21ab81e42e21728de986c2cbf63"
  },
  {
    "url": "SQLite/2.html",
    "revision": "24bb052ed7f0d54c9553698f275a3bb1"
  },
  {
    "url": "SQLite/index.html",
    "revision": "f330444cd0d38785d64eb3da79995434"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
