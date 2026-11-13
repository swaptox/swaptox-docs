---
title: Submitting an On-Chain Swap
description: Build and submit a SwaptoX Router transaction using API quote data.
---

# Submitting an On-Chain Swap

Retrieve quote and route data from the Routes API, then submit the on-chain swap by calling the Router contract.

## Data required for the transaction

Use these fields from the quote response to build the transaction:

- `tokenIn` and `tokenOut`: Input and output tokens.
- `amountIn`: Input amount.
- `amountMinOut`: Minimum output amount.
- `swapData`: Route execution data.
- `deadline`: Transaction expiry.

The Router call also takes parameters such as the recipient, Permit data, and referrer address. A native-token input requires a transaction `value`.

The returned `deadline` is typically about five minutes in the future, but may vary by network. Integrators can set a custom expiry when submitting the transaction, while keeping it within the user's expected time window.

See the [Router interface](/contracts/router) for transaction details and [Swap routes](./quotes) for quote fields.

