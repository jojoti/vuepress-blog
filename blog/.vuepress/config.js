module.exports = {
    // rf: https://github.com/deliangyang/sntflyv.github.io/blob/master/docs/.vuepress/config.js
    title: 'JoJo Wang | 记录的地方',
    description: '',
    base: '/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'JoJo Wang',
            description: '记录的地方'
        },
        // '/en': {
        //   lang: 'en-US',
        //   title: 'JoJo Wang',
        //   description: 'bloging'
        // }
    },
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F-logo
    themeConfig: {
        logo: '/logo.png',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'jojoti/jojoti.github.io',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'blog',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                // 配置导航栏
                nav: [
                    {
                        text: '首页',
                        link: '/',
                    },
                    {
                        text: '关于',
                        link: '/about'
                    },
                    {
                        text: '留言',
                        link: 'https://github.com/jojoti/jojoti.github.io/issues/new',
                        target: '_blank'
                    },
                ],
                // ----------------------------------------------------------------------------------------------------------------------------------------
                sidebar: {
                    // '/': [
                    //   {
                    //     // groupName
                    //     title: '时间轴',
                    //     collapsable: false,
                    //     children: [
                    //       'readme.md',
                    //     ]
                    //   },
                    // ],
                }
            }
        }
    }
}