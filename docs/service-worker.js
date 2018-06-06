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
    "revision": "da5390a9b1d5fe1d0a97be42abd71f08"
  },
  {
    "url": "assets/css/13.styles.45a2f081.css",
    "revision": "dfa8358703999aa653fca50fa7c2cbe3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.b7c4a931.js",
    "revision": "12007a051498a4981cce5fdc90fc871a"
  },
  {
    "url": "assets/js/1.02ced0f0.js",
    "revision": "722fedeb27c4982573ee66566a83d065"
  },
  {
    "url": "assets/js/10.7ea14f98.js",
    "revision": "249b6c1d07456e2658a39d8c83346e54"
  },
  {
    "url": "assets/js/11.2b262324.js",
    "revision": "0ff9cfc15b6193e48c9e980c7301cd5a"
  },
  {
    "url": "assets/js/12.7a5c297f.js",
    "revision": "fee1be248a0f72ed8c25de00d6962f12"
  },
  {
    "url": "assets/js/2.dc7bfba8.js",
    "revision": "383df0d9136e7f09dd552c0efa403acf"
  },
  {
    "url": "assets/js/3.6205e73d.js",
    "revision": "c9b20ed524fac81eba2af9b6f87dd5a1"
  },
  {
    "url": "assets/js/4.3a95cf72.js",
    "revision": "3ed8005aae84b70ac535f8d055eac5af"
  },
  {
    "url": "assets/js/5.c2343544.js",
    "revision": "1bb1a98cf6958b46063bf72b8f778b20"
  },
  {
    "url": "assets/js/6.cd021078.js",
    "revision": "ef8082301e4a2d20be8b9502cd4d46f8"
  },
  {
    "url": "assets/js/7.00c34a0c.js",
    "revision": "f7ee11d7435fa85bf34e4acf57ef988a"
  },
  {
    "url": "assets/js/8.d0084e79.js",
    "revision": "c0841ada9aeac0a8c509caef93c334c8"
  },
  {
    "url": "assets/js/9.512d59a5.js",
    "revision": "2ce3e840ad4945cf452bd595b9039f4a"
  },
  {
    "url": "assets/js/app.735121f7.js",
    "revision": "474d3e50eb5b235f0f4e7e35b835fd5d"
  },
  {
    "url": "index.html",
    "revision": "22ceed34f71b8ac4c79a8e78bd47acdf"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "17960fd0aeb36d18c9603641071f97bb"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "696e8e13ef816f56ace00627315f16a5"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "2964168790b1b5af596b276da5c85d71"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "084f4032d0a3d48ec4c33386f2b5ec3d"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "9ba52ff2674f53e818ba440e5d2ff36b"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "23ecedf5bcab1b21a491fcf98a7caf0a"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "52ed5092108ceff3c9bf5e77c5c9c890"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "33dbee4e86db0f15c268ee8943c27e0f"
  },
  {
    "url": "markdown/index.html",
    "revision": "72d1e3e2a92558f38e6ec4cae4f1c25a"
  },
  {
    "url": "markdown/markdown语法.html",
    "revision": "ec05448db0b085fe1882257d6f844f6d"
  },
  {
    "url": "ML/elkan.html",
    "revision": "c7664e7f89f2d0f9149fdb7e044a0862"
  },
  {
    "url": "ML/index.html",
    "revision": "9c9f4d3181347b2270d85c07eba98728"
  },
  {
    "url": "serverworker.js",
    "revision": "b6db4eaf8a6e430089e344f615008355"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
