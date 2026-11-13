---
title: 速率限制
description: SwaptoX API 请求频率与 API Key 使用方式。
---

# 速率限制

**每个接口每秒最多请求一次。** 如需更高请求速率，请联系开发者申请。

## 申请更高速率

可通过 [SwaptoX 网站](https://app.swaptox.com/) 页面底部的联系方式联系团队。获批后会提供 API Key，请在请求头中传入：

```http
X-API-Key: YOUR_API_KEY
```

Rootstock 开发者可联系团队咨询提高速率。

收到 HTTP `429 Too Many Requests` 时，请降低请求频率，并在重试前加入等待。不要在每秒一次的限制下持续自动重试。

