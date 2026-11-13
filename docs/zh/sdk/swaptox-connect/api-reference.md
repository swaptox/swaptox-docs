---
title: API 参考
description: swaptox-connect 实例方法、参数和事件监听接口。
---

# API 参考

调用 `createConnect(coreConfig, uiConfig)` 后，通过返回的 `connect` 实例调用以下方法。

## 连接方法

| 方法 | 说明 |
| --- | --- |
| `connect.open()` | 打开钱包连接界面。 |
| `connect.close()` | 关闭钱包连接界面。 |
| `await connect.autoConnect()` | 检查并恢复仍然有效的钱包连接。注册 `connect` 监听器后调用。 |
| `await connect.checkConnect(chain?)` | 校验账户连接和目标网络。省略参数时使用 `currentChain`；也可传入网络名称、网络 ID 或 viem `Chain` 对象。成功后返回包含 `provider` 的对象；失败时断开连接、触发 `disconnect` 并抛出错误。 |
| `connect.disconnect()` | 断开钱包连接。 |
| `connect.updateConfig(config)` | 更新连接配置，例如当前网络。 |
| `connect.getProvider()` | 获取已连接钱包的 provider。 |
| `connect.getState()` | 获取连接状态。 |
| `connect.destroy()` | 销毁连接器实例。 |

### 示例：切换目标网络

```ts
connect.updateConfig({ currentChain: 'rootstock' })
const { provider } = await connect.checkConnect('rootstock')
```

## 界面方法

| 方法 | 说明 |
| --- | --- |
| `connect.setTheme(theme)` | 切换主题。内置值为 `light`、`dark`，也可使用 `themePack` 中定义的主题名称。 |
| `connect.setLang(lang)` | 切换界面语言。支持内置语言及 `languagePack` 中定义的语言名称。 |

```ts
connect.setTheme('dark')
connect.setLang('zh-Hans')
```

## 事件监听方法

| 方法 | 说明 |
| --- | --- |
| `connect.on(event, callback)` | 注册事件监听器。事件名称见[事件](./events)。 |
| `connect.off(event, callback)` | 移除指定事件及回调对应的监听器。 |

