---
title: Router
description: Swap parameters, call details, and fee query for the SwaptoX Router.
---

# Router

The Router executes swap routes through `swap` and exposes `getSwapFeeBP` to query swap fees.

## Swap parameters

```solidity
struct SwapParameter {
    address tokenIn;
    address tokenOut;
    uint256 amountIn;
    uint256 amountMinOut;
    address recipient;
    bytes swapData;
    bytes permitData;
}
```

| Field | Description |
| --- | --- |
| `tokenIn` | Address of the input token. |
| `tokenOut` | Address of the output token. |
| `amountIn` | Input amount in the token's smallest unit. |
| `amountMinOut` | Minimum output amount. The transaction reverts if the actual output is lower. |
| `recipient` | Address that receives the output tokens. |
| `swapData` | Swap route data returned by the Routes API. |
| `permitData` | Permit call data derived from the user's signature. Supported types are listed below. |

## `swap`

```solidity
function swap(
    SwapParameter calldata desc,
    uint256 deadline,
    address referral
) external payable returns (uint256 amountOut, uint256 gasUsed);
```

| Parameter / return value | Description |
| --- | --- |
| `desc` | Swap parameters described above. |
| `deadline` | Unix timestamp in seconds. The transaction reverts if it executes after this time. |
| `referral` | Referrer address. The referrer receives a 30%–50% share of the fee. |
| `amountOut` | Actual output amount. |
| `gasUsed` | Gas usage data returned by the contract. |

### Allowance and Permit

Before calling the Router, approve it to spend at least `amountIn` of the input token, or provide authorization through `permitData` where supported.

The Router supports these Permit types and selectors:

| Permit type | Selector |
| --- | --- |
| EIP-2612 | `0xd505accf` |
| EIP-2612 Bytes | `0x9fd5a6cf` |
| DAI Permit | `0x8fcbaf0c` |

Confirm that the input token supports the selected Permit type. For a native-token swap, include the corresponding amount in the transaction's `value`. For an ERC-20 input, `value` is typically `0`.

### Encode and send a transaction

This example uses route data returned by the Routes API to build a Router call:

```ts
import { encodeFunctionData } from 'viem'

function toHexValue(value: bigint | string): string {
  return '0x' + BigInt(value).toString(16)
}

const desc = {
  tokenIn,
  tokenOut,
  amountIn,
  amountMinOut,
  recipient,
  swapData,
  permitData
}

const calldata = encodeFunctionData({
  abi: SwaptoXRouterABI,
  functionName: 'swap',
  args: [desc, deadlineInSeconds, referralAddress]
})

const txHash = await provider.request({
  method: 'eth_sendTransaction',
  params: [{
    from: account,
    to: SwaptoXRouterAddress,
    data: calldata,
    value: isNativeToken ? toHexValue(amountIn) : '0x0'
  }]
})
```

For native-token swaps, `value` must use the smallest unit and match `amountIn`.

## Query swap fees

```solidity
function getSwapFeeBP(address account, address token) public view returns (uint256);
```

| Parameter / return value | Description |
| --- | --- |
| `account` | Address of the current transaction account. |
| `token` | Address of a token involved in the swap. |
| Return value | Swap fee expressed in BP (basis points). |

The base fee, `baseFee`, is `20 BP = 0.2%`, where `10,000 BP = 100%`. Pass the account and token addresses to query the corresponding fee.

