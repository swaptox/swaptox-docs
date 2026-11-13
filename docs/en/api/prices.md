---
title: Token Prices
description: Retrieve a token's USD buy price, sell price, and update time.
---

# Token Prices

## Request

```http
GET https://api-v2.swaptox.com/{chain}/tokenSinglePrice?token={tokenAddress}
```

| Parameter | Required | Description |
| --- | --- | --- |
| `chain` | Yes | Network name, such as `base` or `rootstock`. |
| `token` | Yes | Token address. |

## Response example

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

## Response fields

| Field | Description |
| --- | --- |
| `usd_buy` | USD buy price. |
| `usd_sell` | USD sell price. |
| `price_last_updated` | Price update time in ISO 8601 format. |

Prices are returned as strings. Parse them at the precision required by your application.

