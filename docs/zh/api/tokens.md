---
title: 代币列表
description: 查询指定网络支持的代币及其元数据。
---

# 代币列表

## 请求

```http
GET https://api-v2.swaptox.com/{chain}/tokens
```

路径参数 `chain` 是网络名称，例如 `base` 或 `rootstock`。

## 响应示例

```json
{
  "success": true,
  "data": [
    {
      "name": "Rootstock Bitcoin",
      "symbol": "RBTC",
      "address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      "decimals": 18,
      "logourl": "https://cdn.swaptox.com/rootstock/token/rbtc-v2.svg",
      "permit_type": "",
      "is_verified": true,
      "is_balance_slot": false,
      "balance_slot_id": ""
    }
  ]
}
```

## 字段说明

| 字段 | 说明 |
| --- | --- |
| `name` | 代币名称。 |
| `symbol` | 代币符号。 |
| `address` | 代币合约地址；原生代币使用网络提供的标识地址。 |
| `decimals` | 代币精度。 |
| `logourl` | 代币图标地址。 |
| `permit_type` | 代币支持的 Permit 类型；空字符串表示未提供该信息。 |
| `is_verified` | 代币是否已验证。 |
| `is_balance_slot` | 余额是否通过 balance slot 方式读取。 |
| `balance_slot_id` | balance slot 标识；空字符串表示未提供。 |

请使用当前网络返回的代币列表校验报价请求中的 `tokenIn` 和 `tokenOut`。网络支持情况见[支持的网络](https://api-v2.swaptox.com/supported-chains)。

