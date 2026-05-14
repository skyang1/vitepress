import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'chapter01', link: '/chapter1/Agent' }
    ],

    sidebar: [
      {
        text: 'chapter1',
        collapsed: true,
        items: [
          { text: 'wenti2', link: '/chapter1/pro2' },
          { text: 'wenti3', link: '/chapter1/pro3' }
        ]
      },
      {
        text: 'chapter2',
        items: [
          { text: 'wenti2', link: '/chapter1/pro2' },
          { text: 'wenti3', link: '/chapter1/pro3' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
