---
title: Swap Routes and Quotes
description: Retrieve SwaptoX routes, quote data, minimum output, and account information.
---

# Swap Routes and Quotes

Use the Routes API to retrieve available routes for an input token, output token, and input amount.

## Request

```http
GET https://api-v2.swaptox.com/{chain}/routes
```

| Parameter | Required | Description |
| --- | --- | --- |
| `chain` | Yes | Network name, such as `base` or `rootstock`. |
| `tokenIn` | Yes | Input token address. |
| `amountIn` | Yes | Integer input amount in the token's smallest unit. Native-token amounts use wei; convert ERC-20 amounts using the token's `decimals`. |
| `tokenOut` | Yes | Output token address. |
| `account` | No | Current swap account. When provided, the response can include account-specific fee and balance information. Omitting it does not affect swap execution or actual fee discounts. |
| `slippage` | No | Slippage tolerance from `1–1000`; defaults to `50`. `50 = 0.5%` and `1 = 0.01%`. A value between `10–100` is suggested for typical integrations. This value is mainly used to calculate `amountMinOut`. |

`tokenIn` and `tokenOut` must be different and should both appear in the token list for the selected network. Otherwise, a quote may not be available.

## Request example

```ts
const quote = await request({
  chain: 'base',
  resource: 'routes',
  query: {
    tokenIn: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    tokenOut: '0x74c9f2b00581f1b11aa7ff05aa9f608b7389de67',
    amountIn: '1000000000000000000',
    slippage: 50
  }
})
```

## Selecting a route

`data.routes` can be an array of routes or a single route object. Check the response type before processing it.

- Prefer the route with `bestRoute: true`. This flag marks the best result after estimated gas fees are deducted.
- `maxOutput: true` marks the route with the highest output amount. It may differ from the route that is best after gas fees.
- In an array, the route with the highest output is first. You can also identify it with the `maxOutput` flag.

## Route response fields

Each route object may contain:

| Field | Description |
| --- | --- |
| `amountIn` | Input amount. |
| `amountOut` | Estimated output amount. |
| `gas` | Estimated gas usage. |
| `result` | Route visualization data for the frontend. It can include split percentages, pool addresses, protocol identifiers, versions, and token paths. |
| `swapData` | Encoded data for the Router transaction. |
| `tokenIn`, `tokenOut` | Input and output token addresses. |
| `amountInUsd`, `amountOutUsd` | USD estimates for the input and output amounts. |
| `gasFeeUsd` | Estimated gas fee in USD. |
| `gasPrice` | Gas price used for the quote. |
| `amountMinOut` | Minimum output amount calculated from `slippage`. |
| `swapAddress` | Contract address to call when submitting the swap. |
| `nativeTokenPriceUsd` | USD price of the network's native token; can be used to recalculate the fee with an updated gas price. |
| `nativeTokenDecimals` | Decimal precision of the network's native token; can be used to recalculate the gas fee. |
| `slippage` | Slippage value used to calculate `amountMinOut`. |
| `bestRoute` | Whether this is the best route after estimated gas fees. |
| `maxOutput` | Whether this route has the highest output amount. |

### `accountInfo`

When `account` is included in the request, the response can provide account information:

| Field | Description |
| --- | --- |
| `account` | Account address used for the quote. |
| `feeBP` | Swap fee in BP; `20 BP = 0.2%` (`10,000 BP = 100%`). |
| `balance` | A map of token balances for the account. It may include the input token, output token, and native token, and can be used for frontend balance checks. |

Account information is useful for display and balance checks. The `account` quote parameter does not change transaction execution or actual fee discounts.

### `deadline`

The response's `deadline` is a transaction-expiry timestamp, typically about five minutes in the future. It may vary by network. Integrators can set a custom expiry when submitting the transaction.

## Submitting the transaction

The main fields required for the on-chain swap are `tokenIn`, `tokenOut`, `amountIn`, `amountMinOut`, `swapData`, and `deadline`. You may calculate `amountMinOut` yourself; if you use the API value, make sure its slippage matches the user's setting.

See [Submitting an on-chain swap](./swaps) and the [Router interface](/contracts/router).

