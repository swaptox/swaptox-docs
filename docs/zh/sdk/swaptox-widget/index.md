---
title: swaptox-widget
description: 在浏览器应用中嵌入 SwaptoX 兑换界面。
---

# swaptox-widget

`@swaptox/widget` 是可嵌入浏览器应用的 Swap 聚合器界面。创建 Widget 实例并挂载到页面容器后，用户即可查看路由并发起兑换。

## 快速接入

1. 按[安装指南](./installation)添加 `@swaptox/widget`。
2. 在页面中放置容器，并按[初始化](./initialization)创建 Widget。
3. 在[配置](./configuration)中设置网络、语言和主题。
4. 如需与 SwaptoX Connect 共用钱包状态和交易处理，请参阅[搭配 swaptox-connect 使用](./connect-integration)。

Widget 也可以单独使用。此时由应用自行处理钱包连接，以及 Widget 发出的 `approve`、`permit` 和 `swap` 事件。

源码：[github.com/swaptox/swaptox-widget](https://github.com/swaptox/swaptox-widget)

## 指南

- [安装](./installation)
- [初始化](./initialization)
- [配置](./configuration)
- [方法](./methods)
- [事件](./events)
- [搭配 swaptox-connect 使用](./connect-integration)

