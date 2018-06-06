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
    "revision": "57c2e57a06e01c1e331b3fe1219f51e8"
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
    "url": "assets/js/app.0a4dd44a.js",
    "revision": "3445c1b1db6d517e281ca0263595a678"
  },
  {
    "url": "index.html",
    "revision": "62f750e8d3a175daa1157c43c20babd3"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "08bd0322453f1a6e0b46c7cfa30de0f5"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "a5769f3cc86d58544401fd70f1c7ffd8"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "a2419100b59401dcb825255270bb1c2c"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "478504bbfb6063b4a6f5766eabdb907d"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "a1696b8f78c019c9a3aaa9d243ba0be0"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "9424fa1ecfbba4f8aa7a2d6d6a0de75a"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "6eeb896135e97334025d11b99e62699c"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "64967b6e5f85cd93310299602a3b8d28"
  },
  {
    "url": "markdown/index.html",
    "revision": "6d292750f6538eafa694fff42c4ff3e2"
  },
  {
    "url": "markdown/markdown语法.html",
    "revision": "4ef51921e8a7a393abde046c9a58b7cd"
  },
  {
    "url": "ML/elkan.html",
    "revision": "3bd0c15d9a5a5438de12683602cbffca"
  },
  {
    "url": "ML/index.html",
    "revision": "5581f460a36dfb286aa77edc9817a384"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
