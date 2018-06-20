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
    "revision": "1f6cf69b710b7525f4c3ab51c5444020"
  },
  {
    "url": "about/index.html",
    "revision": "1e7b5f53575dcad71bd70b4f9b4f91bb"
  },
  {
    "url": "assets/css/24.styles.0990a3d7.css",
    "revision": "f672524b0df9cb42605c9852128f873a"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/0.46fdbba0.js",
    "revision": "af2d29aa37e47fd6b0667a8ba0f5ce2d"
  },
  {
    "url": "assets/js/1.3206021c.js",
    "revision": "c5f6e367be5678263c2ab5b56c956a95"
  },
  {
    "url": "assets/js/10.688174d4.js",
    "revision": "c8f604c4a2467063dd33129f565bccf3"
  },
  {
    "url": "assets/js/11.194a6415.js",
    "revision": "784886257441bc29ce6ba1c38ec89e93"
  },
  {
    "url": "assets/js/12.06990c9e.js",
    "revision": "3c43821a9cde2ab052b0777d2e3bb497"
  },
  {
    "url": "assets/js/13.63d4b090.js",
    "revision": "469ef6cfcf2825618662b32c793b33e0"
  },
  {
    "url": "assets/js/14.7207ccb0.js",
    "revision": "2832c8e5c616995479fec41c07e33f23"
  },
  {
    "url": "assets/js/15.63dcd0b2.js",
    "revision": "e882dedce7a70225c2bd3a918a60ba56"
  },
  {
    "url": "assets/js/16.d8fa68c8.js",
    "revision": "bef1e38d5408fd67a89828029659514e"
  },
  {
    "url": "assets/js/17.ac30db05.js",
    "revision": "10570c0ea84481e9db8cd42b679f87a4"
  },
  {
    "url": "assets/js/18.ebc5c39b.js",
    "revision": "7692592d408e679abf67f223e65308f1"
  },
  {
    "url": "assets/js/19.ce573902.js",
    "revision": "6056e6355faddb220acbaaf337e58796"
  },
  {
    "url": "assets/js/2.fb6946d3.js",
    "revision": "e28f481977f2fe7d355095d78c024cff"
  },
  {
    "url": "assets/js/20.629e141b.js",
    "revision": "23f4aaf435267b9ee88374697b818f22"
  },
  {
    "url": "assets/js/21.3a4dbdb5.js",
    "revision": "9421bed6781e7ae8917f9f01d76db43c"
  },
  {
    "url": "assets/js/22.961b10b0.js",
    "revision": "d2127cd1b77a4437d94f8e964ca95a92"
  },
  {
    "url": "assets/js/23.c0f3b8c5.js",
    "revision": "b78c64f0039a9561f5b2e621f213e670"
  },
  {
    "url": "assets/js/3.bcbe0b5b.js",
    "revision": "60597bcb62d1302568f35f93df6069a2"
  },
  {
    "url": "assets/js/4.48aadb3f.js",
    "revision": "2b019395bfdd9492aee69f151e7e66a0"
  },
  {
    "url": "assets/js/5.8f756bbf.js",
    "revision": "023c9f981b5a25ce6623917b00f96299"
  },
  {
    "url": "assets/js/6.3b5aff2d.js",
    "revision": "4afc8bb5d1b7cc4b08b205ac70f430c0"
  },
  {
    "url": "assets/js/7.6ade9537.js",
    "revision": "b4bdb440ba0090c191c31d7223079bff"
  },
  {
    "url": "assets/js/8.1b8013fe.js",
    "revision": "842228ace2b6538062037e23d9f58e2e"
  },
  {
    "url": "assets/js/9.46f4a670.js",
    "revision": "29575a23fa5b954ccc2187c10a52df60"
  },
  {
    "url": "assets/js/app.0abbc4d7.js",
    "revision": "da910b510ebc511ba77fa8234a0796a5"
  },
  {
    "url": "index.html",
    "revision": "018c83e970193b63735afa59465898a9"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "79c3baf63e7ef0d616cfb1b009265ab6"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "ae8470fceca1ad9df8b84864d9cd976d"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "210866f7a97fd6203dafe5462d229086"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "711097b91b84aaedb919676eaf0518fe"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "8984a99dffab003635a2a5707381eec5"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "682565e9464edbecbcf965adce4ddec2"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "2f6317b2c1dea86ca4ca70f4812022c2"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "3619d6063a0465e6634eff3616e43943"
  },
  {
    "url": "Linux/1.html",
    "revision": "43a7ea75d138678e033475f844e07a4a"
  },
  {
    "url": "Linux/2.html",
    "revision": "a9bfa1b1663b2320ad5c90e8a1aa4440"
  },
  {
    "url": "Linux/3.html",
    "revision": "fa9c734e098f68e9f4daa2e53af711d1"
  },
  {
    "url": "Linux/index.html",
    "revision": "fb563a9887f378ee490fbd4797d421e4"
  },
  {
    "url": "markdown/index.html",
    "revision": "9ad4bc1a06402fe34477510ff1f75a2c"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "35272aee7ee39825a05448e7ca167999"
  },
  {
    "url": "mathjax/index.html",
    "revision": "806aec01ed917c7a00c29ecb118c4b7f"
  },
  {
    "url": "ML/elkan.html",
    "revision": "0ab05d56c01106dc1b37183085c7552f"
  },
  {
    "url": "ML/index.html",
    "revision": "e8666570991319c8474d2aefc5a2cd96"
  },
  {
    "url": "SQLite/1.html",
    "revision": "09101fb6be59dd20dc27a605d5f21387"
  },
  {
    "url": "SQLite/2.html",
    "revision": "0063daca1f9745ca9fd9770fc9fe2c9e"
  },
  {
    "url": "SQLite/index.html",
    "revision": "25daefee08db0ced60739b37071161d5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
