---
title: API 简介
description: SwaptoX API 地址、请求方式、响应格式与通用请求示例。
---

# API 简介

## 基础地址

```text
https://api-v2.swaptox.com/{chain}/{resource}
```

- `chain`：网络名称，例如 `base`、`rootstock`。
- `resource`：资源路径，例如 `routes`、`tokens`。

支持的网络：<https://api-v2.swaptox.com/supported-chains>。请求时将网络名称填入 `{chain}`。

## 请求与响应

当前接口使用 HTTP `GET`，查询条件通过 URL query 参数传递。成功响应的 HTTP 状态码为 `200`，响应体使用以下结构：

```json
{
  "success": true,
  "data": {}
}
```

只有 HTTP 请求成功且 `success` 为 `true` 时，才应使用 `data`。失败响应可能包含 `code` 和 `message`，详见[错误码](./errors)。

## 通用请求函数

下面的 TypeScript 示例会拼接网络和资源路径、附加查询参数，并检查 HTTP 状态和业务状态：

```ts
type ApiResponse<T> = {
  success: boolean
  data?: T
  code?: string | number
  message?: string
}

type RequestParams = {
  chain: string
  resource: string
  query?: Record<string, string | number | boolean | null | undefined>
  apiKey?: string
}

export async function request<T>({
  chain,
  resource,
  query = {},
  apiKey
}: RequestParams): Promise<T> {
  const url = new URL(
    `https://api-v2.swaptox.com/${chain}/${resource}`
  )

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value))
    }
  }

  const response = await fetch(url, {
    headers: apiKey ? { 'X-API-Key': apiKey } : undefined
  })

  const contentType = response.headers.get('content-type') ?? ''
  const result: ApiResponse<T> & { message?: string } =
    contentType.includes('application/json')
      ? await response.json()
      : { success: false, message: await response.text() }

  if (response.status !== 200 || result.success !== true) {
    const error = new Error(result.message || 'API request failed')
    Object.assign(error, {
      status: response.status,
      code: result.code ?? 'UNKNOWN_ERROR'
    })
    throw error
  }

  return result.data as T
}
```

需要 API Key 时，将密钥放在 `X-API-Key` 请求头中。不要把真实密钥提交到公开仓库或前端源码中。速率限制与申请方式见[速率限制](./rate-limits)。

