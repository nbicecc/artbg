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
    "revision": "07885ad29c49ede65e00553419b88493"
  },
  {
    "url": "about/index.html",
    "revision": "53f909e6835fb700def7c2261348ff30"
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
    "url": "assets/js/1.ca37318a.js",
    "revision": "7001fdef8145a2a9c6ea13cb7347b4ce"
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
    "url": "assets/js/15.e7b1c2e0.js",
    "revision": "20f5cef33401b77fc559db02a11a4390"
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
    "url": "assets/js/app.9c90f024.js",
    "revision": "1adf43db4ccdbcb7da84ce3a14e7df64"
  },
  {
    "url": "index.html",
    "revision": "bf6a3561165599e22b74c677b6457769"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "d54c331ff77d362c2eca9c37063682ef"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "c391b73f2bbd3fd0d2c7320c7249cd25"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "bf2a5f99819c2c4f7c2263779dd57c06"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "894696e682b582675b1755d7c515389e"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "5d414c1b4d48de5668bcca7b132fed42"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "69f495ab1b9cfeec994f93737a577285"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "df7a3c55f6073e7802f650bab027aee6"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "90a7e28a970267261ffb2035e7a33e35"
  },
  {
    "url": "Linux/1.html",
    "revision": "cf7aa4295e74cb1a74455bae66ca032d"
  },
  {
    "url": "Linux/2.html",
    "revision": "c7c0d4cfdae6a43164fceb5df7ce0059"
  },
  {
    "url": "Linux/3.html",
    "revision": "6d0fd256aa3402389fd7e507fde63089"
  },
  {
    "url": "Linux/index.html",
    "revision": "073e550c70d07652233ddcfa44556648"
  },
  {
    "url": "markdown/index.html",
    "revision": "e4f814e474eb9b2898d14060bab0b107"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "3a9f299a14e4137d73755479907fdb32"
  },
  {
    "url": "mathjax/index.html",
    "revision": "aff4cf735a3ec2f0e7d5537940f62189"
  },
  {
    "url": "ML/elkan.html",
    "revision": "bdfad053306cdb844aa9f427866ce6bb"
  },
  {
    "url": "ML/index.html",
    "revision": "0b413ad22eab4dfdcbb7733bb5f52e4d"
  },
  {
    "url": "SQLite/1.html",
    "revision": "460cf5b5d139b055ccb2f91b5d55f173"
  },
  {
    "url": "SQLite/2.html",
    "revision": "73d7ce06bf046aa69343d9ffff6dd074"
  },
  {
    "url": "SQLite/index.html",
    "revision": "f8417f286e2c33b67c7b3a2b40d1c0ef"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
