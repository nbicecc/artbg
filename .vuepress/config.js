module.exports = {
  title: 'artbg',
  description: 'Just playing around',
  head: [
   ['link', {rel: 'icon',href: ``}],
   ['script',{ src:'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML', type:'text/javascript'}]
 ],

  base: '/public/',
  dest: './docs/public',
  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      // text为导航栏显示文字，link为路径，即文件夹名或者链接
      {text: 'Home', link: '/'},
      {text: 'About', link: '/about/'},
      {text: 'kernel_x86', link: '/kernel_x86/x86_GDT.html'},
      {text: 'Github', link: 'https://github.com/nbicecc'},
      {text: 'Coding', link: 'https://coding.net/u/sclei'}
    ],
    // 侧边栏配置,侧边栏组，不同（导航）页面对应不同的侧边栏
    // 以对象形式配置，前边的key为nav处的路径,后边提供一个数组作为此侧边栏中的子标题
    sidebar: {

    },
    sidebarDepth: 1
  }
}
