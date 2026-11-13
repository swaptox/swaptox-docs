---
title: Events
description: Listen for wallet connection, disconnection, account, and network changes.
---

# Events

Register event listeners after initialization. Listen for `connect` before calling `autoConnect()` so the app receives the event when a session is restored.

| Event | Description |
| --- | --- |
| `connect` | Wallet connected. The event includes `accounts`; wallet information such as the icon is available at `info.icon`. |
| `disconnect` | Wallet connection ended. |
| `accountsChanged` | The active wallet account changed. The event argument is the account list. |
| `chainChanged` | The active wallet network changed. Call `checkConnect(targetChain)` before a transaction to validate the target network. |
| `display_uri` | WalletConnect connection URI. Listen for this only when rendering a custom QR code or connection link. |

```ts
const onConnect = (event) => {
  console.log('Connected account:', event.accounts?.[0])
  console.log('Wallet icon:', event.info?.icon)
}

const onAccountsChanged = (accounts) => {
  console.log('Current account:', accounts?.[0])
}

connect.on('connect', onConnect)
connect.on('accountsChanged', onAccountsChanged)
connect.on('disconnect', (event) => console.log('Disconnected:', event))

await connect.autoConnect()
```

When a component unmounts or the listeners are no longer needed, remove them with the same callback references:

```ts
connect.off('connect', onConnect)
connect.off('accountsChanged', onAccountsChanged)
```

