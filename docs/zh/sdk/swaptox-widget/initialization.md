---
title: 初始化
description: 创建 Widget 实例并挂载到浏览器页面。
---

# 初始化

```ts
import { createWidget } from '@swaptox/widget'

const widget = createWidget({
  container: '#swaptox-widget',
  chain: 'base',
  lang: 'zh-Hans',
  theme: 'light'
})
```

调用 `createWidget` 前，先在页面中添加挂载元素：

```html
<div id="swaptox-widget"></div>
```

`container` 可以是 CSS 选择器或 `HTMLElement`。初始化后，浏览器全局对象 `window.$swaptoxWidget` 指向同一个实例：

```ts
widget === window.$swaptoxWidget
```

也可以不传 `container`，自行挂载 Widget：

```ts
const widget = createWidget({ chain: 'base', lang: 'zh-Hans', theme: 'light' })
document.querySelector('.swap-container')?.appendChild(widget.$el)
```

页面或组件不再需要 Widget 时，调用 `widget.destroy()`。

