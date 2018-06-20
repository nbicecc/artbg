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
    "revision": "b661eea938ae23e15a2ef34a6fba4f38"
  },
  {
    "url": "about/index.html",
    "revision": "3e4ceb718d12ec15d248bf1c6cd3ab47"
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
    "url": "assets/js/app.a9e93dd3.js",
    "revision": "56ac4f3cd231ff081bc0731f8d8dedc2"
  },
  {
    "url": "index.html",
    "revision": "49a53d408c510cc962dcdf29cc992830"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "375f9328e7c3c22580b611503804bc78"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "420baadeee4744ac11cbb7a08365c40a"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "8b22bdc0e043e6e23e87e38da6e04294"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "2701b69e1e7b151df0f42bcd73902a08"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "9369078be643078f1d7f6e130fa04a57"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "9deee4fa4ac1263279892e544636cafc"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "ad1bc77f0cfe3468f8e5e7f339e74cc0"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "2536641eb4fd3e51e1225d4e5bf38159"
  },
  {
    "url": "Linux/1.html",
    "revision": "39e41d45608657d585ee686fd426ace2"
  },
  {
    "url": "Linux/2.html",
    "revision": "c6e2b9fd00887149167bf974acfbc279"
  },
  {
    "url": "Linux/3.html",
    "revision": "cd33fee018221c1b6596d362102fc059"
  },
  {
    "url": "Linux/index.html",
    "revision": "057137bdbb01d932e93b04528c059ddf"
  },
  {
    "url": "markdown/index.html",
    "revision": "11427f2528766f40133ac312824b88a0"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "740949e03cbf32f345f0124b76ecf156"
  },
  {
    "url": "mathjax/index.html",
    "revision": "9a685a48ba2f7fb4f92d309e372fca03"
  },
  {
    "url": "ML/elkan.html",
    "revision": "0add9ad4c28de90fef5a2540d0117f54"
  },
  {
    "url": "ML/index.html",
    "revision": "65f866d6b7b029e3cb255900e0d45280"
  },
  {
    "url": "SQLite/1.html",
    "revision": "35f98709bf02ced685b7d510cdb08a78"
  },
  {
    "url": "SQLite/2.html",
    "revision": "757ec7c8121aea207d94bbca18db7117"
  },
  {
    "url": "SQLite/index.html",
    "revision": "e73d1268011ddab73e571eab12f4e9ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
