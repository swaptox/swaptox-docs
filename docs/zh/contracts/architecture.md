---
title: 合约架构
description: SwaptoX Router 的链上兑换执行职责。
---

# 合约架构

SwaptoX 合约为代币兑换提供链上执行与费用管理能力。Router 汇总受支持 DEX 协议的流动性，并可执行多跳和拆分路由。

## 兑换执行概览

1. 集成方通过 Routes API 获取兑换路由及对应的 `swapData`。
2. 用户确认兑换参数，并为输入代币授权 Router；也可以在支持的情况下提供 `permitData`。
3. 调用 Router 的 `swap` 方法。合约根据路由数据执行兑换；若输出数量低于 `amountMinOut` 或交易超过 `deadline`，交易会回滚。
4. 交易成功后，输出代币发送至 `recipient`。

Router 还提供只读方法查询兑换费用。合约通过访问控制限制敏感管理操作；Timelock 的多签审批和延迟执行规则见 [Timelock 治理](./timelock)。

