---
title: 提交链上兑换
description: 使用 API 报价数据构造并提交 SwaptoX Router 交易。
---

# 提交链上兑换

使用 Routes API 获取报价和路由数据后，集成方调用 Router 合约提交链上兑换。

## 交易所需数据

从报价响应中获取以下字段并用于构造交易：

- `tokenIn`、`tokenOut`：输入和输出代币。
- `amountIn`：输入数量。
- `amountMinOut`：最小输出数量。
- `swapData`：路由执行数据。
- `deadline`：交易有效期。

调用时还需按 Router 接口传入接收地址、Permit 数据和邀请者地址等参数。原生代币输入需要附带交易 `value`。

报价返回的 `deadline` 通常约为 5 分钟后，但不同网络可能不同。提交交易时可按集成需求自行设置有效期，并确保不会超过用户预期。

详见[合约 Router 接口](/zh/contracts/router)。报价字段说明见[兑换路由](./quotes)。

