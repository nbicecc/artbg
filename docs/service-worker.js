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
    "revision": "1f8907d53b7f5b86a0855201f678f1cf"
  },
  {
    "url": "about/index.html",
    "revision": "d1ce73c98daf20fd21199de12862ac5b"
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
    "url": "assets/js/19.8d4a95d4.js",
    "revision": "f15d0ba31e43d3cbd184ecc941b5fe25"
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
    "url": "assets/js/app.9f983632.js",
    "revision": "d5f91ff09d10674cf7d2e84ccb6b56b6"
  },
  {
    "url": "index.html",
    "revision": "5600638b759f538724275f8b81a7f5ea"
  },
  {
    "url": "js/custom.js",
    "revision": "79b77d6cd8817660d3b7fad61c835cd2"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "f8e8aae9c7f11d03003f02adb529d77d"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "bcb81fb373bacc990f2cfcf9693ffa78"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "4bce706d631e050780ad67bd78cb5abe"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "b05b3701bd7a309857a4b8dec72f3d95"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "56715b722b8f87da51a8f1d3ffcce765"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "16f3f46dd71f186dad24bc0758c7261b"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "2c6dece57c4620e5d522b1255109c359"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "6bc1e283226ba312a678060b673ce7d2"
  },
  {
    "url": "Linux/1.html",
    "revision": "1d290b89e9ee6aa2a9442ca575c5e1e5"
  },
  {
    "url": "Linux/2.html",
    "revision": "617485deb78c802ae1a7ddbedbc12fb0"
  },
  {
    "url": "Linux/3.html",
    "revision": "e79efb8fd9ca9dd60a10dcdfc332580c"
  },
  {
    "url": "Linux/4.html",
    "revision": "9dfbb2bdf2576a457bdd2cf39ac4d285"
  },
  {
    "url": "Linux/index.html",
    "revision": "f00aea0e0b4423ea3efa91772e7ddd6e"
  },
  {
    "url": "markdown/index.html",
    "revision": "1f088eb9987f42af5f12b8cca62b269f"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "0e08cc29e501ec213fba3f69bb3e2bee"
  },
  {
    "url": "mathjax/index.html",
    "revision": "577f766bde5894d4710c5aabb24b4b71"
  },
  {
    "url": "ML/elkan.html",
    "revision": "96a062a55754bc21f75ee0c8988baa55"
  },
  {
    "url": "ML/index.html",
    "revision": "dcdd399e0f331eba02a0777996a6d7e2"
  },
  {
    "url": "SQLite/1.html",
    "revision": "d37280ca9b77bceae1dc91f62cd0f467"
  },
  {
    "url": "SQLite/2.html",
    "revision": "7dbd9c87baaa365194df7fae8e195e8d"
  },
  {
    "url": "SQLite/index.html",
    "revision": "7feb298ba2c16cf01c83aef47d1a5433"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
