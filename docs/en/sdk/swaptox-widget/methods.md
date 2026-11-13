---
title: Methods
description: Update the widget after initialization and release it when it is no longer needed.
---

# Methods

Use the widget instance returned by `createWidget` to update the interface after initialization.

| Method | Description |
| --- | --- |
| `setUserAddress(address \| '')` | Set or clear the wallet address. |
| `setChain(chain)` | Switch the active network. |
| `getChain()` | Return the active network. |
| `getChains()` | Return the supported networks. |
| `openConfirmSwapModal()` | Open the swap confirmation dialog. Use this when the `swapButton` option is disabled. |
| `setLang(lang)` | Switch the interface language. Returns the language selected by the widget. |
| `getLangPack()` | Get the language pack. |
| `setTheme(theme)` | Switch the interface theme. Returns the theme selected by the widget. |
| `getThemePack()` | Get the theme pack. |
| `setRoute(route)` | Select a route object from the widget's route data. |
| `setLimitOptionalToken(config)` | Update the optional-token settings. |
| `setReferral(address)` | Set the referral address. |
| `setDisabledMiniPriceCard(disabled)` | Show or hide the mini price card. |
| `setDisabledHistoryIcon(disabled)` | Show or hide the transaction history icon. |
| `setDisabledCustomRecipient(disabled)` | Enable or disable custom recipient addresses. |
| `setDisabledChooseRoute(disabled)` | Enable or disable route selection. |
| `setSlippagLayout(position)` | Set the slippage control position to `top` or `bottom`. The method uses the spelling `Slippag`. |
| `setSwapButton(enabled)` | Show or hide the Swap button. |
| `destroy()` | Remove the widget and its instance event listeners. |

For example, change the network and language after initialization:

```ts
widget.setChain('rootstock')
widget.setLang('zh-Hans')
```

If the page or component is being removed, call `destroy()` as part of its cleanup:

```ts
widget.destroy()
```
