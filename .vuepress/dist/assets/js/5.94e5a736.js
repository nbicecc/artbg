(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"gdt-global-descriptor-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gdt-global-descriptor-table","aria-hidden":"true"}},[t._v("#")]),t._v(" GDT(Global descriptor table)")]),e("h2",{attrs:{id:"全局描述符表gdt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局描述符表gdt","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局描述符表GDT")]),e("p",[t._v("全局描述符个数为N，则GDT的限值必须是（8*N-1）。")]),e("h2",{attrs:{id:"段描述符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#段描述符","aria-hidden":"true"}},[t._v("#")]),t._v(" 段描述符")]),e("p",[t._v("处理器中有6个段寄存器，每个段寄存器包括可见部分和不可见部分，段描述符可以有多个，在程序运行的某一时刻，只允许同时最多载入6个断描述符，要使其他的断描述符起作用需要载入断描述符的可见部分，有以下指令可以载入断描述符：")]),e("div",{staticClass:"language-asm extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("MOV,POP,LDS,lES,LSS,LGS,LFS\n")])])]),e("p",[t._v("以下指令可以改变CS寄存器的值,载入代码段：")]),e("div",{staticClass:"language-asm extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("CALL,JMP,RET,SYSENTER,SYSEXIT,IRET,INT\n\n")])])]),e("h2",{attrs:{id:"段描述符格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#段描述符格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 段描述符格式")]),e("p",[e("img",{attrs:{src:"https://coding.net/u/sclei/p/picb/git/raw/master/os/SegmentDiscriptor.png",alt:"Segment Discriptor"}}),t._v("\n段描述符格式（图片摘自：intel用户手册）")]),e("p",[t._v("SegLimit:"),e("br"),t._v("\nSegment Limit 指定了段限值，访问超过段限值的内存会引发异常。G标志设置为1，表示段粒度为4KBytes，设置为0表示段粒度为1Byte；除了SS段之外，任何段内访问超过段限制的内存都会引发异常#GP(general-protection),访问SS段超过限值的内存会引发异常#SS(stack-fault exception)。")]),e("p",[t._v("L:"),e("br"),t._v("\n在64位模式下，L标识需要置为1，其他情况都应该为保留位，置为零。")])])}],!1,null,null,null);a.default=r.exports}}]);