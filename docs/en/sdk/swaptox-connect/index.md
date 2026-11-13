---
title: swaptox-connect
description: A multi-wallet connection SDK for DApps, with EIP-6963, WalletConnect, and Coinbase Wallet support.
---

# swaptox-connect

`@swaptox/connect-ui` and `@swaptox/connect-core` provide a unified interface for wallet discovery, connection, and interaction in DApps. The SDK is built with TypeScript and Lit and can be integrated into frontend frameworks such as React.

Supported wallet connection methods:

- Discover browser wallets through EIP-6963.
- Connect wallets through WalletConnect.
- Connect Coinbase Wallet through the Coinbase Wallet SDK.

## Quick start

1. Add the SDK and its dependencies using the [installation guide](./installation).
2. Call `createConnect` as described in [Initialization](./initialization).
3. Register [event listeners](./events) during app startup, then call `autoConnect()` to restore a valid connection.
4. Call `checkConnect()` before sending a transaction to validate the account and network.

Source code: [github.com/swaptox/swaptox-connect](https://github.com/swaptox/swaptox-connect)

## Guides

- [Installation](./installation)
- [Initialization](./initialization)
- [Network, theme, and language configuration](./configuration)
- [Wallet connection and transactions](./wallet-connection)
- [Best practices and examples](./best-practices)
- [Events](./events)
- [API reference](./api-reference)

