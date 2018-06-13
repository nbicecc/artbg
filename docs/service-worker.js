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
    "revision": "4c4909870c87a2a2d32f0cd76f6ac2f2"
  },
  {
    "url": "about/index.html",
    "revision": "83a15cbe93cc93d1a2060a37c95a7895"
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
    "url": "assets/js/21.8c7983d6.js",
    "revision": "6244ae3c412221f5cdb5adb42a7bfe47"
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
    "url": "assets/js/app.0ca00f13.js",
    "revision": "8e543a76b7d65b9935b21a9b77b257e4"
  },
  {
    "url": "index.html",
    "revision": "619d6f356d94aa34355904d93f29df07"
  },
  {
    "url": "js/custom.js",
    "revision": "c6d74904d284506f7ae0b01c8b752602"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "ad0856d19431112976782d87f1429cbd"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "9ecad63c82697bcbe48d71280f6ef74a"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "84ed91a7432d96bed8ba88e1d8fd579e"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "9772dcc2e4aba6cf1ecb4a4537215d08"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "c8145303835d34046ee061d7b33f6aee"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "01ec5e4d25fa3dcd632cd356bbb01180"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "87e357e49cd303f02ee452989cf31fc1"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "a88db0152a46c85a902854a9171c4329"
  },
  {
    "url": "Linux/1.html",
    "revision": "1874fb4563a933070148225966f7ab31"
  },
  {
    "url": "Linux/index.html",
    "revision": "819faaffef5cf43afe49b1e4e5b8852f"
  },
  {
    "url": "markdown/index.html",
    "revision": "8575566e445fcb82f07b2c3f627531a4"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "1162d5b40049b5aad23d57f34d1238e4"
  },
  {
    "url": "mathjax/index.html",
    "revision": "a2b510ad044100106d8c9e406a41a0cb"
  },
  {
    "url": "ML/elkan.html",
    "revision": "a5bb47ccaf03a029ede32b47c238cadd"
  },
  {
    "url": "ML/index.html",
    "revision": "8d971ed67fa1c6f89c6c064727d1a17e"
  },
  {
    "url": "SQLite/1.html",
    "revision": "db3a18627b1c1fcee1f48c5c7968c48f"
  },
  {
    "url": "SQLite/2.html",
    "revision": "701beecfb55a077d8ac7ff559f9ecd91"
  },
  {
    "url": "SQLite/index.html",
    "revision": "1db0de26c9808b2d599f1950b337674f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
