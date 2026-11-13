---
title: 最佳案例
description: 查看原生 HTML/JavaScript 和 React 应用中的 swaptox-connect 集成案例。
---

# 最佳案例

本页提供原生 HTML/JavaScript 和 React 两种接入方式。两种方式都应在应用启动时初始化一次连接器，先注册事件监听，再调用 `autoConnect()` 恢复会话；发起交易前调用 `checkConnect()` 校验账户和网络。

## 原生 HTML/JavaScript

以下示例包含连接按钮、连接状态监听和自动恢复会话：

```html
<button id="connect">连接钱包</button>

<script type="module">
  import { createConnect } from '@swaptox/connect-ui'

  const connect = createConnect(
    {
      projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
      chains: ['base', 'rootstock'],
      currentChain: 'base',
      metadata: {
        name: 'SwaptoX',
        description: 'Swap Aggregator & DEX',
        logo: 'https://cdn.swaptox.com/logo.png',
        url: location.origin
      },
      rpcMap: {}
    },
    {
      theme: 'light',
      lang: 'zh-Hans'
    }
  )

  connect.on('connect', (event) => {
    const account = event.accounts?.[0]
    console.log('钱包图标：', event.info?.icon)
    console.log('已连接账户：', account)
  })

  connect.on('disconnect', (event) => {
    console.log('已断开连接：', event)
  })

  connect.on('accountsChanged', (accounts) => {
    console.log('当前账户：', accounts?.[0])
  })

  // 先注册事件，再恢复上次有效的钱包连接
  await connect.autoConnect()

  document.querySelector('#connect')?.addEventListener('click', () => {
    connect.open()
  })
</script>
```

### 发送交易

发送交易前调用 `checkConnect(currentChain)`，使用返回的 provider 提交交易：

```ts
try {
  const { provider } = await connect.checkConnect(currentChain)
  const txHash = await provider.request({
    method: 'eth_sendTransaction',
    params: [{
      from: account,
      to: contractAddress,
      data: calldata,
      value: valueInHex
    }]
  })
  console.log('交易哈希：', txHash)
} catch (error) {
  console.error('交易失败：', error)
}
```

## React

在 React 应用中，将连接器放在应用根部的 Provider 组件里初始化，再从全局布局挂载。SwaptoX DApp UI 中的实现可参考：

- [SwaptoXConnectProvider](https://github.com/swaptox/swaptox-dapp-ui/blob/main/src/components/stx-providers/swaptox-connect-provider.tsx)
- [钱包组件](https://github.com/swaptox/swaptox-dapp-ui/blob/main/src/components/stx-header/com/com-wallet.tsx)

在 Next.js 的全局布局中加载 Provider：

```tsx
import { Suspense } from 'react'
import SwaptoxConnectProvider from '@/components/stx-providers/swaptox-connect-provider'

export default function Layout({ children, currLocale, chain, theme }) {
  return (
    <html lang={currLocale}>
      <body>
        <Suspense fallback={null}>
          <SwaptoxConnectProvider
            chain={chain}
            theme={theme}
            lang={currLocale}
          />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
```

连接器需要在浏览器端运行。在服务端渲染应用中，将 Provider 标记为客户端组件，并在全局布局中挂载一次。
