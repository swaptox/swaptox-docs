---
title: Installation
description: Install swaptox-connect and wallet dependencies with pnpm, or import it from a CDN.
---

# Installation

## Install with pnpm

```sh
pnpm add @swaptox/connect-ui @swaptox/connect-core viem @walletconnect/ethereum-provider @coinbase/wallet-sdk qr-code-styling
```

Import `createConnect` from `@swaptox/connect-ui`:

```ts
import { createConnect } from '@swaptox/connect-ui'
```

## Use a CDN

Import the UI package from esm.sh:

```js
import { createConnect } from 'https://esm.sh/@swaptox/connect-ui'
```

## Integration examples

- pnpm app: [app.swaptox.com](https://app.swaptox.com/)
- CDN integration: [m.swaptox.com](https://m.swaptox.com/)

