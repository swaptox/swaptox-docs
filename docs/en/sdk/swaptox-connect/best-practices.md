---
title: Best Practices and Examples
description: Integrate swaptox-connect in a native HTML/JavaScript page or a React app.
---

# Best Practices and Examples

This page shows native HTML/JavaScript and React integrations. In either setup, initialize the connector once near the app root, register event listeners before calling `autoConnect()`, and call `checkConnect()` before sending a transaction.

## Native HTML/JavaScript

This example includes a connect button, connection event listeners, and session restoration:

```html
<button id="connect">Connect Wallet</button>

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
      lang: 'en'
    }
  )

  connect.on('connect', (event) => {
    const account = event.accounts?.[0]
    console.log('Wallet icon:', event.info?.icon)
    console.log('Connected account:', account)
  })

  connect.on('disconnect', (event) => {
    console.log('Disconnected:', event)
  })

  connect.on('accountsChanged', (accounts) => {
    console.log('Current account:', accounts?.[0])
  })

  // Register listeners before restoring the previous valid connection.
  await connect.autoConnect()

  document.querySelector('#connect')?.addEventListener('click', () => {
    connect.open()
  })
</script>
```

### Send a transaction

Call `checkConnect(currentChain)` before sending a transaction, then submit it through the returned provider:

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

## React

In a React app, initialize the connector in a Provider component near the app root and mount it from the global layout. The SwaptoX DApp UI implementation is available here:

- [SwaptoxConnectProvider](https://github.com/swaptox/swaptox-dapp-ui/blob/main/src/components/stx-providers/swaptox-connect-provider.tsx)
- [Wallet component](https://github.com/swaptox/swaptox-dapp-ui/blob/main/src/components/stx-header/com/com-wallet.tsx)

Mount the Provider from a Next.js global layout:

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

The connector runs in the browser. In server-rendered apps, mark the Provider as a client component and mount it once in the global layout.
