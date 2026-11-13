---
title: Pairing with swaptox-connect
description: Share wallet connection and transaction handling between the Widget and Connect SDKs.
---

# Pairing with swaptox-connect

`@swaptox/widget` can work with [`@swaptox/connect-ui`](../swaptox-connect/) to share the connected wallet and handle the widget's approval, Permit, and swap flow. Create the Connect instance first, then create the widget.

## Install both packages

```sh
pnpm add @swaptox/widget @swaptox/connect-ui
```

## Initialize Connect before the widget

Add a mount element to the page:

```html
<div id="swaptox-widget"></div>
```

Then initialize both SDKs in browser code:

```ts
import { createConnect } from '@swaptox/connect-ui'
import { createWidget } from '@swaptox/widget'

const connect = createConnect(
  {
    projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
    chains: ['base', 'rootstock'],
    currentChain: 'base',
    metadata: {
      name: 'Your App',
      description: 'Swap aggregator',
      logo: 'https://example.com/logo.png',
      url: location.origin
    },
    rpcMap: {}
  },
  {
    theme: 'light',
    lang: 'en'
  }
)

const widget = createWidget({
  container: '#swaptox-widget',
  chain: 'base',
  lang: 'en',
  theme: 'light'
})
```

Replace `YOUR_WALLETCONNECT_PROJECT_ID` and the example metadata with your app's values. Keep the widget network in the `chains` list passed to Connect.

When both SDKs are initialized in this order, the widget detects the Connect instance and synchronizes wallet connection, disconnection, and account changes. Connect also handles the widget's `approve`, `permit`, and `swap` requests. You do not need to register transaction handlers for these events or forward wallet state manually.

If your app restores an existing wallet session, call `connect.autoConnect()` after the widget is initialized. For Connect event-listener setup and transaction checks, see [swaptox-connect](../swaptox-connect/).

The complete widget integration example is in the [swaptox-widget repository](https://github.com/swaptox/swaptox-widget/blob/main/index.html).
