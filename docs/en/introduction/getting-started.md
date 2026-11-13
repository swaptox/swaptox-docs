---
title: Getting started
description: Choose an integration path and create a first SwaptoX widget.
---

# Getting started

## 1. Choose an integration path

- **Embed the ready-made swap UI:** use [`swaptox-widget`](/sdk/swaptox-widget/).
- **Share wallet connection with the Widget:** use [`swaptox-widget` with `swaptox-connect`](/sdk/swaptox-widget/connect-integration).
- **Build a custom swap interface:** use the [Routes API](/api/) and submit the selected route through the [Router](/contracts/router). Add `swaptox-connect` if you need its wallet connection features.

## 2. Check the target network

Use the [supported chains endpoint](https://api-v2.swaptox.com/supported-chains) to get the current network list. Use a listed network name consistently in the API request and SDK configuration.

## 3. Install and create a widget

For a basic embedded swap interface, install the package:

```sh
pnpm add @swaptox/widget
```

Add a container to the page:

```html
<div id="swaptox-widget"></div>
```

Create the widget in browser code:

```ts
import { createWidget } from '@swaptox/widget'

const widget = createWidget({
  container: '#swaptox-widget',
  chain: 'base',
  lang: 'en',
  theme: 'light'
})
```

If you want Connect to handle wallet state and the Widget's transaction flow, install both packages and follow the [integration guide](/sdk/swaptox-widget/connect-integration).

## 4. Validate the swap flow

Before release, check that the application uses a supported network and that users can review the recipient, amount, minimum output, and transaction deadline. For a custom integration, follow the API guide to fetch route data and the Router guide to prepare the on-chain call.

## Continue

- [Widget installation and configuration](/sdk/swaptox-widget/)
- [Wallet connection with swaptox-connect](/sdk/swaptox-connect/)
- [API introduction](/api/introduction)
- [Router interface](/contracts/router)

