---
title: Product overview
description: An overview of SwaptoX APIs, SDKs, and on-chain swap execution.
---

# Product overview

SwaptoX is a token swap aggregator that provides route data and on-chain execution for supported networks. Applications can use the ready-made Widget, connect a wallet with the Connect SDK, or build a custom interface with the public API.

## Main components

- **Routes API:** returns token and price information, quotes, and the route data used to prepare a swap.
- **`swaptox-widget`:** an embeddable swap interface for applications that want a ready-to-use trading UI.
- **`swaptox-connect`:** wallet discovery, connection, and transaction support for DApps.
- **Router contracts:** execute a selected route on-chain after the user authorizes the input token or provides a supported Permit signature.

## Swap flow

1. The application requests a quote and route for the selected network and token pair.
2. The user reviews the quote and swap settings in the Widget or the application's own interface.
3. The wallet authorizes the input token through an approval transaction or a supported Permit flow, then submits the swap to the Router.
4. The Router executes the route and sends the output token to the specified recipient.

The Widget can be paired with `swaptox-connect` to share wallet state and handle its approval, Permit, and swap flow. A custom integration can use the API and contracts directly.

## Choose an integration path

- Use [swaptox-widget](/sdk/swaptox-widget/) to embed the swap interface.
- Add [swaptox-connect](/sdk/swaptox-connect/) when your app needs wallet connection features or when pairing it with the Widget.
- Use the [API](/api/) and [Router documentation](/contracts/router) to build a custom swap experience.

Start with the [Getting started guide](./getting-started).

