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
    "revision": "a92e41391b1461f7bc4276b43610859a"
  },
  {
    "url": "about/index.html",
    "revision": "c216480e6e3ca5f1bac2d8ec06a9d3d9"
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
    "url": "assets/js/14.6e26d7c4.js",
    "revision": "2d20db9c7b7d21bdd2ad382c1f4e4af4"
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
    "url": "assets/js/20.38ba20cd.js",
    "revision": "b447932a19333669f83793df8b5605a3"
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
    "url": "assets/js/23.cc416498.js",
    "revision": "801845d05ce74cc08a1982086d10c417"
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
    "url": "assets/js/app.374387f5.js",
    "revision": "9a0542d02ad915da8af2d03372cf5c52"
  },
  {
    "url": "index.html",
    "revision": "d2d52a7c883525fcff131a4bf87f4aea"
  },
  {
    "url": "js/custom.js",
    "revision": "540a38803dc78fd92e71f85138baded2"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "4d85c0f234708492fe0434d64f3451c2"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "3bdeb98f86fbe925e9bbad6eb86c10e3"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "f15e8d96b3c39176e34aa40d94e0ebd8"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "5a79e5281fd98aa3c3409d1b65a210c5"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "5b2dbdbdddef8b8ae66d8a227e84fee0"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "796e0c3ef5647d25302102e93cf0435c"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "861d78181839ccf2f0a3638e5cf2a867"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "a5143d9c10decc667817613b8779f6db"
  },
  {
    "url": "Linux/1.html",
    "revision": "5c8ea689f916c091de136dde18235b54"
  },
  {
    "url": "Linux/2.html",
    "revision": "aabcef5cf026cbc5436bbb7c4cd390ce"
  },
  {
    "url": "Linux/3.html",
    "revision": "8040d02b2dd4fabb1a883eaf04c27765"
  },
  {
    "url": "Linux/4.html",
    "revision": "997fa73f0a099abd77b955622b5ee133"
  },
  {
    "url": "Linux/index.html",
    "revision": "36734867e8e59aa6963131aa1b4b7f33"
  },
  {
    "url": "markdown/index.html",
    "revision": "c9fb0dffa7bf7f199f372c97142bc2c9"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "77020d2f358a6fdb040dc688359b08d4"
  },
  {
    "url": "mathjax/index.html",
    "revision": "946c0313fa647f6ef8e6c56298f662ea"
  },
  {
    "url": "ML/conv_excel.html",
    "revision": "8c2f5f5794bcdd0064d426e4d17ae727"
  },
  {
    "url": "ML/elkan.html",
    "revision": "6ac8f55eb5df6a1989b54f461edbcdde"
  },
  {
    "url": "ML/index.html",
    "revision": "9153aaf48be0a335975ea044dcce65bf"
  },
  {
    "url": "SQLite/1.html",
    "revision": "5171b8d3e94c2dc63874839ccbe2f0fa"
  },
  {
    "url": "SQLite/2.html",
    "revision": "d43fc9681c797e58d4b139dc78a62278"
  },
  {
    "url": "SQLite/index.html",
    "revision": "3507c2afb43a83aa6b73845eb986196e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
