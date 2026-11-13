---
title: Token List
description: Retrieve supported tokens and metadata for a network.
---

# Token List

## Request

```http
GET https://api-v2.swaptox.com/{chain}/tokens
```

The `chain` path parameter is the network name, such as `base` or `rootstock`.

## Response example

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

## Fields

| Field | Description |
| --- | --- |
| `name` | Token name. |
| `symbol` | Token symbol. |
| `address` | Token contract address or the native-token identifier for the network. |
| `decimals` | Token precision. |
| `logourl` | Token icon URL. |
| `permit_type` | Permit type supported by the token; an empty string means no Permit type is listed. |
| `is_verified` | Whether the token is verified. |
| `is_balance_slot` | Whether the balance is read using a balance slot. |
| `balance_slot_id` | Balance slot identifier; an empty string means no slot identifier is set. |

Validate `tokenIn` and `tokenOut` in quote requests against the token list for the selected network. See [Supported chains](https://api-v2.swaptox.com/supported-chains) for available networks.

