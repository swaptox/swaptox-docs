---
title: 快速开始
description: 选择接入方式并创建第一个 SwaptoX Widget。
---

# 快速开始

## 1. 选择接入方式

- **嵌入现成的兑换界面：**使用 [`swaptox-widget`](/zh/sdk/swaptox-widget/)。
- **让兑换界面共用钱包连接：**使用[`swaptox-widget` 搭配 `swaptox-connect`](/zh/sdk/swaptox-widget/connect-integration)。
- **构建自定义兑换界面：**使用 [Routes API](/zh/api/) 获取路由，并通过 [Router 合约](/zh/contracts/router)提交兑换。需要钱包连接能力时，再接入 `swaptox-connect`。

## 2. 确认目标网络

通过[支持的网络接口](https://api-v2.swaptox.com/supported-chains)获取当前网络列表。在 API 请求和 SDK 配置中使用列表返回的网络名称。

## 3. 安装并创建 Widget

接入基础兑换界面时，安装对应包：

```sh
pnpm add @swaptox/widget
```

在页面中添加挂载容器：

```html
<div id="swaptox-widget"></div>
```

在浏览器代码中创建 Widget：

```ts
import { createWidget } from '@swaptox/widget'

const widget = createWidget({
  container: '#swaptox-widget',
  chain: 'base',
  lang: 'zh-Hans',
  theme: 'light'
})
```

如果需要由 Connect 同步钱包状态并处理 Widget 的交易流程，请安装两个包并参阅[集成指南](/zh/sdk/swaptox-widget/connect-integration)。

## 4. 检查兑换流程

上线前确认应用使用支持的网络，并检查用户可以查看接收地址、输入数量、最小输出数量和交易截止时间。自定义集成请按 API 文档获取路由数据，并按 Router 文档准备链上调用。

## 继续阅读

- [Widget 安装与配置](/zh/sdk/swaptox-widget/)
- [使用 swaptox-connect 连接钱包](/zh/sdk/swaptox-connect/)
- [API 简介](/zh/api/introduction)
- [Router 接口](/zh/contracts/router)

