---
title: API Overview
description: SwaptoX API base URL, endpoints, and integration guides.
---

# API Overview

The SwaptoX API provides token lists, token prices, and swap route data. The base URL format is:

```text
https://api-v2.swaptox.com/{chain}/{resource}
```

`chain` is the network name, such as `base` or `rootstock`. See [Supported chains](https://api-v2.swaptox.com/supported-chains) for the current list.

## Endpoints and guides

- [API introduction and generic requests](./introduction)
- [Swap routes and quotes](./quotes)
- [Token list](./tokens)
- [Token prices](./prices)
- [Rate limits and API keys](./rate-limits)
- [HTTP status and error codes](./errors)
- [Submitting an on-chain swap](./swaps)

Use the route data returned by the API to submit an on-chain swap through the Router contract. See the [Router documentation](/contracts/router).

