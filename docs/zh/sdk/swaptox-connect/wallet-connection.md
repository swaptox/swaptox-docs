---
title: 连接钱包
description: 打开钱包连接界面、恢复会话并在交易前校验账户与网络。
---

# 连接钱包

使用 `connect.open()` 打开钱包连接界面，使用 `connect.close()` 关闭界面：

```html
<button id="connect">连接钱包</button>
```

```ts
document.querySelector('#connect')?.addEventListener('click', () => {
  connect.open()
})
```

注册事件监听器后调用 `connect.autoConnect()`。如果上次连接仍然有效，SDK 会恢复连接并触发 `connect` 事件。

```ts
connect.on('connect', (event) => {
  const account = event.accounts?.[0]
  const walletIcon = event.info?.icon
  console.log('账户：', account)
  console.log('钱包图标：', walletIcon)
})

connect.on('disconnect', (event) => {
  console.log('已断开连接：', event)
})

await connect.autoConnect()
```

## 交易前校验

提交交易前调用 `checkConnect`，检查连接账户并确保钱包切换到目标网络。目标网络可使用初始化配置中的 `currentChain`，也可以传入网络名称、网络 ID 或 viem `Chain` 对象。

```ts
const { provider } = await connect.checkConnect(currentChain)
// 或指定目标网络
const { provider } = await connect.checkConnect('base')
```

校验成功后，使用返回的 provider 发送交易：

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

如果账户校验或切链失败，SDK 会断开连接、触发 `disconnect` 事件并抛出错误。请在调用方捕获错误并向用户展示处理结果。


