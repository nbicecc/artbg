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
    "revision": "1c0c8450c5bf04f830191d502fa06686"
  },
  {
    "url": "about/index.html",
    "revision": "047d1ec1ef9173290a739ca6cd0e7b81"
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
    "url": "assets/js/15.71ac9227.js",
    "revision": "a6d81475a89e6d64389400ad9638b4e7"
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
    "url": "assets/js/19.a8db590e.js",
    "revision": "115880da63a7de4fa851fb57920df8fc"
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
    "url": "assets/js/22.b0e20a42.js",
    "revision": "3d42bab3293cb07873d6ea8a39f61459"
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
    "url": "assets/js/app.aace982d.js",
    "revision": "bdc323265f26ac84a00c011ef946d8b2"
  },
  {
    "url": "index.html",
    "revision": "4782d07cf94f4ece6769ce53c1a0bd95"
  },
  {
    "url": "js/custom.js",
    "revision": "79b77d6cd8817660d3b7fad61c835cd2"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "c10e799ffea974cee3f7fdd82b0780ba"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "e2fe3c52675a76a33b179c9774874d06"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "9b18920dfe7e4cd7ae7aa5de07a6e308"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "7856b5e98b8dfb9c2140eadcc9ba39a3"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "272fbf12d04b4430e913cc59a7911dfa"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "f862dad838ea773f860b296b40bfb28a"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "94d4968714bb60920981b5a0921edfb4"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "adc1d3af3083312185cfea2fef5b4b57"
  },
  {
    "url": "Linux/1.html",
    "revision": "3ea60c767510087bce5104cfb149ccb5"
  },
  {
    "url": "Linux/2.html",
    "revision": "615a51ac6586492d1bb3e76ea602c05b"
  },
  {
    "url": "Linux/3.html",
    "revision": "91d06af5e916ec4a19438269d342efc5"
  },
  {
    "url": "Linux/4.html",
    "revision": "4477c127c93d0eb2132bfafcb1385a50"
  },
  {
    "url": "Linux/index.html",
    "revision": "ddfff91e8f19a46718cd180e6e4f674a"
  },
  {
    "url": "markdown/index.html",
    "revision": "19f2159ccb378016d064d0a8d4c3f864"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "3491faf7eca4468d74cdba1b11490838"
  },
  {
    "url": "mathjax/index.html",
    "revision": "11b437bcf7be842fc595eb8d35819929"
  },
  {
    "url": "ML/elkan.html",
    "revision": "bb02bdb670602d88b78a2f53011719f9"
  },
  {
    "url": "ML/index.html",
    "revision": "fe1c4afb8bcddcf6b8e6deb8f38f88ac"
  },
  {
    "url": "SQLite/1.html",
    "revision": "9fb85c6fa5a0fee05d22c538e699fa42"
  },
  {
    "url": "SQLite/2.html",
    "revision": "103b042eaddf32539f354c200b0226a9"
  },
  {
    "url": "SQLite/index.html",
    "revision": "432b123f72070a32f0d25b74001519af"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
