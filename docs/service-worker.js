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
    "revision": "2a8640db2a39156b718959b2f99a188b"
  },
  {
    "url": "about/index.html",
    "revision": "543bbb8c91729a322a610959ef14310c"
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
    "url": "assets/js/17.92a4fe93.js",
    "revision": "c5eb555d7baed91d8b8f4d612fbea678"
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
    "url": "assets/js/app.1fc51e5f.js",
    "revision": "d4f23050e8169ea7bbdea6bd6b2cedf6"
  },
  {
    "url": "index.html",
    "revision": "5da95de5c9af39f7f7851e04e5b8ab21"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "e31063b85af50c504c103dabdec4a031"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "05019204a7cd0a2fde6429897e5392ac"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "30dcc2c7f24dcd813cd4ae29635fb596"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "426c7fb12900527a149f4ea691ae28b2"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "f5d78a8f7160f3f4e22340b5329e6d64"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "05b9a87a5b8df95a78280affaa9868f2"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "4b91e6abfae1fe85dd198f29b90ddf10"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "30876a94ad0a3d3a5105e0853cf662d5"
  },
  {
    "url": "Linux/1.html",
    "revision": "18a443e1955e47f909dd3bf302ae55ef"
  },
  {
    "url": "Linux/2.html",
    "revision": "e221ea4ccb6b96a0524034301534c08e"
  },
  {
    "url": "Linux/3.html",
    "revision": "bfe73a17bcebb588796eaf98e76acc1e"
  },
  {
    "url": "Linux/4.html",
    "revision": "7cddab646ffcb2f640eac8f2ac82031f"
  },
  {
    "url": "Linux/index.html",
    "revision": "dadf9e00ad43428a109b4bf5b5a4ace9"
  },
  {
    "url": "markdown/index.html",
    "revision": "59ae71e277b2c669635871f25cca57f4"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "ceb946079a1ece003581c5525f6c9b31"
  },
  {
    "url": "mathjax/index.html",
    "revision": "b39d9720fb39ab655117b5b97da8ef92"
  },
  {
    "url": "ML/conv_excel.html",
    "revision": "aff48d0bb6fd7116d083de3399e6e1b6"
  },
  {
    "url": "ML/elkan.html",
    "revision": "40575f16fcba67bdba96c5fab3e662c9"
  },
  {
    "url": "ML/index.html",
    "revision": "a9d1a3a0e7ee7c84d383f7dd40dbfb9e"
  },
  {
    "url": "SQLite/1.html",
    "revision": "9d2a6546f868f32c74af7aeaaa6d73e6"
  },
  {
    "url": "SQLite/2.html",
    "revision": "c4483885fd0e3a9c1e633ebee76f2236"
  },
  {
    "url": "SQLite/index.html",
    "revision": "c2177b1abcde52100082fdaed7f2bba0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
