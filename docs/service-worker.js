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
    "revision": "ecad5563943ca9f3d95f62fbb96cf695"
  },
  {
    "url": "about/index.html",
    "revision": "5b1577c75b2820c5f2dc8f87d5c96509"
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
    "url": "assets/js/22.226a26db.js",
    "revision": "1126acfa2269bfadfb80c583e0cb5ffe"
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
    "url": "assets/js/app.68f92978.js",
    "revision": "126c1f33e83ede82470bcb375d501e19"
  },
  {
    "url": "index.html",
    "revision": "ef59997428090950ee1b2c358244a4a5"
  },
  {
    "url": "js/custom.js",
    "revision": "050c08339eda6d1aa42b2ed1759a372e"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "724370b997b18d2a93ba4a0a7adf2cf1"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "1087628c9b8aaf9d4bbd6ebe8f9f5bf8"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "be59310cc7c4b32272686ebb1dd3ccad"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "6927468129123b2e28205d0c0ce74dce"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "c0a2769e2b7009a996330dfb6b368f07"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "53bd16336d807442fad1d25ce15a57e4"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "9459e3907e93b1a434feb1aadc23758f"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "64881ff28bd010c18dc9fb916237865c"
  },
  {
    "url": "Linux/1.html",
    "revision": "6b1789dc1385d04ad98f011318e46835"
  },
  {
    "url": "Linux/2.html",
    "revision": "318f3cd88aa1cb1adfa5ea32bfdab8a8"
  },
  {
    "url": "Linux/3.html",
    "revision": "bd0ec7c0d599a6e046b296ac49c140ad"
  },
  {
    "url": "Linux/4.html",
    "revision": "4d28fbf0f7c1ec823487a62975c50dd2"
  },
  {
    "url": "Linux/index.html",
    "revision": "fcfd2f413c26e000109c6a4927e94faf"
  },
  {
    "url": "markdown/index.html",
    "revision": "34d3aceb9bc00b2e0bda5fd4c2857399"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "c54316fdde11a00a35a86ca057d2d2e2"
  },
  {
    "url": "mathjax/index.html",
    "revision": "a707f0acccf0fcd831e2627524230fc9"
  },
  {
    "url": "ML/conv_excel.html",
    "revision": "2ef4dffc71ce2ae11b3433e932f6779e"
  },
  {
    "url": "ML/elkan.html",
    "revision": "4cb575d9bc4da7bfe0139d283edb9df0"
  },
  {
    "url": "ML/index.html",
    "revision": "ab1a842a5032322edae22572efda725b"
  },
  {
    "url": "SQLite/1.html",
    "revision": "77571e809e81899d8a50913183293002"
  },
  {
    "url": "SQLite/2.html",
    "revision": "b98d76a0790221ccaef57d4a5a20bcc2"
  },
  {
    "url": "SQLite/index.html",
    "revision": "bfea88e717128d1315e0ac062f3178ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
