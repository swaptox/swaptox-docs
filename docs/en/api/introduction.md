---
title: API Introduction
description: SwaptoX API URLs, request method, response format, and a generic request example.
---

# API Introduction

## Base URL

```text
https://api-v2.swaptox.com/{chain}/{resource}
```

- `chain`: Network name, such as `base` or `rootstock`.
- `resource`: Resource path, such as `routes` or `tokens`.

Supported networks: <https://api-v2.swaptox.com/supported-chains>. Use a network name from this list as `{chain}` in the request URL.

## Requests and responses

The documented endpoints use HTTP `GET`, with query parameters passed in the URL. A successful response uses HTTP status `200` and this response shape:

```json
{
  "success": true,
  "data": {}
}
```

Use `data` only when the HTTP request succeeds and `success` is `true`. Error responses may include `code` and `message`; see [Errors](./errors).

## Generic request function

This TypeScript example builds the network and resource URL, adds query parameters, and checks both the HTTP and application-level status:

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

When an API key is required, send it in the `X-API-Key` request header. Do not commit a real key to a public repository or expose it in client-side source code. See [Rate limits](./rate-limits) for limits and key requests.

