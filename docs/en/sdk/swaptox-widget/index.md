---
title: swaptox-widget
description: Embed the SwaptoX swap interface in a browser application.
---

# swaptox-widget

`@swaptox/widget` is an embeddable swap aggregator interface for browser applications. Create a widget instance and mount it in a page container to let users view routes and submit swaps.

## Quick start

1. Install `@swaptox/widget` using the [installation guide](./installation).
2. Add a container to your page and create a widget as described in [Initialization](./initialization).
3. Configure the network, language, and theme in [Configuration](./configuration).
4. To share wallet state and transaction handling with SwaptoX Connect, follow [Pairing with swaptox-connect](./connect-integration).

The widget can also run without `swaptox-connect`. In that setup, your app handles the wallet and the widget's `approve`, `permit`, and `swap` events.

Source code: [github.com/swaptox/swaptox-widget](https://github.com/swaptox/swaptox-widget)

## Guides

- [Installation](./installation)
- [Initialization](./initialization)
- [Configuration](./configuration)
- [Methods](./methods)
- [Events](./events)
- [Pairing with swaptox-connect](./connect-integration)

