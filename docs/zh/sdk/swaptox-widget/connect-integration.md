---
title: 搭配 swaptox-connect 使用
description: 让 Widget 与 Connect SDK 共用钱包连接并处理交易流程。
---

# 搭配 swaptox-connect 使用

`@swaptox/widget` 可以与 [`@swaptox/connect-ui`](../swaptox-connect/) 搭配，使用已连接的钱包，并处理 Widget 的授权、Permit 和 Swap 流程。请先创建 Connect 实例，再创建 Widget。

## 安装两个 SDK

```sh
pnpm add @swaptox/widget @swaptox/connect-ui
```

## 先初始化 Connect，再初始化 Widget

先在页面中添加挂载元素：

```html
<div id="swaptox-widget"></div>
```

然后在浏览器代码中初始化两个 SDK：

```ts
import { createConnect } from '@swaptox/connect-ui'
import { createWidget } from '@swaptox/widget'

const connect = createConnect(
  {
    projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
    chains: ['base', 'rootstock'],
    currentChain: 'base',
    metadata: {
      name: '我的应用',
      description: 'Swap 聚合器',
      logo: 'https://example.com/logo.png',
      url: location.origin
    },
    rpcMap: {}
  },
  {
    theme: 'light',
    lang: 'zh-Hans'
  }
)

const widget = createWidget({
  container: '#swaptox-widget',
  chain: 'base',
  lang: 'zh-Hans',
  theme: 'light'
})
```

请将 `YOUR_WALLETCONNECT_PROJECT_ID` 和示例 metadata 替换为应用自己的信息。Widget 使用的网络应包含在 Connect 的 `chains` 配置中。

按此顺序初始化后，Widget 会识别 Connect 实例，并同步钱包连接、断开连接和账户变化。Connect 也会处理 Widget 发起的 `approve`、`permit` 和 `swap` 请求。无需为这些事件另行注册交易处理器，也无需手动转发钱包状态。

如果应用需要恢复已有钱包会话，可在 Widget 初始化后调用 `connect.autoConnect()`。Connect 事件监听和交易校验方式见 [swaptox-connect 文档](../swaptox-connect/)。

完整的 Widget 集成示例见 [swaptox-widget 仓库](https://github.com/swaptox/swaptox-widget/blob/main/index.html)。
