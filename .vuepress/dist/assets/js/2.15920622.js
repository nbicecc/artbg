(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(a,e,n){"use strict";n.r(e);var t=n(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"x86-long-mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#x86-long-mode","aria-hidden":"true"}},[a._v("#")]),a._v(" x86 long mode")]),n("h2",{attrs:{id:"x86-与-x86-64"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#x86-与-x86-64","aria-hidden":"true"}},[a._v("#")]),a._v(" x86 与 x86_64")]),n("h2",{attrs:{id:"pae-paging-and-legacy-paging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pae-paging-and-legacy-paging","aria-hidden":"true"}},[a._v("#")]),a._v(" PAE-Paging and Legacy-Paging")]),n("ul",[n("li",[n("p",[a._v("传统分页模式")])]),n("li",[n("p",[a._v("PAE分页模式")])])]),n("h2",{attrs:{id:"进入long-mode的步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进入long-mode的步骤","aria-hidden":"true"}},[a._v("#")]),a._v(" 进入long mode的步骤")]),n("ol",[n("li",[a._v("测试是否支持CPUID")])]),n("div",{staticClass:"language-asm extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(";测试FLAGS的第21位是否为1\npushad\npushfd\npop eax\nmov ecx, eax\nxor eax, 1 << 21\npush eax\npopfd\npushfd\npop eax\npush ecx\npopfd\nmov %输出,0   ;%输出是内存区域\nxor eax,ecx\njb nocpuid\nmov %输出,1   ;%输出是内存区域\nnocpuid:\npopad\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[a._v("测试是否支持long mode")])])])}],!1,null,null,null);e.default=s.exports}}]);