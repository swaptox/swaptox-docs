---
title: 安装
description: 使用 pnpm 安装 swaptox-connect 及钱包连接依赖，或从 CDN 导入。
---

# 安装

## 使用 pnpm

```sh
pnpm add @swaptox/connect-ui @swaptox/connect-core viem @walletconnect/ethereum-provider @coinbase/wallet-sdk qr-code-styling
```

在应用中从 `@swaptox/connect-ui` 导入 `createConnect`：

```ts
import { createConnect } from '@swaptox/connect-ui'
```

## 使用 CDN

通过 esm.sh 导入 UI 包：

```js
import { createConnect } from 'https://esm.sh/@swaptox/connect-ui'
```

## 接入示例

- pnpm 应用示例：[app.swaptox.com](https://app.swaptox.com/)
- CDN 接入示例：[m.swaptox.com](https://m.swaptox.com/)

