---
title: Initialization
description: Create a widget instance and mount it into a browser page.
---

# Initialization

```ts
import { createWidget } from '@swaptox/widget'

const widget = createWidget({
  container: '#swaptox-widget',
  chain: 'base',
  lang: 'en',
  theme: 'light'
})
```

Add the mount element to the page before calling `createWidget`:

```html
<div id="swaptox-widget"></div>
```

The `container` option accepts a CSS selector or an `HTMLElement`. After initialization, the same instance is available as `window.$swaptoxWidget`:

```ts
widget === window.$swaptoxWidget
```

You can omit `container` and mount the widget yourself:

```ts
const widget = createWidget({ chain: 'base', lang: 'en', theme: 'light' })
document.querySelector('.swap-container')?.appendChild(widget.$el)
```

Call `widget.destroy()` when the page or component no longer needs the widget.

