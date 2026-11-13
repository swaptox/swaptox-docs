---
title: 方法
description: 初始化后更新 Widget，并在不再使用时销毁实例。
---

# 方法

通过 `createWidget` 返回的实例，在初始化后更新 Widget 界面。

| 方法 | 说明 |
| --- | --- |
| `setUserAddress(address \| '')` | 设置或清空钱包地址。 |
| `setChain(chain)` | 切换当前网络。 |
| `getChain()` | 返回当前网络。 |
| `getChains()` | 返回支持的网络列表。 |
| `openConfirmSwapModal()` | 打开兑换确认框。禁用 `swapButton` 后可通过此方法发起确认流程。 |
| `setLang(lang)` | 切换界面语言，并返回 Widget 最终使用的语言代码。 |
| `getLangPack()` | 获取语言包。 |
| `setTheme(theme)` | 切换界面主题，并返回 Widget 最终使用的主题名。 |
| `getThemePack()` | 获取主题包。 |
| `setRoute(route)` | 选择 Widget 路由数据中的单个路由对象。 |
| `setLimitOptionalToken(config)` | 更新可选代币设置。 |
| `setReferral(address)` | 设置邀请地址。 |
| `setDisabledMiniPriceCard(disabled)` | 显示或隐藏迷你价格卡片。 |
| `setDisabledHistoryIcon(disabled)` | 显示或隐藏交易历史图标。 |
| `setDisabledCustomRecipient(disabled)` | 启用或禁用自定义接收地址。 |
| `setDisabledChooseRoute(disabled)` | 启用或禁用路由选择。 |
| `setSlippagLayout(position)` | 将滑点控件放在 `top` 或 `bottom`。方法名中使用 `Slippag` 拼写。 |
| `setSwapButton(enabled)` | 显示或隐藏 Swap 按钮。 |
| `destroy()` | 移除 Widget，并清理实例事件监听器。 |

例如，初始化后切换网络和语言：

```ts
widget.setChain('rootstock')
widget.setLang('zh-Hans')
```

页面或组件卸载时，在清理逻辑中销毁实例：

```ts
widget.destroy()
```
