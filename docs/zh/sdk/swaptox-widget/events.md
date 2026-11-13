---
title: 事件
description: 监听 Widget 状态；单独使用时，也可以自行处理钱包交易。
---

# 事件

使用 `widget.on(eventName, callback)` 订阅事件，回调参数为事件数据。使用同一个回调引用移除监听：

```ts
const onSwap = (event) => {
  console.log('Swap 事件：', event)
}

widget.on('swap', onSwap)
widget.off('swap', onSwap)
```

## 事件列表

| 事件 | 说明 |
| --- | --- |
| `connect` | 用户点击 Widget 中的连接钱包操作。 |
| `loading` | 路由或报价加载开始、结束，可用于同步外部加载状态。 |
| `routes` | 路由数据加载完成。自定义路由选择界面时监听，并通过 `setRoute(route)` 设置选中的路由。 |
| `choose-route` | 用户选择路由。自行组装交易数据时可监听此事件。 |
| `approve` | Widget 请求发送 ERC-20 授权交易。 |
| `permit` | Widget 请求 Permit 签名。 |
| `swap` | Widget 请求发送兑换交易。 |

只有在应用使用对应的自定义界面或交易流程时，才需要监听 `loading`、`routes` 和 `choose-route`。如果 Widget 搭配 [`swaptox-connect`](./connect-integration) 使用，连接器会同步钱包状态并处理 `approve`、`permit` 和 `swap` 流程。

## 不搭配 swaptox-connect 时处理交易

单独使用 Widget 时，需要接入应用自己的钱包 Provider。处理 `approve` 和 `swap` 时，将事件提供的交易数据发送给钱包，并在钱包返回交易哈希后调用 `success(txHash)`；处理 `permit` 时，将事件提供的签名请求发给钱包，并调用 `success(signature)`。钱包请求失败时调用 `fail()`，让 Widget 结束当前等待状态。

以下示例中的 `getProvider(chain)` 代表应用自己的钱包 Provider 查询逻辑：

```ts
widget.on('approve', async ({ chain, calldata, data, success, fail }) => {
  try {
    const provider = getProvider(chain)
    const txHash = await provider.request({
      method: 'eth_sendTransaction',
      params: [{
        from: data.account,
        to: data.token,
        data: calldata,
        value: '0x0'
      }]
    })
    success(txHash)
  } catch (error) {
    console.error('授权失败：', error)
    fail()
  }
})

widget.on('permit', async ({ chain, data, success, fail }) => {
  try {
    const provider = getProvider(chain)
    const signature = await provider.request(data)
    success(signature)
  } catch (error) {
    console.error('Permit 签名失败：', error)
    fail()
  }
})

widget.on('swap', async ({ chain, calldata, data, success, fail }) => {
  try {
    const provider = getProvider(chain)
    const txHash = await provider.request({
      method: 'eth_sendTransaction',
      params: [{
        from: data.account,
        to: data.routerAddress,
        data: calldata,
        value: data.value
      }]
    })
    success(txHash)
  } catch (error) {
    console.error('兑换失败：', error)
    fail()
  }
})
```

`off(eventName)` 会移除该事件的全部监听器；`off()` 会移除通过通用 `on/off` 接口注册的全部监听器。销毁实例时调用 `widget.destroy()`。
