---
title: Rate Limits
description: SwaptoX API request limits and API key usage.
---

# Rate Limits

**The limit is one request per endpoint per second.** Contact the team to request a higher rate.

## Request a higher rate

Use the contact information in the footer of the [SwaptoX website](https://app.swaptox.com/) to reach the team. If approved, an API key will be provided. Send it in the request header:

```http
X-API-Key: YOUR_API_KEY
```

Rootstock developers are encouraged to contact the team about a higher rate.

When you receive HTTP `429 Too Many Requests`, reduce the request rate and wait before retrying. Do not continuously retry under the one-request-per-second limit.

