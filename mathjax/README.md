<UseMathJax/>

# 使用MathJax在网页中显示数学公式

## MathJax简介
MathJax官网:[https://www.mathjax.org/](https://www.mathjax.org/)\
引用官网首页的话，MathJax是能在浏览器中显示漂亮数学公式的一款JavaScript插件，不需要安装。
> Beautiful math in all browsers \
> A JavaScript display engine for mathematics that works in all browsers. \
> No more setup for readers. It just works.

## HTML中引用MathJax的方法
```
这是测试inline公式$a+b+c=z$
```
效果如下
这是测试inline公式$a+b+c=z$

```html
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML" type="text/javascript"></script>
<script>
MathJax.Hub.Config({
                tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
                }});
MathJax.Hub.Queue(["Typeset",MathJax.Hub]); //如果页面重载可调用本行代码重新渲染数学公式
</script>
</head>
<body>
测试数学方程组
$$\begin{cases}
a_1x+b_1y+c_1z=d_1\\\\
a_2x+b_2y+c_2z=d_2\\\\
a_3x+b_3y+c_3z=d_3\\\\
\end{cases}
$$
</body>
</html>
```
---
测试数学方程组
$$\begin{cases}
a_1x+b_1y+c_1z=d_1\\\\
a_2x+b_2y+c_2z=d_2\\\\
a_3x+b_3y+c_3z=d_3\\\\
\end{cases}
$$

---

## 在Vue中将MathJax封装成组件
MathJax默认在网页加载阶段渲染公式，一旦渲染完毕则不会再次渲染，除非刷新页面。Vue单页应用切换页面不会产生刷新事件，MathJax则不会触发再次渲染事件，这时候需要手动调用```MathJax.Hub.Queue(["Typeset",MathJax.Hub]); ```才能重新渲染公式，要实现自动重新渲染当然第一个想到的是，当页面发生路由事件时截获路由，执行```MathJax.Hub.Queue(["Typeset",MathJax.Hub]); ```，但是日常使用中不是每个网页都会涉及到公式，如果每个网页都截获路由，则会降低加载效率。最好的方式时在要使用数学公式的页面里单独挂钩，执行重新渲染。
- UseMathJax.vue组件
```js
<template>
</template>
<script>
export default {
    name:"UseMathJax",
    beforeMount(){
        this.create()
    },
    mounted(){
        this.resume()
    },
    methods: {
        create(){
                MathJax.Hub.Config({
                tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
                }})
        }
        ,
        resume(){
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        },
    }
}
</script>

```

- 引用方法
    在需要引用数学公式的markdown文件中引用标签```<UseMathJax/>```