module.exports = {
  title: 'artbg',
  description: 'Just playing around',
  head: [
   ['link', {rel: 'icon',href: `https://avatars0.githubusercontent.com/u/24380548?s=80`}]
 ],

  base: '/',
  dest: '.vuepress/dist',
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
      '': [
        // ''空字符串代表主页，显示README.md中的内容
        '',
        ['三角形引理推导加速聚类公式(Elkan算法)', '三角形引理推导加速聚类公式(Elkan算法)'],//使用数组为侧边栏起别名，前边是md名称，后边是链接显示的文字

        ],
      '/kernel_x86/': [
        '',

        ]
    },
    // 这是嵌套标题链接，自动显示当前激活（导航）页面标题的链接，即显示深度（h1-h6的深度）
    sidebarDepth: 1
  }
}
