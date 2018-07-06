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
    "revision": "35a1e9fd22da383c40d9b505e535a3dc"
  },
  {
    "url": "about/index.html",
    "revision": "7215563f8be9f80271282d96acedeed5"
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
    "url": "assets/js/0.1f0e4489.js",
    "revision": "44d2e741475daacd18dac7a6d31889d8"
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
    "url": "assets/js/app.a4ad1f1b.js",
    "revision": "74b19dc2389dc21311593ef9ecf3fc7c"
  },
  {
    "url": "index.html",
    "revision": "a157624844169ba33961344ea664b2a7"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "6c412cd4bcff6bf776955ac089996fce"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "c52e8d72d06618d0863dc1854c89c501"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "e07b857c342300a4acb4730255738f17"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "435357f33acc08483770878b7d8474f5"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "8fbf32ba7b10eb57f9aeb94224ecbfb9"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "c7413f7c19a6cacb2104b1a15ed7943e"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "d31fbfc88bc80cd8159e1d96c15f65b6"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "0096421dc31f552b66643c6ddef68d23"
  },
  {
    "url": "Linux/1.html",
    "revision": "3a50ea6b98ccbd817559c3d6ee75aead"
  },
  {
    "url": "Linux/2.html",
    "revision": "7701425c250b3d6a694b48fd554980f9"
  },
  {
    "url": "Linux/3.html",
    "revision": "7597e1322dada907e5dae25bb9a21bf7"
  },
  {
    "url": "Linux/4.html",
    "revision": "bb534d13c50bda33dd826fde2f2f02f8"
  },
  {
    "url": "Linux/index.html",
    "revision": "8dc58a517b93fea71bc109ec4bb097c8"
  },
  {
    "url": "markdown/index.html",
    "revision": "06af52a8ea78a9e8ed10f689f537338a"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "df57e8619ed1f52ccd7d4da5ff2300af"
  },
  {
    "url": "mathjax/index.html",
    "revision": "880bac4433ac9ae9f4291ecdfcdd3703"
  },
  {
    "url": "ML/conv_excel.html",
    "revision": "26196ec0ae70c189233e423b8fe05f36"
  },
  {
    "url": "ML/elkan.html",
    "revision": "f1a320a7b92e908070379fd6d6a4a9a2"
  },
  {
    "url": "ML/index.html",
    "revision": "6a3b70c079e0b6b55a501b0970b4acb9"
  },
  {
    "url": "other/aiwork0998dfasdf.html",
    "revision": "8a6a81a1cd2865391d978a9d671a2968"
  },
  {
    "url": "SQLite/1.html",
    "revision": "daeee453f3d39efb8324bbaf57fb6222"
  },
  {
    "url": "SQLite/2.html",
    "revision": "535dfd5f383effed705b1df1b8e6ee7e"
  },
  {
    "url": "SQLite/index.html",
    "revision": "12a409b06beee41dd2a8a5c27a9060bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
