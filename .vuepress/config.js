module.exports = {
  title: 'artbg',
  description: '生命不息 学无止境',
  head: [
    ['script', { src: '/js/custom.js', type: 'text/javascript' }],
    ['link', { rel: 'icon', href: `https://coding.net/u/sclei/p/picb/git/raw/master/heads/head_icon_lilei_2018.jpg` }],

    //PWA应用支持
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    //iOS Safari支持
    ['meta', { name: 'apple-mobile-web-app-title', content: "artbg" }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: "black" }],
    ['link', { rel: 'apple-touch-icon', href: `https://coding.net/u/sclei/p/picb/git/raw/master/heads/head_icon_lilei_2018.jpg` }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: "yes" }],
    //windows eage支持
    ['meta', { name: 'msapplication-TileImage', content: "https://coding.net/u/sclei/p/picb/git/raw/master/heads/head_icon_lilei_2018.jpg" }],
    ['meta', { name: 'msapplication-TileColor', content: "#FFFFFF" }],
    //PWA应用支持 结束

    ['script', {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML',
      type: 'text/javascript'
    }],

  ],
  serviceWorker: true,
  base: '/',
  dest: './docs/public',
  // 主题配置
  themeConfig: {
    //最后更新时间
    lastUpdated: 'Last Updated (更新时间)',
    //导航栏配置
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'Blog',
        items: [
          {
            text: '操作系统', items: [
              { text: 'kernel_x86', link: '/kernel_x86/' },
              { text: 'kernel_x86_64', link: '/kernel_x86_64/' },
              { text: 'Linux', link: '/Linux/' }
            ]
          }//操作系统结束
          ,
          {
            text: '人工智能', items: [
              { text: '机器学习', link: '/ML/' }
            ],
          },
          {
            text: '文档', items: [
              { text: 'Markdown', link: '/markdown/' },
              { text: 'Mathjax', link: '/mathjax/' }
            ]
          },
          {
            text: '数据库', items: [
              { text: 'SQLite', link: '/SQLite/' }
            ]
          }

        ]
      },//Blog结束
      { text: 'Github', link: 'https://github.com/sclei' },
      { text: 'Coding', link: 'https://coding.net/u/sclei' }
    ],
    // 侧边栏配置,侧边栏组，不同（导航）页面对应不同的侧边栏
    // 以对象形式配置，前边的key为nav处的路径,后边提供一个数组作为此侧边栏中的子标题
    sidebar: {
      '/kernel_x86/': [
        '',
        'x86_A20',
        'x86_CPUID',
        'x86_GDT',
        'x86_IDT',
        'x86_PIC'
      ],
      '/kernel_x86_64/': [
        '',
        'x86_64_long_mode',
      ],
      '/ML/': [
        '',
        ['/ML/elkan.md', 'Elkan三角形原理加速聚类算法'],
      ],
      '/markdown/': [
        '',
        'markdown1',
      ],
      '/SQLite/': [
        '',
        '1',
        '2'
      ],
      '/Linux/': [
        '',
        '1',
      ],
    },
    sidebarDepth: 2
  }
}
