(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(t,s,a){"use strict";a.r(s);var n=a(0),c=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"cpuid指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpuid指令","aria-hidden":"true"}},[t._v("#")]),t._v(" CPUID指令")]),a("h2",{attrs:{id:"调用格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用格式")]),a("h2",{attrs:{id:"cpuid-00h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpuid-00h","aria-hidden":"true"}},[t._v("#")]),t._v(" CPUID.00H")]),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//cpuid.c")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" cpuid_return_struct\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  uint32_t eax"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  uint32_t ebx"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  uint32_t ecx"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  uint32_t edx"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//c语言定义cpuid指令函数")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("inline")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cpuid")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" cpuid_return_struct "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" cpu_fetures"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("uint32_t arg_eax"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("asm")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"pushal"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("asm")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("volatile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"cpuid"')]),t._v("\n                  "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                  "),a("span",{attrs:{class:"token string"}},[t._v('"=a"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu_fetures"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("eax"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                  "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"=b"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu_fetures"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("ebx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                  "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"=c"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu_fetures"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("ecx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                  "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"=d"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu_fetures"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("edx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"a"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg_eax"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("asm")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"popal"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//CPUID.00H 返回CPU的基本信息")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cpuid_cpu_feature")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" cpuid_return_struct "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" cpu_fetures"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  uint32_t eax"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("0x0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//cpuid.00H号功能，获取cpu的基本信息")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("cpuid")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu_fetures"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("eax"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("调用cpuid.00h号功能测试cpuid指令封装的正确性")]),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//test.c")]),t._v("\nuint32_t str"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" cpuid_return_struct cpu_fetures"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cpuid_cpu_feature")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("cpu_fetures"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cpu_fetures"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ebx"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cpu_fetures"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edx"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cpu_fetures"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ecx"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("write_str")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0x07")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Windows 10 环境下 qemu-system-x86_64虚拟机执行结果：")]),a("blockquote",[a("p",[t._v("AuthenticAMD")])])])}],!1,null,null,null);s.default=c.exports}}]);