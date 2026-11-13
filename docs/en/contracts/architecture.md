---
title: Architecture
description: On-chain swap execution through the SwaptoX Router.
---

# Architecture

SwaptoX contracts provide on-chain swap execution and fee management. The Router aggregates liquidity from supported DEX protocols and can execute multi-hop and split routes.

## Swap execution overview

1. The integrator requests a route and its corresponding `swapData` from the Routes API.
2. The user reviews the swap parameters and approves the Router to spend the input token, or provides `permitData` where supported.
3. The integrator calls the Router's `swap` method. The contract executes the route; the transaction reverts if the output is below `amountMinOut` or execution occurs after `deadline`.
4. On success, the output token is sent to `recipient`.

The Router also exposes a read-only method for querying swap fees. Access controls restrict sensitive administrative operations. See [Timelock governance](./timelock) for multisig approval and execution-delay rules.

