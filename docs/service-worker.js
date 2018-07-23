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
    "revision": "3d4cb209a4e5c13388672062562ddd16"
  },
  {
    "url": "about/index.html",
    "revision": "13370d90cacd1b22bb1a0e15d601f0dd"
  },
  {
    "url": "assets/css/27.styles.65c88b1d.css",
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
    "url": "assets/js/1.369add0f.js",
    "revision": "260a200bc03ffb6ce462b69d06f55275"
  },
  {
    "url": "assets/js/10.a8fd0219.js",
    "revision": "1c3b9c504e2d54f3c5c1b16b6d54fbec"
  },
  {
    "url": "assets/js/11.60a6815a.js",
    "revision": "e8e934cf3fb87324e1f4f1e1d6686730"
  },
  {
    "url": "assets/js/12.424f17b9.js",
    "revision": "efe02afda1eaa37a2130982dc9521b6c"
  },
  {
    "url": "assets/js/13.46bb060a.js",
    "revision": "c58efa682e0db5dc6a239b2b2e16800f"
  },
  {
    "url": "assets/js/14.405526bb.js",
    "revision": "8e13aabed44cc1e898372924fcf9af2e"
  },
  {
    "url": "assets/js/15.fa19c361.js",
    "revision": "2f1fc7b48914e06b94f6f0d11c52a7ad"
  },
  {
    "url": "assets/js/16.0a9636c6.js",
    "revision": "e1dc9577a3753ac496d7398ae06cc12e"
  },
  {
    "url": "assets/js/17.d6af5ead.js",
    "revision": "71a35656d14437d45ea61d0e587c3b64"
  },
  {
    "url": "assets/js/18.bc5a7134.js",
    "revision": "82b7d92acea77d05e7d932daf253aad3"
  },
  {
    "url": "assets/js/19.a22a0d38.js",
    "revision": "f1bd85e44d12d2d05d7bec3418ea3f6b"
  },
  {
    "url": "assets/js/2.e200b0a7.js",
    "revision": "6770662ea91284b68311e62562901ae2"
  },
  {
    "url": "assets/js/20.1a97853b.js",
    "revision": "9db6b3f968443c1f4ad739dd40d8d908"
  },
  {
    "url": "assets/js/21.bc2ad088.js",
    "revision": "7f92bcb48dbdbc9d44269060ca36e787"
  },
  {
    "url": "assets/js/22.da87e50c.js",
    "revision": "ee624119408f97f88c856d48b7dddda6"
  },
  {
    "url": "assets/js/23.753d821f.js",
    "revision": "71fa814292c6c7476f46eeb860017a62"
  },
  {
    "url": "assets/js/24.8b29c284.js",
    "revision": "9527cd58660fbae0224de4715059196a"
  },
  {
    "url": "assets/js/25.0ae21ab9.js",
    "revision": "21aa0587ec16cd1180d0bbca3c368b72"
  },
  {
    "url": "assets/js/26.b0d47cea.js",
    "revision": "5bb029e32ca7e358771e81ede1d86620"
  },
  {
    "url": "assets/js/3.9f6f696b.js",
    "revision": "6bdaa949c39aace681c1f09c9987ec9c"
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
    "url": "assets/js/app.d36512e4.js",
    "revision": "5a0d622476e239ac817bffc96b7e83d4"
  },
  {
    "url": "index.html",
    "revision": "8f7d7a4d51308738e3e3963bf3c98591"
  },
  {
    "url": "js/custom.js",
    "revision": "540a38803dc78fd92e71f85138baded2"
  },
  {
    "url": "kernel_x86_64/index.html",
    "revision": "71df6bce6f00401e3f12ef20b0e947e5"
  },
  {
    "url": "kernel_x86_64/x86_64_long_mode.html",
    "revision": "53309d86da369e396e0446ebaa3b76ec"
  },
  {
    "url": "kernel_x86/index.html",
    "revision": "615bfee14c80cd06bfda396bb19c900e"
  },
  {
    "url": "kernel_x86/scan_codes_ps2.html",
    "revision": "48387ab9f109aa404659e084b9dfb5d5"
  },
  {
    "url": "kernel_x86/x86_A20.html",
    "revision": "d67ffe9a71910e1732c42e46af0168ba"
  },
  {
    "url": "kernel_x86/x86_CPUID.html",
    "revision": "68428da0f4c4611de7b3ddfd5aa8e928"
  },
  {
    "url": "kernel_x86/x86_GDT.html",
    "revision": "b5447de64e3c3020a47787247ae7f5bb"
  },
  {
    "url": "kernel_x86/x86_IDT.html",
    "revision": "f75db972516fe596d01bfc3b902fed49"
  },
  {
    "url": "kernel_x86/x86_PIC.html",
    "revision": "de3a9afa2769c6e7c4b8c1077bc9b8b1"
  },
  {
    "url": "Linux/1.html",
    "revision": "65fdbe79a1acdf7c8ee9691b775e7024"
  },
  {
    "url": "Linux/2.html",
    "revision": "424d298023f916e742b0b3a15748a84c"
  },
  {
    "url": "Linux/3.html",
    "revision": "eebe0937dd78904c409f012024107468"
  },
  {
    "url": "Linux/4.html",
    "revision": "3536409457ad870addc1a8bf00e117be"
  },
  {
    "url": "Linux/index.html",
    "revision": "fa2b5e29919991a9b3af838d6b7f5a96"
  },
  {
    "url": "markdown/index.html",
    "revision": "ace84f3e8af7dfba9eb26ccf1943a5b6"
  },
  {
    "url": "markdown/markdown1.html",
    "revision": "25f85a54eec1f4857d4ba29de086e7c3"
  },
  {
    "url": "mathjax/index.html",
    "revision": "9839dacd168ab99644f0e307d27f14ba"
  },
  {
    "url": "ML/conv_excel.html",
    "revision": "86a258f01efa78c72bffd43d53db61c7"
  },
  {
    "url": "ML/elkan.html",
    "revision": "34c161fa7cdbba7f90df7eb6f98689d8"
  },
  {
    "url": "ML/index.html",
    "revision": "584f680aa67abd9ae2df150b144f566e"
  },
  {
    "url": "SQLite/1.html",
    "revision": "1411c10cd3b7ad5cb63e102b40a17eb8"
  },
  {
    "url": "SQLite/2.html",
    "revision": "d57dc3105bc314b4ee654e82c224a979"
  },
  {
    "url": "SQLite/index.html",
    "revision": "93d20902fdc97361b48f3beef17dbc1f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
