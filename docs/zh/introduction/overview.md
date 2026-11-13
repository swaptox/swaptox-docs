---
title: 产品概览
description: 了解 SwaptoX API、SDK 与链上兑换执行的组成方式。
---

# 产品概览

SwaptoX 是面向多个支持网络的代币兑换聚合器，提供路由数据和链上执行能力。应用可以使用现成的 Widget、通过 Connect SDK 接入钱包，也可以直接调用公开 API 构建自定义界面。

## 主要组件

- **Routes API**：返回代币和价格信息、报价，以及准备兑换所需的路由数据。
- **`swaptox-widget`**：可嵌入应用的兑换界面，适合希望快速接入现成交易 UI 的项目。
- **`swaptox-connect`**：为 DApp 提供钱包发现、连接和交易交互能力。
- **Router 合约**：用户授权输入代币或提供支持的 Permit 签名后，在链上执行选定路由。

## 兑换流程

1. 应用根据目标网络和代币对请求报价及路由。
2. 用户在 Widget 或应用自有界面中查看报价和兑换设置。
3. 钱包通过授权交易或支持的 Permit 流程授权输入代币，然后向 Router 提交兑换交易。
4. Router 执行路由，并将输出代币发送给指定接收地址。

Widget 可以与 `swaptox-connect` 搭配，共享钱包状态并处理授权、Permit 和兑换流程。自定义集成也可以直接使用 API 和合约。

## 选择接入方式

- 使用 [swaptox-widget](/zh/sdk/swaptox-widget/) 嵌入兑换界面。
- 应用需要钱包连接功能，或 Widget 需要共用钱包状态时，接入 [swaptox-connect](/zh/sdk/swaptox-connect/)。
- 如需自定义兑换体验，可使用 [API](/zh/api/) 和 [Router 合约文档](/zh/contracts/router)。

从[快速开始](./getting-started)开始接入。

