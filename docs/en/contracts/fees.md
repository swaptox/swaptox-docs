---
title: Fees
description: Swap fee units and referral sharing for the SwaptoX Router.
---

# Fees

The Router exposes `getSwapFeeBP(account, token)`, a read-only method for querying the swap fee for an account and token. Fees are denominated in BP (basis points):

- `10,000 BP = 100%`
- `20 BP = 0.2%`

The base fee, `baseFee`, is `20 BP`, or `0.2%`. Pass the account and token addresses to query the corresponding fee.

## Referral share

The `swap` method accepts a referrer address through `referral`. The referrer receives a **30%–50% share of the fee**.

## Network fees

Transactions also incur gas fees on the network where they are executed. The actual gas cost varies with network conditions and the execution route.


