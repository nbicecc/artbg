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
    "revision": "5235082bbde7f608a49568d89b4d1539"
  },
  {
    "url": "assets/css/19.styles.5ec65562.css",
    "revision": "f672524b0df9cb42605c9852128f873a"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/0.44e87b6d.js",
    "revision": "d349f0430c90bdcd862049ab29976f54"
  },
  {
    "url": "assets/js/1.71a8373f.js",
    "revision": "f03dfb7eafbce1a84e54e0f7eaa4fb40"
  },
  {
    "url": "assets/js/10.20e8aed4.js",
    "revision": "cbed97fb2c15906d7d5c8199ac65708d"
  },
  {
    "url": "assets/js/11.0d1f3bda.js",
    "revision": "537ba8c71d1de5c210a628df22047e44"
  },
  {
    "url": "assets/js/12.df8c1f0d.js",
    "revision": "2d6a57a026640842cfa14737be4725f4"
  },
  {
    "url": "assets/js/13.fc3c9d11.js",
    "revision": "b130f366fe9fcb486efaec5d4e4ab9a0"
  },
  {
    "url": "assets/js/14.6f74c444.js",
    "revision": "bbb79a5471a23ce3326ee66fa3b666a2"
  },
  {
    "url": "assets/js/15.850acbe0.js",
    "revision": "4eaa3664d55bdf96f5ca2fa6231d4820"
  },
  {
    "url": "assets/js/16.79dd26e3.js",
    "revision": "579bf2daa4d3c5c8dd04449d904d9a83"
  },
  {
    "url": "assets/js/17.3ea10f36.js",
    "revision": "9fea45f4117e44ab7765ac99c220794e"
  },
  {
    "url": "assets/js/18.00202547.js",
    "revision": "f31ff76b526469dfa3871909387a661e"
  },
  {
    "url": "assets/js/2.39393494.js",
    "revision": "e15a5130d8681ed3212caa1721cdc71d"
  },
  {
    "url": "assets/js/3.fbbcf020.js",
    "revision": "c312ddb2a30a5101789a952ab4702f22"
  },
  {
    "url": "assets/js/4.2a484827.js",
    "revision": "162741714f707a940d30aca277b95762"
  },
  {
    "url": "assets/js/5.3e7ad533.js",
    "revision": "066702930e60a95fbec7b405f2eb44f0"
  },
  {
    "url": "assets/js/6.51dafc4d.js",
    "revision": "2461070b0e1860124d5089888009e3d3"
  },
  {
    "url": "assets/js/7.e1e7e6d6.js",
    "revision": "8853fff0d0cbc6134ffed7616b66e557"
  },
  {
    "url": "assets/js/8.1b8013fe.js",
    "revision": "842228ace2b6538062037e23d9f58e2e"
  },
  {
    "url": "assets/js/9.c783b742.js",
    "revision": "cde27d4327adc6762317bdec36edd872"
  },
  {
    "url": "assets/js/app.93fd02e1.js",
    "revision": "c9a27317d1a68d1736d0ce105c8a9672"
  },
  {
    "url": "index.html",
    "revision": "3c0ddd1de4099fe2f4402c6aaca39590"
  },
  {
    "url": "js/custom.js",
    "revision": "f824c93bba723b1cd2436a862948725a"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "0ab95b1c196e23f82508cdeb5eaa8f6a"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "ed4c0d777b7596715d386e868872533f"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "6e5beea992485b8cb03200c08b93d877"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "f54310322c817c126f2fde738740764f"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "72f61015bad6e1be8da7689d564529c7"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "04f0b7c580b57aa295d408fbee7acdf1"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "351c5011356caeee1d38d410f0316dfa"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "1abf1c2fb5ee8829c16e80956e9fea92"
  },
  {
    "url": "Linux/1.html",
    "revision": "926aaae7470700b7c35a2610189ab46d"
  },
  {
    "url": "Linux/index.html",
    "revision": "8b1a7179d69b02e5b8cc57c28109bb3f"
  },
  {
    "url": "markdown/index.html",
    "revision": "c5f4c3046a0ace9864fcd64257fd106f"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "28cb73b43b30de603adcd11271213728"
  },
  {
    "url": "mathjax/index.html",
    "revision": "c371796d63de0e63b9068c5f3304984b"
  },
  {
    "url": "ML/elkan.html",
    "revision": "b4dcd6bfe509b7bc55a760a9e2151111"
  },
  {
    "url": "ML/index.html",
    "revision": "2950de9cdcd7a715060eb1a3003c8c94"
  },
  {
    "url": "SQLite/1.html",
    "revision": "46024532893740b7eca276014e593435"
  },
  {
    "url": "SQLite/2.html",
    "revision": "1d5e5a6309f8e09cae4048e2a8080033"
  },
  {
    "url": "SQLite/index.html",
    "revision": "7ef74dd5ad835c63478bb629de98edfc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
