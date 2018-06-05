module.exports = {
  title: 'artbg',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: `https://coding.net/u/sclei/p/picb/git/raw/master/heads/head_icon_lilei_2018.jpg` }],
    ['script', {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML',
      type: 'text/javascript', async: ''
    }]

  ],


  base: '/public/',
  dest: './docs/public',
  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      // text为导航栏显示文字，link为路径，即文件夹名或者链接
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'Blog',
        items: [
          {
            text: '操作系统', items: [
              { text: 'kernel_x86', link: '/kernel_x86/' },
              { text: 'kernel_x86_64', link: '/kernel_x86_64/' }
            ]
          }//操作系统结束
        ] 
      },//Blog结束
      { text: 'Github', link: 'https://github.com/nbicecc' },
      { text: 'Coding', link: 'https://coding.net/u/sclei' }
    ],
    // 侧边栏配置,侧边栏组，不同（导航）页面对应不同的侧边栏
    // 以对象形式配置，前边的key为nav处的路径,后边提供一个数组作为此侧边栏中的子标题
    sidebar: {
        '/kernel_x86/':[
          '',
          'x86_A20',
          'x86_CPUID',
          'x86_GDT',
          'x86_IDT',
          'x86_PIC'
        ],
    },
    sidebarDepth: 2
  }
}
