---
title: Configuration
description: Configure WalletConnect, supported networks, themes, languages, and extension packs.
---

# Configuration

`createConnect(coreConfig, uiConfig)` takes two objects: core connector settings and connection UI settings.

## Core configuration

The first argument configures the WalletConnect project, networks, and app metadata.

| Field | Description |
| --- | --- |
| `projectId` | WalletConnect project ID. Create one in the [WalletConnect Dashboard](https://dashboard.walletconnect.com/). |
| `chains` | Array of supported networks. Each entry can be a network ID, network name, or viem `Chain` object. |
| `currentChain` | Default network, passed as an ID, name, or `Chain` object. |
| `metadata` | DApp name, description, URL, and icon. |
| `rpcMap` | Custom RPC endpoints in WalletConnect's RPC map format. |

Built-in networks: `mainnet`, `bsc`, `base`, `arbitrum`, `optimism`, `polygon`, and `rootstock`.

```ts
const coreConfig = {
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: ['base', 'rootstock'],
  currentChain: 'base',
  metadata: {
    name: 'Your App',
    description: 'Your App description',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png'
  },
  rpcMap: {
    1: 'https://mainnet.rpc.example',
    137: 'https://polygon.rpc.example'
  }
}
```

### Add networks

Pass viem `Chain` objects together with network names:

```ts
import { opBNB, scroll } from 'viem/chains'

const coreConfig = {
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: [opBNB, 'rootstock', scroll],
  currentChain: scroll,
  metadata: {
    name: 'Your App',
    description: 'Your App description',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png'
  },
  rpcMap: {}
}
```

## UI configuration

The second argument controls the connection UI theme and language.

| Field | Description |
| --- | --- |
| `theme` | `light` or `dark`; defaults to `light`. |
| `lang` | UI language; defaults to `en`. Supported values: `en`, `zh-Hans`, `zh-Hant`, `ja`, `ko`, `th`, `pt-BR`, `id`, and `vi`. |
| `themePack` | Custom theme pack. |
| `languagePack` | Custom language pack. |

## Custom themes

A theme pack can name a built-in fallback theme. Variables missing from the custom pack inherit values from that fallback.

```ts
const themePack = {
  'blue-light': {
    fallback: 'light',
    data: {
      '--stxconnect-theme-color': '#ff0000'
    }
  },
  'blue-dark': {
    fallback: 'dark',
    data: {
      '--stxconnect-theme-color': '#ff0000'
    }
  }
}

const connect = createConnect(coreConfig, {
  theme: 'blue-light',
  lang: 'en',
  themePack
})
```

Switch themes after initialization with `connect.setTheme('blue-dark')`. See [themes.ts](https://github.com/swaptox/swaptox-connect/blob/main/packages/ui/src/data/themes.ts) for theme definitions.

## Custom languages

Set `fallback` to a built-in language. Text keys missing from the custom pack use the corresponding fallback strings.

```ts
const languagePack = {
  'mars-speak': {
    fallback: 'en',
    data: {
      'open-app': '👽👉🛜',
      installed: '👉💰️👽',
      qr: '😄️👽'
    }
  }
}

const connect = createConnect(coreConfig, {
  theme: 'light',
  lang: 'mars-speak',
  languagePack
})
```

Switch languages after initialization with `connect.setLang('mars-speak')`. Built-in strings and theme definitions are in [locales.ts](https://github.com/swaptox/swaptox-connect/blob/main/packages/ui/src/data/locales.ts).

