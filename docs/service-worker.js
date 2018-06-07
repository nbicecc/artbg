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
    "revision": "53751e3ba0952898f7022b256c74fd42"
  },
  {
    "url": "assets/css/16.styles.c16aa907.css",
    "revision": "c0f71fd1cbcb4d72ec6ddbc25c06585a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.95878fc9.js",
    "revision": "eb6fc11bf4234f41c77b422943a21c66"
  },
  {
    "url": "assets/js/1.82b33a50.js",
    "revision": "51cde8b9cea8ca3d0e218920f945c65a"
  },
  {
    "url": "assets/js/10.13781853.js",
    "revision": "6acaeb4d71ccb3597cbc828c2f269ced"
  },
  {
    "url": "assets/js/11.2d6924bc.js",
    "revision": "29b6068a7a1893c999cd22caf4556daa"
  },
  {
    "url": "assets/js/12.472aab02.js",
    "revision": "7e7ade716583204d843ca5326cd4c726"
  },
  {
    "url": "assets/js/13.e1574ba7.js",
    "revision": "575a2d246c6cfee0bb811ff4e8a7c022"
  },
  {
    "url": "assets/js/14.f73903e6.js",
    "revision": "23c759090051415e935a4c7a9546e687"
  },
  {
    "url": "assets/js/15.01eacdcb.js",
    "revision": "3e97e8cdea8564091846356c4145826e"
  },
  {
    "url": "assets/js/2.a6feb346.js",
    "revision": "4bb049ede4d7805bf95d05b635f66ca2"
  },
  {
    "url": "assets/js/3.356bf5ea.js",
    "revision": "90eafeb333e688c76196e4b542392eb5"
  },
  {
    "url": "assets/js/4.70122fdd.js",
    "revision": "ae7a9e1f2c772a8a9b12010bad0a2ffb"
  },
  {
    "url": "assets/js/5.a982d4c7.js",
    "revision": "4fc6641362b752efbaec5506202cf314"
  },
  {
    "url": "assets/js/6.60713088.js",
    "revision": "6c1dd57069144492c8dc1f9d5e1379db"
  },
  {
    "url": "assets/js/7.42da92e9.js",
    "revision": "48149ab693294c71864ce42c40510bc4"
  },
  {
    "url": "assets/js/8.753aa3b0.js",
    "revision": "f14679b001337d64f118bd9872314ef1"
  },
  {
    "url": "assets/js/9.a9c2dfee.js",
    "revision": "1547737a78f56dda0de6525667adee72"
  },
  {
    "url": "assets/js/app.112090f4.js",
    "revision": "653fc22ed465adf16d7df98d1d729a67"
  },
  {
    "url": "Datebase/index.html",
    "revision": "a6d21eec096c8532793475f20fcc7a35"
  },
  {
    "url": "Datebase/SQLite/index.html",
    "revision": "cd01934adc7e54ca4cf84a46a36b55f7"
  },
  {
    "url": "document/markdown/index.html",
    "revision": "bc8cc8fe6611f5f313a10f6ed689d995"
  },
  {
    "url": "document/markdown/markdown语法.html",
    "revision": "a312d2e68f823add68540be2ca61f3c2"
  },
  {
    "url": "document/mathjax/index.html",
    "revision": "9947c205424842220b5bc8fa173d7ed4"
  },
  {
    "url": "index.html",
    "revision": "0d6ee0a6f7d56f098ee353bbf59dc28e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "ba3cf25c45b12de83b8e454f16c71491"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "65aee2f8317da213d1f88f50ecc28988"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "ffba66c5b3560afff86cc5085ab6395b"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "a5d3d1c4a2d1e98c4dc98044695642e7"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "52d39c7a6ebb310c007607a9263c4276"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "975271f6e102644f23ea141155351e5b"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "c1fcbfd062bf3ea8e9261d4dcc1f12b7"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "90318afd5b3616ac117582df435a8f1a"
  },
  {
    "url": "ML/elkan.html",
    "revision": "f8b5b31595cc3414986bb0e17b344ccd"
  },
  {
    "url": "ML/index.html",
    "revision": "6423c973f100984ea8bd8d6444662b4d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
