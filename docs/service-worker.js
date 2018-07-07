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
    "revision": "4b59f439c41d34cc643da42faaaab038"
  },
  {
    "url": "about/index.html",
    "revision": "116efe2bd5bde4f4564c6a3244f3f6d7"
  },
  {
    "url": "assets/css/27.styles.65c88b1d.css",
    "revision": "f672524b0df9cb42605c9852128f873a"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/0.036e9b57.js",
    "revision": "b651f39f486ebe3bbe24579380aad7cd"
  },
  {
    "url": "assets/js/1.1bd562b7.js",
    "revision": "b137a294bbb9e76e080c491afc1b6e4e"
  },
  {
    "url": "assets/js/10.b533d1d9.js",
    "revision": "9ca94c707b24ec60adeddd5ab639894b"
  },
  {
    "url": "assets/js/11.60a6815a.js",
    "revision": "e8e934cf3fb87324e1f4f1e1d6686730"
  },
  {
    "url": "assets/js/12.424f17b9.js",
    "revision": "efe02afda1eaa37a2130982dc9521b6c"
  },
  {
    "url": "assets/js/13.46bb060a.js",
    "revision": "c58efa682e0db5dc6a239b2b2e16800f"
  },
  {
    "url": "assets/js/14.405526bb.js",
    "revision": "8e13aabed44cc1e898372924fcf9af2e"
  },
  {
    "url": "assets/js/15.fa19c361.js",
    "revision": "2f1fc7b48914e06b94f6f0d11c52a7ad"
  },
  {
    "url": "assets/js/16.0a9636c6.js",
    "revision": "e1dc9577a3753ac496d7398ae06cc12e"
  },
  {
    "url": "assets/js/17.d6af5ead.js",
    "revision": "71a35656d14437d45ea61d0e587c3b64"
  },
  {
    "url": "assets/js/18.bc5a7134.js",
    "revision": "82b7d92acea77d05e7d932daf253aad3"
  },
  {
    "url": "assets/js/19.a22a0d38.js",
    "revision": "f1bd85e44d12d2d05d7bec3418ea3f6b"
  },
  {
    "url": "assets/js/2.09ebb370.js",
    "revision": "74b1635f389aab0a0506c20efb2e292c"
  },
  {
    "url": "assets/js/20.1a97853b.js",
    "revision": "9db6b3f968443c1f4ad739dd40d8d908"
  },
  {
    "url": "assets/js/21.bc2ad088.js",
    "revision": "7f92bcb48dbdbc9d44269060ca36e787"
  },
  {
    "url": "assets/js/22.da87e50c.js",
    "revision": "ee624119408f97f88c856d48b7dddda6"
  },
  {
    "url": "assets/js/23.d5000c4d.js",
    "revision": "2dae2049aab2cbecae0924ee0e1b531b"
  },
  {
    "url": "assets/js/24.c635e11b.js",
    "revision": "32ee235e668b5f8e73be06747fc13233"
  },
  {
    "url": "assets/js/25.0ae21ab9.js",
    "revision": "21aa0587ec16cd1180d0bbca3c368b72"
  },
  {
    "url": "assets/js/26.b0d47cea.js",
    "revision": "5bb029e32ca7e358771e81ede1d86620"
  },
  {
    "url": "assets/js/3.fcb6313c.js",
    "revision": "cc577254f4aebf0d0dbbca9780d4e8e1"
  },
  {
    "url": "assets/js/4.01a6f61b.js",
    "revision": "f5bb7603698055093741570cda9e2032"
  },
  {
    "url": "assets/js/5.dc3a916f.js",
    "revision": "3793d9071cc2fa3965cc1f11a90a8944"
  },
  {
    "url": "assets/js/6.37313918.js",
    "revision": "a95bae61d1cc66317970d03428f65ad3"
  },
  {
    "url": "assets/js/7.7b482a45.js",
    "revision": "0f7ffa0c7ea15a58233cad8a9bff41d6"
  },
  {
    "url": "assets/js/8.832dd792.js",
    "revision": "79e984de5db8d2a503763eebd8073a91"
  },
  {
    "url": "assets/js/9.d2834ba4.js",
    "revision": "83a701999a3b1025c1425721b9341b06"
  },
  {
    "url": "assets/js/app.4e43d360.js",
    "revision": "69c809b545e9e4b6e07b891d3ae0e3f1"
  },
  {
    "url": "index.html",
    "revision": "7428307b8e83b95fd8114405379e2355"
  },
  {
    "url": "js/custom.js",
    "revision": "540a38803dc78fd92e71f85138baded2"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "b4d8ba23fbcca3526af53f0994fd6b71"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "dd183fe9bf61033fb6a885ab2e3660d8"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "1300ac9447fb636aa03c98708bdb21db"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "79af2dd0e954560496e56420e295cddd"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "791816f4ef3cb474ae1691f871b06f4c"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "0d38ccfb8f44766d9f66699ebc68fbcd"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "da14519a4753305f0fc072558ce0e10e"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "a85ed6073cc966264dacf96ee0520612"
  },
  {
    "url": "Linux/1.html",
    "revision": "61e54a90aec8eb6af58729c55626bf51"
  },
  {
    "url": "Linux/2.html",
    "revision": "72b68cf60bf15eeffc4f5b82f88e5068"
  },
  {
    "url": "Linux/3.html",
    "revision": "e1e97b29817b5b34d1899ef44281d858"
  },
  {
    "url": "Linux/4.html",
    "revision": "6af7184272289f3396731adf4b97cb0a"
  },
  {
    "url": "Linux/index.html",
    "revision": "505bf36a4355cbede88e5d0a2f1b0723"
  },
  {
    "url": "markdown/index.html",
    "revision": "e8f92724959e37bb690d88747b178ab7"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "ff307f63a4dca94025b5ab40b1dbfd01"
  },
  {
    "url": "mathjax/index.html",
    "revision": "7a54d384afcdb4630e1efadf66616d3c"
  },
  {
    "url": "ML/conv_excel.html",
    "revision": "648fa2067637ff0ead7d586d11d80598"
  },
  {
    "url": "ML/elkan.html",
    "revision": "0b821da3ee84e0bef0126a8d6b2ef329"
  },
  {
    "url": "ML/index.html",
    "revision": "fb278ad65f5437e0b4f12cf43804d26b"
  },
  {
    "url": "other/aiwork0998dfasdf.html",
    "revision": "5834fba3fc8e9a1682353f0912a995b6"
  },
  {
    "url": "SQLite/1.html",
    "revision": "858ba753294d48ac813b5fca81a554f4"
  },
  {
    "url": "SQLite/2.html",
    "revision": "b5673308fcd320b16c5d017ab3aa47f0"
  },
  {
    "url": "SQLite/index.html",
    "revision": "3bb275f3b2c9c2b42bb91bddd0e10778"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
