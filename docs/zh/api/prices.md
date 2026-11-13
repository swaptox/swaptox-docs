---
title: 代币价格
description: 查询指定代币的 USD 买入价、卖出价和更新时间。
---

# 代币价格

## 请求

```http
GET https://api-v2.swaptox.com/{chain}/tokenSinglePrice?token={tokenAddress}
```

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `chain` | 是 | 网络名称，例如 `base` 或 `rootstock`。 |
| `token` | 是 | 代币地址。 |

## 响应示例

```json
{
  "success": true,
  "data": {
    "usd_buy": "83963.325124",
    "usd_sell": "68476.204473",
    "price_last_updated": "2026-11-12T10:43:00.859Z"
  }
}
```

## 响应字段

| 字段 | 说明 |
| --- | --- |
| `usd_buy` | USD 买入价。 |
| `usd_sell` | USD 卖出价。 |
| `price_last_updated` | 价格更新时间，采用 ISO 8601 时间格式。 |

价格值以字符串返回，使用前请按所需精度解析。

