---
title: Events
description: Observe widget activity or handle wallet transactions when using the widget on its own.
---

# Events

Subscribe with `widget.on(eventName, callback)`. The callback receives the event data. Remove a listener with the same callback reference:

```ts
const onSwap = (event) => {
  console.log('Swap event:', event)
}

widget.on('swap', onSwap)
widget.off('swap', onSwap)
```

## Events

| Event | Description |
| --- | --- |
| `connect` | The user selects the widget's connect-wallet action. |
| `loading` | Route or quote loading starts or finishes. Use it to synchronize an external loading indicator. |
| `routes` | Route data has loaded. Handle this event when your app provides its own route selector, then pass the selected route to `setRoute(route)`. |
| `choose-route` | The user selects a route. Handle this event if your app assembles transaction data itself. |
| `approve` | The widget requests an ERC-20 approval transaction. |
| `permit` | The widget requests a Permit signature. |
| `swap` | The widget requests the swap transaction. |

`loading`, `routes`, and `choose-route` are only needed when your app uses the corresponding custom UI or transaction flow. If you pair the widget with [`swaptox-connect`](./connect-integration), the connector handles wallet state and the `approve`, `permit`, and `swap` flow for you.

## Handle transactions without swaptox-connect

When using the widget on its own, connect it to your app's wallet provider. For `approve` and `swap`, send the provided transaction data and call `success(txHash)` after the wallet returns a transaction hash. For `permit`, request the provided signature and call `success(signature)`. Call `fail()` when the wallet request fails so the widget can stop the pending flow.

In this example, `getProvider(chain)` represents your app's wallet-provider lookup:

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
    console.error('Approval failed:', error)
    fail()
  }
})

widget.on('permit', async ({ chain, data, success, fail }) => {
  try {
    const provider = getProvider(chain)
    const signature = await provider.request(data)
    success(signature)
  } catch (error) {
    console.error('Permit failed:', error)
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
    console.error('Swap failed:', error)
    fail()
  }
})
```

`off(eventName)` removes every listener registered for that event. `off()` removes all listeners registered through the generic `on/off` API. Call `widget.destroy()` when disposing of the instance.
