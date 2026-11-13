---
title: Errors
description: SwaptoX API HTTP status codes and application error codes.
---

# Errors

A successful request uses HTTP status `200 OK` and returns `success: true` in the response body. Read `data` only when both the HTTP request and the application-level status succeed.

## HTTP status codes

| Status | Meaning |
| --- | --- |
| `200 OK` | Request succeeded. |
| `400 Bad Request` | Request parameters are invalid. |
| `401 Unauthorized` | The API key is missing or invalid. |
| `403 Forbidden` | The request does not have API access. |
| `404 Not Found` | The requested resource does not exist. |
| `422 Unprocessable Content` | The request is valid, but the operation cannot be completed. |
| `429 Too Many Requests` | The request rate limit was exceeded. |
| `500 Internal Server Error` | An internal SwaptoX service error occurred. |
| `502 Bad Gateway` | An upstream RPC, DEX, or third-party service failed. |
| `503 Service Unavailable` | The SwaptoX service is temporarily unavailable. |
| `504 Gateway Timeout` | An RPC, DEX, quote, or simulation request timed out. |

## 422 application error codes

When the request is valid but no executable swap can be produced, the response may include one of these application error codes:

| Code | Meaning |
| --- | --- |
| `NO_ROUTE` | No usable swap route was found. |
| `INSUFFICIENT_LIQUIDITY` | Available liquidity is insufficient. |
| `SIMULATION_FAILED` | Transaction simulation failed. |
| `AMOUNT_TOO_LARGE` | The input amount is too large to process. |
| `SWAP_NOT_SUPPORTED` | The requested swap is not supported. |

Error responses may contain `code` and `message`. Decide whether to guide the user, adjust the request, or retry based on the error. Do not treat every error as retryable.

