---
title: 错误码
description: SwaptoX API HTTP 状态码与业务错误码说明。
---

# 错误码

成功请求的 HTTP 状态码为 `200 OK`，并且响应体中的 `success` 应为 `true`。HTTP 状态与业务状态都成功后，才读取 `data`。

## HTTP 状态码

| 状态码 | 含义 |
| --- | --- |
| `200 OK` | 请求成功。 |
| `400 Bad Request` | 请求参数错误。 |
| `401 Unauthorized` | API Key 缺失或无效。 |
| `403 Forbidden` | 当前请求没有 API 访问权限。 |
| `404 Not Found` | 请求的资源不存在。 |
| `422 Unprocessable Content` | 请求格式合法，但业务操作无法完成。 |
| `429 Too Many Requests` | 请求频率超过限制。 |
| `500 Internal Server Error` | SwaptoX 服务内部错误。 |
| `502 Bad Gateway` | 上游 RPC、DEX 或第三方服务异常。 |
| `503 Service Unavailable` | SwaptoX 服务暂时不可用。 |
| `504 Gateway Timeout` | RPC、DEX、报价或模拟执行超时。 |

## 422 业务错误码

当请求参数有效，但无法生成可执行的兑换方案时，响应可能包含以下业务错误码：

| 错误码 | 含义 |
| --- | --- |
| `NO_ROUTE` | 找不到可用兑换路由。 |
| `INSUFFICIENT_LIQUIDITY` | 可用流动性不足。 |
| `SIMULATION_FAILED` | 交易模拟失败。 |
| `AMOUNT_TOO_LARGE` | 输入数量过大，无法处理。 |
| `SWAP_NOT_SUPPORTED` | 当前兑换不受支持。 |

错误响应可能包含 `code` 和 `message`。客户端应根据错误码决定是否提示用户、调整参数或稍后重试；不要将所有错误都当成可重试错误。

