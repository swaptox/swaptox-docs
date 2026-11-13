---
title: API Reference
description: swaptox-connect instance methods, parameters, and event listener APIs.
---

# API Reference

After calling `createConnect(coreConfig, uiConfig)`, use the returned `connect` instance to call these methods.

## Connection methods

| Method | Description |
| --- | --- |
| `connect.open()` | Open the wallet connection dialog. |
| `connect.close()` | Close the wallet connection dialog. |
| `await connect.autoConnect()` | Check and restore a valid wallet connection. Call it after registering the `connect` listener. |
| `await connect.checkConnect(chain?)` | Validate the account connection and target network. If omitted, `currentChain` is used. You can pass a network name, network ID, or viem `Chain` object. On success, it returns an object containing `provider`; on failure, it disconnects, emits `disconnect`, and throws an error. |
| `connect.disconnect()` | Disconnect the wallet. |
| `connect.updateConfig(config)` | Update connector configuration, such as the current network. |
| `connect.getProvider()` | Get the connected wallet provider. |
| `connect.getState()` | Get the connection state. |
| `connect.destroy()` | Destroy the connector instance. |

### Example: change the target network

```ts
connect.updateConfig({ currentChain: 'rootstock' })
const { provider } = await connect.checkConnect('rootstock')
```

## UI methods

| Method | Description |
| --- | --- |
| `connect.setTheme(theme)` | Change the theme. Built-in values are `light` and `dark`; custom names from `themePack` are also supported. |
| `connect.setLang(lang)` | Change the UI language. Built-in languages and names from `languagePack` are supported. |

```ts
connect.setTheme('dark')
connect.setLang('zh-Hans')
```

## Event listener methods

| Method | Description |
| --- | --- |
| `connect.on(event, callback)` | Register an event listener. See [Events](./events) for event names. |
| `connect.off(event, callback)` | Remove the listener registered for the specified event and callback. |

