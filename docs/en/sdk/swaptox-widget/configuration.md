---
title: Configuration
description: Set the widget's network, appearance, language, token choices, and available controls.
---

# Configuration

Pass options to `createWidget` when creating an instance. Some settings can also be changed later with the methods described in [Methods](./methods).

## Display and network options

| Option | Description |
| --- | --- |
| `container` | Mount target as a CSS selector or `HTMLElement`. Omit it to mount `widget.$el` yourself. |
| `chain` | Initial network. Built-in networks are `base` and `rootstock`; the widget uses the stored network or `base` when omitted. |
| `userAddress` | Wallet address to use initially. |
| `referral` | Referral address associated with the widget session. |
| `theme` | `light`, `dark`, or `stxui`; defaults to `light`. |
| `lang` | Initial language. Built-in values: `en`, `zh-Hans`, `zh-Hant`, `ja`, `ko`, `th`, `pt-BR`, `id`, and `vi`. The default follows the browser language and falls back to `en`. |
| `langOptionsList` | Custom language selector options. Each item uses `{ id, name, symbol }`. |
| `isUpdateHtmlLang` | Also update the page's `<html lang>` attribute when the widget language changes; defaults to `false`. |
| `disabledMiniPriceCard` | Hide the mini price card; defaults to `false`. |
| `disabledHistoryIcon` | Hide the transaction history icon; defaults to `false`. |
| `disabledCustomRecipient` | Disable custom recipient addresses; defaults to `false`. |
| `disabledChooseRoute` | Disable route selection and use the route selected by the system; defaults to `false`. |
| `smallScreenCardFull` | On small screens, remove the card's rounded corners so it fills the available area; defaults to `false`. |
| `swapButton` | Show the Swap button; defaults to `true`. When hidden, open the confirmation dialog with `openConfirmSwapModal()`. |
| `slippagLayout` | Place the slippage control at `top` or `bottom`; defaults to `top`. Keep the spelling `slippagLayout` when using this option. |

## Limit token choices

Use `limitOptionalToken` to set default tokens and restrict the selectable-token list per network:

```ts
const widget = createWidget({
  container: '#swaptox-widget',
  chain: 'base',
  limitOptionalToken: {
    base: {
      defaultTokenIn: '0x833589fcd6edb6e08f4c7c32d4f71b54da02913',
      disabledTokenIn: false,
      defaultTokenOut: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      disabledTokenOut: true,
      limitOptionalList: [
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
        '0x833589fcd6edb6e08f4c7c32d4f71b54da02913'
      ]
    }
  }
})
```

Each key under `limitOptionalToken` is a network name. `disabledTokenIn` and `disabledTokenOut` control whether users can change the corresponding token.

## Custom languages

Add a language pack with a fallback locale. Any missing translations use the fallback language:

```ts
const languagePack = {
  'mars-speak': {
    fallback: 'en',
    data: {
      swap: 'Trade',
      'connect-wallet': 'Connect wallet'
    }
  }
}

const widget = createWidget({
  container: '#swaptox-widget',
  lang: 'mars-speak',
  languagePack
})
```

You can select the custom language later with `widget.setLang('mars-speak')`. The widget's built-in language data is in [locales.js](https://github.com/swaptox/swaptox-widget/blob/main/src/data/locale/locales.js).

## Custom themes

Define a theme with a built-in fallback. Values in `themeVariables` override values from the selected theme and theme pack:

```ts
const themePack = {
  'blue-light': {
    fallback: 'light',
    data: {
      '--stxui-theme-color': '#007aff',
      '--stxui-theme-focus-color': '#007aff80',
      '--stxui-theme-icon-color': '#007aff'
    }
  }
}

const widget = createWidget({
  container: '#swaptox-widget',
  theme: 'blue-light',
  themePack,
  themeVariables: {
    '--stxui-font-family': "'Inter', sans-serif"
  }
})
```

You can select a custom theme later with `widget.setTheme('blue-light')`. Built-in theme definitions are in [themes.js](https://github.com/swaptox/swaptox-widget/blob/main/src/data/theme/themes.js).
