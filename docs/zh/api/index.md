---
title: API 概览
description: SwaptoX API 基础地址、接口分类和接入说明。
---

# API 概览

SwaptoX API 提供代币列表、代币价格和兑换路由数据。API 基础地址格式为：

```text
https://api-v2.swaptox.com/{chain}/{resource}
```

`chain` 是网络名称，例如 `base` 或 `rootstock`。通过[支持的网络接口](https://api-v2.swaptox.com/supported-chains)查询可用网络。

## 接口

- [API 简介与通用请求](./introduction)
- [兑换路由与报价](./quotes)
- [代币列表](./tokens)
- [代币价格](./prices)
- [速率限制与 API Key](./rate-limits)
- [HTTP 状态码与错误码](./errors)
- [提交链上兑换](./swaps)

获取路由后，使用返回的交易数据调用 Router 合约完成链上兑换。详见[合约 Router 文档](/zh/contracts/router)。

