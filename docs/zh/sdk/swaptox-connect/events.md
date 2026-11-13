---
title: 事件
description: 监听钱包连接、断开、账户和网络变化。
---

# 事件

在初始化后注册事件监听器。调用 `autoConnect()` 前先监听 `connect`，以接收恢复会话时触发的事件。

| 事件 | 说明 |
| --- | --- |
| `connect` | 钱包连接成功。事件对象包含 `accounts`，钱包信息可从 `info.icon` 获取。 |
| `disconnect` | 钱包连接断开。 |
| `accountsChanged` | 当前钱包账户发生变化。事件参数为账户列表。 |
| `chainChanged` | 当前钱包网络发生变化。交易前使用 `checkConnect(targetChain)` 校验目标网络。 |
| `display_uri` | WalletConnect 提供连接 URI。仅在自定义二维码或连接链接时需要监听。 |

```ts
const onConnect = (event) => {
  console.log('已连接账户：', event.accounts?.[0])
  console.log('钱包图标：', event.info?.icon)
}

const onAccountsChanged = (accounts) => {
  console.log('当前账户：', accounts?.[0])
}

connect.on('connect', onConnect)
connect.on('accountsChanged', onAccountsChanged)
connect.on('disconnect', (event) => console.log('已断开：', event))

await connect.autoConnect()
```

在组件卸载或不再需要监听时，使用相同的回调引用移除监听器：

```ts
connect.off('connect', onConnect)
connect.off('accountsChanged', onAccountsChanged)
```

