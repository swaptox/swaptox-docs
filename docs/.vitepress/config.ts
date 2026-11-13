import { defineConfig } from 'vitepress'

const zhNav = [
  { text: '介绍', link: '/zh/' },
  { text: 'SDK', link: '/zh/sdk/' },
  { text: 'API', link: '/zh/api/' },
  { text: '合约', link: '/zh/contracts/' },
  { text: '常见问题', link: '/zh/faq/' }
]

const enNav = [
  { text: 'Introduction', link: '/' },
  { text: 'SDK', link: '/sdk/' },
  { text: 'API', link: '/api/' },
  { text: 'Contracts', link: '/contracts/' },
  { text: 'FAQ', link: '/faq/' }
]

const zhSidebar = {
  '/zh/introduction/': [
    { text: '介绍', items: [
      { text: '产品概览', link: '/zh/introduction/overview' },
      { text: '快速开始', link: '/zh/introduction/getting-started' }
    ] }
  ],
  '/zh/sdk/': [
    { text: 'SDK', items: [{ text: 'SDK 总览', link: '/zh/sdk/' }] },
    { text: 'swaptox-connect', items: [
      { text: '简介', link: '/zh/sdk/swaptox-connect/' },
      { text: '安装', link: '/zh/sdk/swaptox-connect/installation' },
      { text: '初始化', link: '/zh/sdk/swaptox-connect/initialization' },
      { text: '配置', link: '/zh/sdk/swaptox-connect/configuration' },
      { text: '连接钱包', link: '/zh/sdk/swaptox-connect/wallet-connection' },
      { text: '最佳案例', link: '/zh/sdk/swaptox-connect/best-practices' },
      { text: '事件', link: '/zh/sdk/swaptox-connect/events' },
      { text: 'API 参考', link: '/zh/sdk/swaptox-connect/api-reference' }
    ] },
    { text: 'swaptox-widget', items: [
      { text: '简介', link: '/zh/sdk/swaptox-widget/' },
      { text: '安装', link: '/zh/sdk/swaptox-widget/installation' },
      { text: '初始化', link: '/zh/sdk/swaptox-widget/initialization' },
      { text: '配置', link: '/zh/sdk/swaptox-widget/configuration' },
      { text: '方法', link: '/zh/sdk/swaptox-widget/methods' },
      { text: '事件', link: '/zh/sdk/swaptox-widget/events' },
      { text: '搭配 swaptox-connect 使用', link: '/zh/sdk/swaptox-widget/connect-integration' }
    ] }
  ],
  '/zh/api/': [
    { text: 'API', items: [
      { text: 'API 总览', link: '/zh/api/' },
      { text: '简介', link: '/zh/api/introduction' },
      { text: '速率限制', link: '/zh/api/rate-limits' },
      { text: '错误码', link: '/zh/api/errors' },
      { text: '代币', link: '/zh/api/tokens' },
      { text: '价格', link: '/zh/api/prices' },
      { text: '报价', link: '/zh/api/quotes' },
      { text: '兑换', link: '/zh/api/swaps' }
    ] }
  ],
  '/zh/contracts/': [
    { text: '合约', items: [
      { text: '合约总览', link: '/zh/contracts/' },
      { text: '架构', link: '/zh/contracts/architecture' },
      { text: '部署地址', link: '/zh/contracts/deployments' },
      { text: 'Router', link: '/zh/contracts/router' },
      { text: '费用机制', link: '/zh/contracts/fees' },
      { text: 'Timelock 治理', link: '/zh/contracts/timelock' },
      { text: '安全机制', link: '/zh/contracts/security' },
      { text: '审计状态', link: '/zh/contracts/audit' }
    ] }
  ],
  '/zh/faq/': [{ text: '常见问题', items: [{ text: '常见问题', link: '/zh/faq/' }] }]
}

const enSidebar = {
  '/introduction/': [
    { text: 'Introduction', items: [
      { text: 'Overview', link: '/introduction/overview' },
      { text: 'Getting started', link: '/introduction/getting-started' }
    ] }
  ],
  '/sdk/': [
    { text: 'SDK', items: [{ text: 'SDK overview', link: '/sdk/' }] },
    { text: 'swaptox-connect', items: [
      { text: 'Overview', link: '/sdk/swaptox-connect/' },
      { text: 'Installation', link: '/sdk/swaptox-connect/installation' },
      { text: 'Initialization', link: '/sdk/swaptox-connect/initialization' },
      { text: 'Configuration', link: '/sdk/swaptox-connect/configuration' },
      { text: 'Wallet connection', link: '/sdk/swaptox-connect/wallet-connection' },
      { text: 'Best practices', link: '/sdk/swaptox-connect/best-practices' },
      { text: 'Events', link: '/sdk/swaptox-connect/events' },
      { text: 'API reference', link: '/sdk/swaptox-connect/api-reference' }
    ] },
    { text: 'swaptox-widget', items: [
      { text: 'Overview', link: '/sdk/swaptox-widget/' },
      { text: 'Installation', link: '/sdk/swaptox-widget/installation' },
      { text: 'Initialization', link: '/sdk/swaptox-widget/initialization' },
      { text: 'Configuration', link: '/sdk/swaptox-widget/configuration' },
      { text: 'Methods', link: '/sdk/swaptox-widget/methods' },
      { text: 'Events', link: '/sdk/swaptox-widget/events' },
      { text: 'Pairing with swaptox-connect', link: '/sdk/swaptox-widget/connect-integration' }
    ] }
  ],
  '/api/': [
    { text: 'API', items: [
      { text: 'API overview', link: '/api/' },
      { text: 'Introduction', link: '/api/introduction' },
      { text: 'Rate limits', link: '/api/rate-limits' },
      { text: 'Errors', link: '/api/errors' },
      { text: 'Tokens', link: '/api/tokens' },
      { text: 'Prices', link: '/api/prices' },
      { text: 'Quotes', link: '/api/quotes' },
      { text: 'Swaps', link: '/api/swaps' }
    ] }
  ],
  '/contracts/': [
    { text: 'Contracts', items: [
      { text: 'Overview', link: '/contracts/' },
      { text: 'Architecture', link: '/contracts/architecture' },
      { text: 'Deployments', link: '/contracts/deployments' },
      { text: 'Router', link: '/contracts/router' },
      { text: 'Fees', link: '/contracts/fees' },
      { text: 'Timelock governance', link: '/contracts/timelock' },
      { text: 'Security', link: '/contracts/security' },
      { text: 'Audit status', link: '/contracts/audit' }
    ] }
  ],
  '/faq/': [{ text: 'FAQ', items: [{ text: 'Frequently asked questions', link: '/faq/' }] }]
}

export default defineConfig({
  title: 'SwaptoX',
  description: 'SwaptoX developer documentation',
  rewrites: {
    'en/:rest*': ':rest*'
  },
  themeConfig: {
    search: { provider: 'local' }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'SwaptoX Docs',
      description: 'SwaptoX product, SDK, API, and contract documentation',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous page', next: 'Next page' }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'SwaptoX 文档',
      description: 'SwaptoX 产品、SDK、API 与合约开发文档',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        outline: { label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '文档目录',
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    }
  }
})
