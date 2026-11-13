---
title: Initialization
description: Initialize the connector with createConnect and access its global instance.
---

# Initialization

Import `createConnect` from `@swaptox/connect-ui`. The first argument configures WalletConnect and networks; the second configures the connection UI theme and language.

```ts
import { createConnect } from '@swaptox/connect-ui'

const connect = createConnect(
  {
    projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
    chains: ['base', 'rootstock'],
    currentChain: 'base',
    metadata: {
      name: 'Your App',
      description: 'Your App description',
      url: 'https://example.com',
      logo: 'https://example.com/logo.png'
    },
    rpcMap: {}
  },
  {
    theme: 'light',
    lang: 'en'
  }
)
```

`projectId` is your WalletConnect project ID. Create one in the [WalletConnect Dashboard](https://dashboard.walletconnect.com/).

After initialization, the SDK exposes the same instance on the browser global object as `window.$swaptoxConnect`. Use the local `connect` variable or access the global instance:

```ts
connect.open()
window.$swaptoxConnect.open()
```

