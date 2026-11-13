---
title: swaptox-connect
description: 面向 DApp 的多钱包连接 SDK，支持 EIP-6963、WalletConnect 和 Coinbase Wallet。
---

# swaptox-connect

`@swaptox/connect-ui` 与 `@swaptox/connect-core` 为 DApp 提供统一的钱包发现、连接和交互接口。SDK 使用 TypeScript 与 Lit 编写，可集成到 React 等前端框架。

支持的钱包接入方式包括：

- 通过 EIP-6963 发现浏览器钱包。
- 通过 WalletConnect 连接钱包。
- 通过 Coinbase Wallet SDK 连接 Coinbase Wallet。

## 快速接入

1. 按[安装指南](./installation)添加 SDK 及其依赖。
2. 按[初始化指南](./initialization)调用 `createConnect`。
3. 在应用启动时注册[事件监听](./events)，再调用 `autoConnect()` 恢复有效连接。
4. 发送交易前调用 `checkConnect()` 校验账户与网络。

开源仓库：[github.com/swaptox/swaptox-connect](https://github.com/swaptox/swaptox-connect)

## 指南

- [安装](./installation)
- [初始化](./initialization)
- [配置网络、主题与语言](./configuration)
- [连接钱包与发送交易](./wallet-connection)
- [最佳案例](./best-practices)
- [监听事件](./events)
- [API 参考](./api-reference)

