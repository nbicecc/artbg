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
    "revision": "51185b8f711710b378805f360cde6db4"
  },
  {
    "url": "about/index.html",
    "revision": "d1251ef172ea6d83bc055ed2d33fc24d"
  },
  {
    "url": "assets/css/26.styles.60f4185c.css",
    "revision": "f672524b0df9cb42605c9852128f873a"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/0.056d5305.js",
    "revision": "56a14f57f780db916fb0d758ab0b62a8"
  },
  {
    "url": "assets/js/1.6b85b7d9.js",
    "revision": "f49d74aeff8bee05908672586d53698d"
  },
  {
    "url": "assets/js/10.50d927ed.js",
    "revision": "d2106b0be298a3e974a2afe9534d18a1"
  },
  {
    "url": "assets/js/11.a2da4848.js",
    "revision": "e80fe070378ecb6986eb57dc83ea7468"
  },
  {
    "url": "assets/js/12.72d6bb73.js",
    "revision": "ccabb77ead96588ec649047e0ff4907e"
  },
  {
    "url": "assets/js/13.8a020e25.js",
    "revision": "6d333aa0249974e5a3020ab02422fcc7"
  },
  {
    "url": "assets/js/14.1d77213d.js",
    "revision": "ba0409c84cd127e2ecae658b9cfd4fc3"
  },
  {
    "url": "assets/js/15.0259eb72.js",
    "revision": "1575b2f0a342b305b9bdb50929f47a6b"
  },
  {
    "url": "assets/js/16.00c4ffeb.js",
    "revision": "46ccba5feb9a9178aad718ade3cbf927"
  },
  {
    "url": "assets/js/17.86570a75.js",
    "revision": "e57fe4c5f0b2e39b8a04d1cc9991b05d"
  },
  {
    "url": "assets/js/18.b7d44a44.js",
    "revision": "1d040c4423c221e8e8e69d34666d4ffc"
  },
  {
    "url": "assets/js/19.8117aeee.js",
    "revision": "8ddf1c8c3ee85d2c3954f56b8c8ed64f"
  },
  {
    "url": "assets/js/2.860f4a3f.js",
    "revision": "6fa037f5e2927b4c349d655c58e2ef18"
  },
  {
    "url": "assets/js/20.b61fc0dd.js",
    "revision": "c6e166a8dd653136b5c0cfdea90c9697"
  },
  {
    "url": "assets/js/21.d15e6bfa.js",
    "revision": "e6fff31011482ad8fe13a539b5413c6b"
  },
  {
    "url": "assets/js/22.5c46122e.js",
    "revision": "28e02b9f9c4dcfa15a8c1aaa808455dc"
  },
  {
    "url": "assets/js/23.4d7bbcff.js",
    "revision": "48f92b3f225ff021e7fc5ac650d1b61b"
  },
  {
    "url": "assets/js/24.33d33c56.js",
    "revision": "1db86b20b5ec6ea11ae1c1f7b75125ba"
  },
  {
    "url": "assets/js/25.90878cf4.js",
    "revision": "8da0c514118df11a91fe9b93b00316d1"
  },
  {
    "url": "assets/js/3.db0e75c3.js",
    "revision": "35830d62dedeb7af510fcadb47d81a2a"
  },
  {
    "url": "assets/js/4.42b2ca9d.js",
    "revision": "07d2e756d3342492650ac8d26b716432"
  },
  {
    "url": "assets/js/5.c05a4c5e.js",
    "revision": "8b00f934eafa3c371fdbdbf0f685553c"
  },
  {
    "url": "assets/js/6.04d13bd6.js",
    "revision": "39dca515e4a6b28376aa3e4d5138ec69"
  },
  {
    "url": "assets/js/7.3481b317.js",
    "revision": "5c63b306cbbedcb3804062386e3a1b61"
  },
  {
    "url": "assets/js/8.ffc27119.js",
    "revision": "ba66ace31f33fe8cbc2e0c1c9e758052"
  },
  {
    "url": "assets/js/9.e57df551.js",
    "revision": "6e68a015c9203bcbfc288283efdaea60"
  },
  {
    "url": "assets/js/app.ce832a51.js",
    "revision": "bac7760db337a48836dcebbff91211d3"
  },
  {
    "url": "index.html",
    "revision": "9ad8314e3adba09fc20ebc3c9baa96a4"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "e36ca22b70a9538f6530a23ff88d0878"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "9d785eb18d2572e20d96b9bd992dffa1"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "66ee32721eadbc46efab33376a38ce14"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "bc3be8839ba2e8fe635410b0f52e956d"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "13b20ee3ba2ced9e91a96f888fbab780"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "394281bfc81ed25aeecf5562a62c3862"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "93308fada857583d6c925f4adf78e7ff"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "ee0ef7d540bda7a8a0668c78e9160d5b"
  },
  {
    "url": "Linux/1.html",
    "revision": "82f5180a5e8d58429b09c5e2f5ae8b18"
  },
  {
    "url": "Linux/2.html",
    "revision": "1c5e052edc06c3755977bbe8cfc0d1e9"
  },
  {
    "url": "Linux/3.html",
    "revision": "9092c114235056c282505788b6e7347c"
  },
  {
    "url": "Linux/4.html",
    "revision": "96b239c59cb59abb9b6f161efbc8c7dd"
  },
  {
    "url": "Linux/index.html",
    "revision": "79288cf2dfd9d32d3cefc39dd3037c84"
  },
  {
    "url": "markdown/index.html",
    "revision": "e57a4a43eabe8324d4475b8134ca40af"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "1b0692687bc72ba5dced69938a243b4f"
  },
  {
    "url": "mathjax/index.html",
    "revision": "6615ee2c1188492d38b30328e48b5463"
  },
  {
    "url": "ML/conv_excel.html",
    "revision": "70c7452e3803a0432cd815963b8213fa"
  },
  {
    "url": "ML/elkan.html",
    "revision": "ce9d2f15e281d8d0b63aa8e81ea012f0"
  },
  {
    "url": "ML/index.html",
    "revision": "ce96629027b4a84ce79ab43d87d4eb44"
  },
  {
    "url": "SQLite/1.html",
    "revision": "6b4ec330f6a281bd24eba33573e6bde6"
  },
  {
    "url": "SQLite/2.html",
    "revision": "2d827bbd5b83bb68a76858cdb5cf73d7"
  },
  {
    "url": "SQLite/index.html",
    "revision": "0bdedd701bedb44704586b9e054a0e59"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
