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
    "revision": "e773d1571a7ad5c9b4f3a814570ced2d"
  },
  {
    "url": "about/index.html",
    "revision": "6ad846dc74466c4c6bdb72c2eebc7853"
  },
  {
    "url": "assets/css/23.styles.585a6225.css",
    "revision": "f672524b0df9cb42605c9852128f873a"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/0.575c1510.js",
    "revision": "a58fafc3c1459021665473c564789795"
  },
  {
    "url": "assets/js/1.71a8373f.js",
    "revision": "f03dfb7eafbce1a84e54e0f7eaa4fb40"
  },
  {
    "url": "assets/js/10.3a160850.js",
    "revision": "df27ebf1f4d0dcc6a1f963f20104adf1"
  },
  {
    "url": "assets/js/11.2420ce08.js",
    "revision": "5393a76058971774a822d0f44e74e4d9"
  },
  {
    "url": "assets/js/12.72d6bb73.js",
    "revision": "ccabb77ead96588ec649047e0ff4907e"
  },
  {
    "url": "assets/js/13.cb659616.js",
    "revision": "2581efe7c2eedc627c5af9bc09ceb784"
  },
  {
    "url": "assets/js/14.350440ac.js",
    "revision": "c4dbc8cf0a18ffe01f4802ee8deaa824"
  },
  {
    "url": "assets/js/15.e7b1c2e0.js",
    "revision": "20f5cef33401b77fc559db02a11a4390"
  },
  {
    "url": "assets/js/16.bd2aea59.js",
    "revision": "ba313fcef541ee8a6d7398a4ab5d0281"
  },
  {
    "url": "assets/js/17.9c37b7ce.js",
    "revision": "3d87fb9779e9b5fd776c013de559f0bb"
  },
  {
    "url": "assets/js/18.cee9d6cd.js",
    "revision": "b65764fe8f50e151f613f8e5429b672e"
  },
  {
    "url": "assets/js/19.866b8684.js",
    "revision": "259aad73a1feaae1293a85bfeb77d75f"
  },
  {
    "url": "assets/js/2.e09228a9.js",
    "revision": "52e8220795dcdc5c00972030f40f554a"
  },
  {
    "url": "assets/js/20.26f23f84.js",
    "revision": "fc418e6c0382cfa4629a1b62d790d77b"
  },
  {
    "url": "assets/js/21.31066e54.js",
    "revision": "9f138708a4fc5e7dc9579af49a64c742"
  },
  {
    "url": "assets/js/22.b5fbfdd1.js",
    "revision": "ac0d5fc5ede3352871c14b758a6d9f84"
  },
  {
    "url": "assets/js/3.30fe7df7.js",
    "revision": "665a049529d660a193285a9177450db3"
  },
  {
    "url": "assets/js/4.4007bd85.js",
    "revision": "a7d0a7437877f21caade8fd62931f29c"
  },
  {
    "url": "assets/js/5.b15c0471.js",
    "revision": "dd58d06ede4ce1a7f079e2af948539f5"
  },
  {
    "url": "assets/js/6.30520a1c.js",
    "revision": "5f43062c6edb36252c0470dcc74eb09b"
  },
  {
    "url": "assets/js/7.16843c81.js",
    "revision": "cf03d7740295a610761ecba8254b86df"
  },
  {
    "url": "assets/js/8.6f73dab8.js",
    "revision": "403bf269bab0e3d1397d6e97d3bb7e50"
  },
  {
    "url": "assets/js/9.89701018.js",
    "revision": "1c20dc0858ca2ee2c6f4c033db7a889d"
  },
  {
    "url": "assets/js/app.03ab95f5.js",
    "revision": "5a2d000541679e26dec56860bf3eb1cb"
  },
  {
    "url": "index.html",
    "revision": "e0d0fe67ae928f7d620d4f2094dcfd6a"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "c203fd30d05d809ed59a0610e2a6e543"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "37a5b8c7671bc483beabfd1d222118c1"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "631a0da871de6139df967e9cd20fa978"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "590c62db51abe2ec648267da8857d321"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "d82e53beda541fdb932aa04050450999"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "d1bfcbfabf45ef7f7288c0a7ad7de6da"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "f22fa006b658a384fa134139766f657e"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "3e2388e1ed6727da448561002dd97799"
  },
  {
    "url": "Linux/1.html",
    "revision": "60fa3b1e13d3f214f0df69aedf0c4c81"
  },
  {
    "url": "Linux/2.html",
    "revision": "fb4acc400274caa6892222a154c01901"
  },
  {
    "url": "Linux/index.html",
    "revision": "045583073e888c423b79b49522c126ca"
  },
  {
    "url": "markdown/index.html",
    "revision": "11765fabf00f96ba611274aefe41c10f"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "b95faa45de0b3ad9675ed03b41374f5f"
  },
  {
    "url": "mathjax/index.html",
    "revision": "2eb2cba87f85cb6e78f1198933d927d6"
  },
  {
    "url": "ML/elkan.html",
    "revision": "77187923da7a53a1f74803686a299413"
  },
  {
    "url": "ML/index.html",
    "revision": "0088c16ef0c834de7fc3b89817d0caeb"
  },
  {
    "url": "SQLite/1.html",
    "revision": "79068b3ee59ac8a07e1d4042818afc68"
  },
  {
    "url": "SQLite/2.html",
    "revision": "7274584c40d119418d37c4d181974d73"
  },
  {
    "url": "SQLite/index.html",
    "revision": "51f747a61ada4df14472e50e85342b47"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
