---
title: 初始化
description: 使用 createConnect 初始化连接器并访问全局实例。
---

# 初始化

从 `@swaptox/connect-ui` 导入 `createConnect`。第一个参数配置 WalletConnect 与网络，第二个参数配置连接界面的主题和语言。

```ts
import { createConnect } from '@swaptox/connect-ui'

const connect = createConnect(
  {
    projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
    chains: ['base', 'rootstock'],
    currentChain: 'base',
    metadata: {
      name: '我的应用',
      description: '应用简介',
      url: 'https://example.com',
      logo: 'https://example.com/logo.png'
    },
    rpcMap: {}
  },
  {
    theme: 'light',
    lang: 'zh-Hans'
  }
)
```

`projectId` 是 WalletConnect 项目 ID，可在 [WalletConnect Dashboard](https://dashboard.walletconnect.com/) 创建。

初始化后，SDK 会将同一个实例放到浏览器全局对象 `window.$swaptoxConnect` 上。后续代码可以使用局部变量 `connect`，也可以通过全局变量访问：

```ts
connect.open()
window.$swaptoxConnect.open()
```

