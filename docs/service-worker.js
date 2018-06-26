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
    "revision": "3f3bdfccbfc82626f2bf863a1a4eed96"
  },
  {
    "url": "about/index.html",
    "revision": "f2e0b3c600bcba43c5ab1214302de1a3"
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
    "url": "assets/js/app.82f31bda.js",
    "revision": "e6fe3a34f129c4fba0e8508d35d1dfbf"
  },
  {
    "url": "index.html",
    "revision": "e700d8099d0557498a98b8c3e918573b"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "cfb017f5621d672674ac7f223381313a"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "706e72dbcc62a1a7bbeb5c974c0d7317"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "a26e579ee317ebcbd9c3b5e43d80d0ca"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "12762514ac78eb42346094f416431bb6"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "18566f03b3d258dd21cc260601cdb18b"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "351b370556077d58560f3d04288af1d7"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "8dfdc02df7ce6134a27f08f3eb8512b9"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "3cdb3ace5de0009895c7e9f35b9226a9"
  },
  {
    "url": "Linux/1.html",
    "revision": "c83d6db2332a13195899e9fd3cb0e602"
  },
  {
    "url": "Linux/2.html",
    "revision": "a1302cde5ce6e98bf77ada89f7753b35"
  },
  {
    "url": "Linux/3.html",
    "revision": "577dcd0de7433d0725fe6c84e3e06c6f"
  },
  {
    "url": "Linux/4.html",
    "revision": "47b402a29dcc66169155516e8954fdb1"
  },
  {
    "url": "Linux/index.html",
    "revision": "365e065f7ed260b7efaf661c04e5f631"
  },
  {
    "url": "markdown/index.html",
    "revision": "9c06ae548555268d68175fa75b8f1b39"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "9625160657b3dd294c82cb33238c7ab1"
  },
  {
    "url": "mathjax/index.html",
    "revision": "45948c144678e5d1069db3bdd683c571"
  },
  {
    "url": "ML/conv_excel.html",
    "revision": "dd5e098474b30524e6cf6a0305f8490e"
  },
  {
    "url": "ML/elkan.html",
    "revision": "a3f5375af412ed108796cf5d04db83af"
  },
  {
    "url": "ML/index.html",
    "revision": "663a65f8061f9caba9cc0fc128fae0ca"
  },
  {
    "url": "SQLite/1.html",
    "revision": "3ff3bf6ba393e5bad45e44401e780041"
  },
  {
    "url": "SQLite/2.html",
    "revision": "5c26b4150f3d5a5a0ad72e62b6ac78b8"
  },
  {
    "url": "SQLite/index.html",
    "revision": "cde12bee5189a4eb696b74c1418f5c21"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
