import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress/',
  title: "懒虫笔记",
  description: "自用笔记，食用中毒概不负责",

  // OneLight 代码高亮主题
  markdown: {
    theme: {
      light: 'one-light',
      dark: 'one-dark-pro'
    },
    lineNumbers: true
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#fafafa' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: '懒虫笔记' }],
    ['meta', { name: 'og:description', content: '自用笔记，食用中毒概不负责' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Agent', link: '/agent/index' },
      { text: 'Java', link: '/java/index' },
      { text: 'LLM', link: '/llm/index' }
    ],

    sidebar: {
      '/agent/': [
        {
          collapsed: false,

          items: [
            {
              text: '八股文',
              collapsed: true,
              items: [
                {
                  text: 'Agent',
                  link: '/agent/bagu/01_agent'
                },
              ]
            },
          ]
        }
      ],

      '/java/': [
        {
          text: '引言',
          collapsed: false,
          items: [
          ]
        }
      ],

      '/llm/': [
        {
          collapsed: false,
          items: [
            {
              text: 'Minimind',
              collapsed: true,
              items: [
                {
                  text: '环境配置',
                  link: '/llm/minimind/01_环境配置'
                },
              ]
            },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '目录'
    },

    // 文档页脚
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 返回顶部
    returnToTopLabel: '返回顶部',

    // 侧边栏菜单标签
    sidebarMenuLabel: '菜单',

    // 暗黑模式切换
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})