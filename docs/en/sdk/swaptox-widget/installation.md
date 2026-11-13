---
title: Installation
description: Install the SwaptoX Widget SDK with pnpm or load it from a CDN.
---

# Installation

```sh
pnpm add @swaptox/widget
```

Import `createWidget` in browser code:

```ts
import { createWidget } from '@swaptox/widget'
```

For a page without a package build step, import the ESM package from `esm.sh`:

```ts
import { createWidget } from 'https://esm.sh/@swaptox/widget'
```

The widget uses the browser DOM. Create it after the mount element is available in the page.

