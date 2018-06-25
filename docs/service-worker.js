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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8422f46a88fe2e9b5d8139ee5efee3ea"
  },
  {
    "url": "about/index.html",
    "revision": "3b45d89abe5854b42dce26d92eb1b835"
  },
  {
    "url": "assets/css/25.styles.deb291d6.css",
    "revision": "70fd2f3bd1c6a54bfbec89d368659ea0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.adf16ee4.js",
    "revision": "6e773cdc0fd1baec27ed10bcba144afc"
  },
  {
    "url": "assets/js/1.6933e338.js",
    "revision": "93ee70e5f9e0c9abd8d587d6100d512d"
  },
  {
    "url": "assets/js/10.7e607b5c.js",
    "revision": "825dc7ac17999b2bf8de49e5f68eedea"
  },
  {
    "url": "assets/js/11.69892399.js",
    "revision": "9d00b404341aada166d749a068ae1659"
  },
  {
    "url": "assets/js/12.724e97a2.js",
    "revision": "79f597451e10254dd6b0ef10ffa8e181"
  },
  {
    "url": "assets/js/13.79407be9.js",
    "revision": "22415480487032e06f2e136034569292"
  },
  {
    "url": "assets/js/14.3afece9d.js",
    "revision": "1f12c8b47a7c416392bfc5d976f0fd33"
  },
  {
    "url": "assets/js/15.7e16f05e.js",
    "revision": "751cdfbbfb33902857f38cc88fcb415b"
  },
  {
    "url": "assets/js/16.2c679383.js",
    "revision": "bef1e38d5408fd67a89828029659514e"
  },
  {
    "url": "assets/js/17.42786572.js",
    "revision": "6694058b3b99798a7f2516b3f11e8e47"
  },
  {
    "url": "assets/js/18.e1d904d0.js",
    "revision": "6d077f2d54104935cf86c75a854b2f9b"
  },
  {
    "url": "assets/js/19.13a06123.js",
    "revision": "941dd1144fd533bd6e8f5211ccc3fb48"
  },
  {
    "url": "assets/js/2.7180800a.js",
    "revision": "cf828d5461e8c0d856ca2ec0af2a6c90"
  },
  {
    "url": "assets/js/20.273e4248.js",
    "revision": "633a1a8b4ead8f23b03875099db556ea"
  },
  {
    "url": "assets/js/21.ccd7f2f0.js",
    "revision": "d6e215bfa6d43d6f37d42f6a4c654f0c"
  },
  {
    "url": "assets/js/22.4bf0c6df.js",
    "revision": "cd6e940dee8a08e24f20c9629451e3a9"
  },
  {
    "url": "assets/js/23.ff849322.js",
    "revision": "b74ff5e0a93f140f4976d4ce929c8e0d"
  },
  {
    "url": "assets/js/24.b647cbcd.js",
    "revision": "cfb518410f9a0d20334ad6d3c7459e0e"
  },
  {
    "url": "assets/js/3.eb70dd72.js",
    "revision": "384d8969632e5dd911521b57c04c0565"
  },
  {
    "url": "assets/js/4.c05aeb70.js",
    "revision": "10a358202f00d82b5511dea9969179f3"
  },
  {
    "url": "assets/js/5.50cf84fd.js",
    "revision": "dce82cf532ea847ae60f832a12834866"
  },
  {
    "url": "assets/js/6.40aabd2c.js",
    "revision": "19cdbe74407e5550d388d31375059838"
  },
  {
    "url": "assets/js/7.e5ad5c6f.js",
    "revision": "e5184a191e8c0b1c4fc7264b3482d673"
  },
  {
    "url": "assets/js/8.22b98703.js",
    "revision": "79da07c848b5a15fe35532362479d62c"
  },
  {
    "url": "assets/js/9.5dcf2cf5.js",
    "revision": "7c6741148cf9e880caa4ed31544a2be0"
  },
  {
    "url": "assets/js/app.9ffa3b96.js",
    "revision": "015f5e67155ccb594b7c8a913f91fddb"
  },
  {
    "url": "index.html",
    "revision": "fe207444e8f4d6afeb668a11c7f6862a"
  },
  {
    "url": "js/custom.js",
    "revision": "79b77d6cd8817660d3b7fad61c835cd2"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "f5b7e657031ddc6ed875a4b5bf6d760b"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "c891827e5b1a35959444c076653e9276"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "702399bf7a28afd2faaaee4fa83d02b4"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "9198c1156289b4eb538d67b731ae458b"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "63c5f64ff88c0b6898ce18d7858be8b6"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "04c3a0d359b6b738bb76fff69839f6e3"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "c5e157c9cd385151201ac40e4d48b8a4"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "e7ecabb0b3ba8b725d37844f62ac6fa7"
  },
  {
    "url": "Linux/1.html",
    "revision": "bc1373e49dee316b682a41fab96d2511"
  },
  {
    "url": "Linux/2.html",
    "revision": "dd85c3d1c5095a995d8c43262febd7db"
  },
  {
    "url": "Linux/3.html",
    "revision": "35ef5a41ccd9be5a0b90a63dc21a3a49"
  },
  {
    "url": "Linux/4.html",
    "revision": "5999565d147f103ca238cb7ebf459e08"
  },
  {
    "url": "Linux/index.html",
    "revision": "8854f4084c765f3c3a6ab237987ba76e"
  },
  {
    "url": "markdown/index.html",
    "revision": "d3219f52b0948d2c874f55becc6d83c8"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "f2d05849d9afe79dfab04a951526e92c"
  },
  {
    "url": "mathjax/index.html",
    "revision": "588b269487681fc345c3ba439dbc69a8"
  },
  {
    "url": "ML/elkan.html",
    "revision": "f6da1045a9d6bdb97a8fa39dda8a9dbb"
  },
  {
    "url": "ML/index.html",
    "revision": "99fb7a70da9cc003eab72a0e775d05ee"
  },
  {
    "url": "SQLite/1.html",
    "revision": "5c27763f97006efa6d9eb5628c5db57c"
  },
  {
    "url": "SQLite/2.html",
    "revision": "8362a4a94cebf47e0b6229da77f90a05"
  },
  {
    "url": "SQLite/index.html",
    "revision": "818dabd4a4b75da41340c899a14ccb69"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
