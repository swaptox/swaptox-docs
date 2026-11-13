---
title: Wallet Connection
description: Open the wallet dialog, restore a session, and validate the account and network before a transaction.
---

# Wallet Connection

Call `connect.open()` to open the wallet dialog and `connect.close()` to close it:

```html
<button id="connect">Connect Wallet</button>
```

```ts
document.querySelector('#connect')?.addEventListener('click', () => {
  connect.open()
})
```

Register event listeners before calling `connect.autoConnect()`. If the previous session is still valid, the SDK restores it and emits a `connect` event.

```ts
connect.on('connect', (event) => {
  const account = event.accounts?.[0]
  const walletIcon = event.info?.icon
  console.log('Account:', account)
  console.log('Wallet icon:', walletIcon)
})

connect.on('disconnect', (event) => {
  console.log('Disconnected:', event)
})

await connect.autoConnect()
```

## Validate before a transaction

Call `checkConnect` before submitting a transaction. It checks the connected account and switches the wallet to the target network when necessary. The target can be the configured `currentChain`, a network name, a network ID, or a viem `Chain` object.

```ts
const { provider } = await connect.checkConnect(currentChain)
// Or specify a target network
const { provider } = await connect.checkConnect('base')
```

After validation, use the returned provider to send the transaction:

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
  console.log('Transaction hash:', txHash)
} catch (error) {
  console.error('Transaction failed:', error)
}
```

If account validation or network switching fails, the SDK disconnects, emits a `disconnect` event, and throws an error. Catch the error in your app and show the user an appropriate next step.


