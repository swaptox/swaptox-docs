---
title: Router
description: SwaptoX Router 的兑换参数、调用方式和费用查询接口。
---

# Router

Router 合约通过 `swap` 执行兑换路由，并通过 `getSwapFeeBP` 查询兑换费率。

## 兑换参数

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

| 字段 | 说明 |
| --- | --- |
| `tokenIn` | 输入代币地址。 |
| `tokenOut` | 输出代币地址。 |
| `amountIn` | 输入数量，使用代币最小单位表示。 |
| `amountMinOut` | 最小输出数量；实际输出低于该值时，交易回滚。 |
| `recipient` | 接收输出代币的地址。 |
| `swapData` | 通过 Routes API 获取的兑换路由数据。 |
| `permitData` | 用户签名生成的 permit 调用数据；支持的类型见下文。 |

## `swap`

```solidity
function swap(
    SwapParameter calldata desc,
    uint256 deadline,
    address referral
) external payable returns (uint256 amountOut, uint256 gasUsed);
```

| 参数 / 返回值 | 说明 |
| --- | --- |
| `desc` | 兑换参数，结构见上表。 |
| `deadline` | Unix 时间戳，单位为秒。超过该时间执行时，交易回滚。 |
| `referral` | 邀请者地址，可获得 30%–50% 的手续费分成。 |
| `amountOut` | 实际输出数量。 |
| `gasUsed` | 合约返回的 Gas 使用量数据。 |

### 授权与 Permit

调用前，先授权 Router 使用不少于 `amountIn` 的输入代币，或在支持的情况下通过 `permitData` 提供授权数据。

支持以下 Permit 类型及选择器：

| Permit 类型 | 选择器 |
| --- | --- |
| EIP-2612 | `0xd505accf` |
| EIP-2612 Bytes | `0x9fd5a6cf` |
| DAI Permit | `0x8fcbaf0c` |

使用前请确认输入代币支持相应 Permit 类型。原生代币兑换需要在交易的 `value` 中附带对应数量；ERC-20 输入通常将 `value` 设为 `0`。

### 编码与发送交易示例

以下示例使用 Routes API 返回的路由数据构造 Router 调用：

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

原生代币的 `value` 使用最小单位数量，并与 `amountIn` 相符。

## 查询兑换费用

```solidity
function getSwapFeeBP(address account, address token) public view returns (uint256);
```

| 参数 / 返回值 | 说明 |
| --- | --- |
| `account` | 当前交易账户地址。 |
| `token` | 当前兑换涉及的代币地址。 |
| 返回值 | 兑换费率，使用 BP（基点）表示。 |

基础费率 `baseFee` 为 `20 BP = 0.2%`，其中 `10,000 BP = 100%`。传入账户和代币地址可查询对应费率。

