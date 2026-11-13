---
title: 配置
description: 配置 WalletConnect、支持网络、主题、语言及扩展包。
---

# 配置

`createConnect(coreConfig, uiConfig)` 接收两个配置对象：连接器核心配置和连接界面配置。

## 核心配置

第一个参数配置 WalletConnect 项目、网络与应用元数据。

| 字段 | 说明 |
| --- | --- |
| `projectId` | WalletConnect 项目 ID，在 [WalletConnect Dashboard](https://dashboard.walletconnect.com/) 创建。 |
| `chains` | 支持的网络数组，元素可为网络 ID、网络名称或 viem `Chain` 对象。 |
| `currentChain` | 当前默认网络，可传网络 ID、名称或 `Chain` 对象。 |
| `metadata` | DApp 名称、简介、网址和图标等信息。 |
| `rpcMap` | 按 WalletConnect 格式配置自定义 RPC 地址。 |

SDK 内置网络：`mainnet`、`bsc`、`base`、`arbitrum`、`optimism`、`polygon`、`rootstock`。

```ts
const coreConfig = {
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: ['base', 'rootstock'],
  currentChain: 'base',
  metadata: {
    name: '我的应用',
    description: '应用简介',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png'
  },
  rpcMap: {
    1: 'https://mainnet.rpc.example',
    137: 'https://polygon.rpc.example'
  }
}
```

### 添加其他网络

可将 viem 的 `Chain` 对象与网络名称一起传入：

```ts
import { opBNB, scroll } from 'viem/chains'

const coreConfig = {
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: [opBNB, 'rootstock', scroll],
  currentChain: scroll,
  metadata: {
    name: '我的应用',
    description: '应用简介',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png'
  },
  rpcMap: {}
}
```

## 界面配置

第二个参数控制连接界面的主题与语言。

| 字段 | 说明 |
| --- | --- |
| `theme` | `light` 或 `dark`，默认值为 `light`。 |
| `lang` | 界面语言，默认值为 `en`。支持 `en`、`zh-Hans`、`zh-Hant`、`ja`、`ko`、`th`、`pt-BR`、`id`、`vi`。 |
| `themePack` | 自定义主题包。 |
| `languagePack` | 自定义语言包。 |

## 自定义主题

主题包可指定内置主题作为回退主题。主题包缺少的变量会从回退主题继承。

```ts
const themePack = {
  'blue-light': {
    fallback: 'light',
    data: {
      '--stxconnect-theme-color': '#ff0000'
    }
  },
  'blue-dark': {
    fallback: 'dark',
    data: {
      '--stxconnect-theme-color': '#ff0000'
    }
  }
}

const connect = createConnect(coreConfig, {
  theme: 'blue-light',
  lang: 'zh-Hans',
  themePack
})
```

初始化后可通过 `connect.setTheme('blue-dark')` 切换主题。主题定义见 [themes.ts](https://github.com/swaptox/swaptox-connect/blob/main/packages/ui/src/data/themes.ts)。

## 自定义语言

语言包通过 `fallback` 指定回退语言；未提供的文案使用回退语言中的对应文案。

```ts
const languagePack = {
  'mars-speak': {
    fallback: 'en',
    data: {
      'open-app': '👽👉🛜',
      installed: '👉💰️👽',
      qr: '😄️👽'
    }
  }
}

const connect = createConnect(coreConfig, {
  theme: 'light',
  lang: 'mars-speak',
  languagePack
})
```

初始化后可通过 `connect.setLang('mars-speak')` 切换语言。内置语言文案与主题定义见 [locales.ts](https://github.com/swaptox/swaptox-connect/blob/main/packages/ui/src/data/locales.ts)。

