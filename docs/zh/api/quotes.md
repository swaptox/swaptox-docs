---
title: 兑换路由与报价
description: 查询 SwaptoX 兑换路由、报价、最小输出和账户信息。
---

# 兑换路由与报价

使用 Routes API 查询指定输入代币、输出代币和输入数量的可用路由。

## 请求

```http
GET https://api-v2.swaptox.com/{chain}/routes
```

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `chain` | 是 | 网络名称，例如 `base` 或 `rootstock`。 |
| `tokenIn` | 是 | 输入代币地址。 |
| `amountIn` | 是 | 输入数量，按代币最小单位传入整数；原生代币使用 wei，ERC-20 代币按其 `decimals` 换算。 |
| `tokenOut` | 是 | 输出代币地址。 |
| `account` | 否 | 当前兑换账户。传入后可返回与账户相关的手续费和余额信息；不传不会影响兑换执行或实际手续费减免。 |
| `slippage` | 否 | 滑点容忍值，范围为 `1–1000`，默认 `50`。`50 = 0.5%`，`1 = 0.01%`。建议根据集成场景设置在 `10–100` 范围内。此值主要用于计算 `amountMinOut`。 |

`tokenIn` 与 `tokenOut` 不能相同，并且都应存在于该网络的[代币列表](./tokens)中，否则可能无法获取报价。

## 请求示例

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

## 路由选择

`data.routes` 可以是路由数组或单个路由对象。处理响应时先判断数据类型。

- 推荐优先选择 `bestRoute: true` 的路由。该标记表示扣除预估 Gas 费用后结果最优。
- `maxOutput: true` 表示输出数量最多的路由；它与扣除 Gas 后最优的路由可能不同。
- 数组中输出数量最多的路由排在第一项；也可根据 `maxOutput` 标记识别。

## 路由响应字段

每个路由对象可能包含以下字段：

| 字段 | 说明 |
| --- | --- |
| `amountIn` | 输入数量。 |
| `amountOut` | 预估输出数量。 |
| `gas` | 预估 Gas 用量。 |
| `result` | 路由视图数据，适合用于前端展示；其中可包含拆分比例、池地址、协议标识、版本及代币路径。 |
| `swapData` | 用于 Router 交易的编码数据。 |
| `tokenIn`、`tokenOut` | 输入与输出代币地址。 |
| `amountInUsd`、`amountOutUsd` | 输入与输出金额的 USD 估值。 |
| `gasFeeUsd` | 预估 Gas 费用的 USD 估值。 |
| `gasPrice` | 报价使用的 Gas 价格。 |
| `amountMinOut` | 根据 `slippage` 计算的最小输出数量。 |
| `swapAddress` | 提交兑换交易时调用的合约地址。 |
| `nativeTokenPriceUsd` | 网络原生代币的 USD 价格，可用于按新的 Gas 价格重新估算费用。 |
| `nativeTokenDecimals` | 网络原生代币精度，可用于重新换算 Gas 费用。 |
| `slippage` | 用于计算 `amountMinOut` 的滑点值。 |
| `bestRoute` | 是否为扣除预估 Gas 费用后最优的路由。 |
| `maxOutput` | 是否为输出数量最多的路由。 |

### `accountInfo`

请求中传入 `account` 后，可使用响应中的账户信息：

| 字段 | 说明 |
| --- | --- |
| `account` | 本次报价对应的账户地址。 |
| `feeBP` | 兑换手续费，单位为 BP；`20 BP = 0.2%`（`10,000 BP = 100%`）。 |
| `balance` | 账户的代币余额映射，可能包含输入代币、输出代币和网络原生代币，可用于界面余额检查。 |

账户信息便于界面展示和余额检查；报价请求中的 `account` 不会改变交易执行或实际手续费减免。

### `deadline`

响应中的 `deadline` 是交易有效期时间戳，通常约为 5 分钟后，但不同网络可能有所差异。提交交易时可以自定义有效期。

## 提交交易

链上兑换所需的主要字段为 `tokenIn`、`tokenOut`、`amountIn`、`amountMinOut`、`swapData` 和 `deadline`。可按需要自行计算 `amountMinOut`；如果使用 API 返回值，请确保其滑点符合用户设置。

交易提交方式见[提交链上兑换](./swaps)和[合约 Router 接口](/zh/contracts/router)。

