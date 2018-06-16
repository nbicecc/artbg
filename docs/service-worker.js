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
    "revision": "d8eb26d51022fe7d5030f38b9a907876"
  },
  {
    "url": "about/index.html",
    "revision": "6519848ac907b1362d36ab28164d1585"
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
    "url": "assets/js/11.7e07218d.js",
    "revision": "6df521e4efb1d41e4799bb86ccac40c3"
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
    "url": "assets/js/app.ac2f13d6.js",
    "revision": "fee8faf2604a3bc8962deb7ea755218f"
  },
  {
    "url": "index.html",
    "revision": "79984f2bddb9bd60a90d39737e3cb31f"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "fbd6c671336177a690c1818cbdfb9a00"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "dd18652394fbde24bda5263280464e39"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "bcdb00d091e713f0b05b0078378ec4db"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "ccc073c088490c783eae7b11b2984309"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "6d7f4361028631b4606d5ac768ec59b5"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "d97e0c5e5096a38cb1e5e8f86950b2d9"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "4c9cd7821cfa0b6f7f1605016e3a8979"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "c068d8a5a88d2bdfd4a2df42d62492ac"
  },
  {
    "url": "Linux/1.html",
    "revision": "8211a83a7eae23aa46c619a6c45a466e"
  },
  {
    "url": "Linux/index.html",
    "revision": "050c9c1754631b80ce31d8321ce263d9"
  },
  {
    "url": "markdown/index.html",
    "revision": "c2343aaee419c0416ed7d99a1f5d4c04"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "59c4349ced77b2e5d8758a28f451ad97"
  },
  {
    "url": "mathjax/index.html",
    "revision": "e43e21df64215b772021726ffa284b57"
  },
  {
    "url": "ML/elkan.html",
    "revision": "16e285e5486d22879a808c22cd189239"
  },
  {
    "url": "ML/index.html",
    "revision": "332cca1874d791e41407d52db4f926df"
  },
  {
    "url": "SQLite/1.html",
    "revision": "f8d06053711e45f3d04c32f5b11a633e"
  },
  {
    "url": "SQLite/2.html",
    "revision": "edf5f432d61c7d8190a7352d56e000fd"
  },
  {
    "url": "SQLite/index.html",
    "revision": "56e2df94e4b3e8b5d463bd73b39e03d5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
