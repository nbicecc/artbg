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
    "revision": "41b7f5c0574689eb9b7b0bf8f17650a2"
  },
  {
    "url": "artbg/index.html",
    "revision": "e4cd7ee6c5959a98ff006e7c1d0a36a6"
  },
  {
    "url": "artbg/kernel_x86_64/index.html",
    "revision": "4d2c1af21c07b6693ca616588cb212b3"
  },
  {
    "url": "artbg/kernel_x86_64/x86_64_long_mode.html",
    "revision": "eae97efa25cc8b619d29af178ce5a9d1"
  },
  {
    "url": "artbg/kernel_x86/index.html",
    "revision": "6cf710ec839c8311389ecdff3f50c147"
  },
  {
    "url": "artbg/kernel_x86/x86_A20.html",
    "revision": "d818edac08228422399d2793ec29690c"
  },
  {
    "url": "artbg/kernel_x86/x86_CPUID.html",
    "revision": "2149956b7459dcf7f511d07237d4dae0"
  },
  {
    "url": "artbg/kernel_x86/x86_GDT.html",
    "revision": "1e908a44ed88823b96cc15d210c818c8"
  },
  {
    "url": "artbg/kernel_x86/x86_IDT.html",
    "revision": "d9ad0caac0ad88abe3a99795fc5165c9"
  },
  {
    "url": "artbg/kernel_x86/x86_PIC.html",
    "revision": "6967abc5c2d7caaa9f073f9b2e9b0c86"
  },
  {
    "url": "artbg/markdown/index.html",
    "revision": "9d7b52afa4c2168a45ad4e69926477d5"
  },
  {
    "url": "artbg/markdown/markdown语法.html",
    "revision": "207393bea4bb73e82060e3be3d0db532"
  },
  {
    "url": "artbg/ML/elkan.html",
    "revision": "aa8f6d5ab07c096f86c7dac5b7ac5b98"
  },
  {
    "url": "artbg/ML/index.html",
    "revision": "6b3025592d12c8d2afdbcfc63cc14d31"
  },
  {
    "url": "assets/css/29.styles.22437470.css",
    "revision": "c0f71fd1cbcb4d72ec6ddbc25c06585a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.471652c7.js",
    "revision": "a4c73b4c14489af21c4d9317515656b4"
  },
  {
    "url": "assets/js/1.2cae7107.js",
    "revision": "cf557a2778f5850e8df037ad8b1ae6b5"
  },
  {
    "url": "assets/js/10.a79e29ef.js",
    "revision": "0d0f4b35304aec7a599bc9abf3a77612"
  },
  {
    "url": "assets/js/11.28bc07fa.js",
    "revision": "995841766d2c8426468c858d8e403e11"
  },
  {
    "url": "assets/js/12.cfd11780.js",
    "revision": "b0b2ba51e5d563e17606f3013779838c"
  },
  {
    "url": "assets/js/13.74c9e13d.js",
    "revision": "31722954c226714d66fdf1832aa42147"
  },
  {
    "url": "assets/js/14.abbf6861.js",
    "revision": "690271b82df559da436cdbbfa9396e97"
  },
  {
    "url": "assets/js/15.01cda92b.js",
    "revision": "f78ffbd40bd0b80d3f1fff6d6ca3cae3"
  },
  {
    "url": "assets/js/16.95fdb675.js",
    "revision": "a98a18ea1bb04ae6178ce4e8c24c1f56"
  },
  {
    "url": "assets/js/17.16a155a3.js",
    "revision": "021b38d8c10971b6ec5742a1a1a540fa"
  },
  {
    "url": "assets/js/18.a09a7a61.js",
    "revision": "09bfc8ac19e749a75bae96bdbe4f85fd"
  },
  {
    "url": "assets/js/19.4237cefa.js",
    "revision": "7930c31d26c7c146f1444582c0f6b545"
  },
  {
    "url": "assets/js/2.490fe4c2.js",
    "revision": "1a495faaacee86b3d71b29b9a4f7083b"
  },
  {
    "url": "assets/js/20.1df2b886.js",
    "revision": "e877827c40a6fc61fe16e13efcfd09da"
  },
  {
    "url": "assets/js/21.65de7d74.js",
    "revision": "f0f49ac3a5377cd477646d19ed258caa"
  },
  {
    "url": "assets/js/22.ac1a5a95.js",
    "revision": "0d13322f9b48b44b46112d59f3db980a"
  },
  {
    "url": "assets/js/23.ce3037e5.js",
    "revision": "b5e88e48ee486fcad65fd96cd93b1dab"
  },
  {
    "url": "assets/js/24.487a166d.js",
    "revision": "c7611e1bcda3b2cfafdd45f5eefbd14c"
  },
  {
    "url": "assets/js/25.ba6384f4.js",
    "revision": "77e4d4bf76348909e491059dc872f71e"
  },
  {
    "url": "assets/js/26.46b1b94a.js",
    "revision": "3ae6d72b7cb5ad6bd097d6f4635431d0"
  },
  {
    "url": "assets/js/27.44bda997.js",
    "revision": "faff4b75aa425f0e7dc9654d45bb58bb"
  },
  {
    "url": "assets/js/28.287c2e28.js",
    "revision": "0c2659fb72213f4a3ab0b746985e60ba"
  },
  {
    "url": "assets/js/3.cb885822.js",
    "revision": "715e1fb41d982d71a0b1c7403991ed7e"
  },
  {
    "url": "assets/js/4.371a6e55.js",
    "revision": "6cad6a4ace48025b4de9474eacaf2e6b"
  },
  {
    "url": "assets/js/5.c1ffc5ec.js",
    "revision": "95233051cf1f813b86f1c6364dc9463b"
  },
  {
    "url": "assets/js/6.451bdbd8.js",
    "revision": "1683f5dd6089736805a6aa99ba3aec68"
  },
  {
    "url": "assets/js/7.00784244.js",
    "revision": "d690e3036efe71b4950045f789fadd15"
  },
  {
    "url": "assets/js/8.e2138041.js",
    "revision": "928cfd1b0edb057eca9290a4fb247c4e"
  },
  {
    "url": "assets/js/9.87004c46.js",
    "revision": "fce1791bd88067106594febcf0fcbb61"
  },
  {
    "url": "assets/js/app.c2291afb.js",
    "revision": "47127885585ef73a8ecf4ee11aaecd07"
  },
  {
    "url": "Datebase/index.html",
    "revision": "05c735def4c0e9db2a8f140bd368af01"
  },
  {
    "url": "Datebase/SQLite/index.html",
    "revision": "1da80330d60d0d323ad7aee940ae5a27"
  },
  {
    "url": "document/markdown/index.html",
    "revision": "76b1929ec23f72ef80015c57bb384744"
  },
  {
    "url": "document/markdown/markdown语法.html",
    "revision": "49ef63d21f52c359d9575089db7a80af"
  },
  {
    "url": "document/mathjax/index.html",
    "revision": "97152c93d4e7d1e09d4803bd8e07ced1"
  },
  {
    "url": "index.html",
    "revision": "238b5debbf6a53a1315a1292a8776155"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "6606b0acca43ca418ad5e4148d238d74"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "fdd5c8ec723f35cbe66e3fdc0629cadf"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "ac1e0909e2c0b10ffbc25482393844a4"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "f95f21f02def40163a220a1f72ccd4d0"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "68157ec0edae31452749901bfbd1d002"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "4277de676a37f6dc6de63a714c72f02c"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "df18a66b95185dd8028d0e21cbef7eb9"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "7ef5855ee1001c8e0ebfb2fdfdfcebeb"
  },
  {
    "url": "ML/elkan.html",
    "revision": "89acb0f5d7735d47b9c7c216317d3475"
  },
  {
    "url": "ML/index.html",
    "revision": "0a7253d6b15106889e74599d9374a1c6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
