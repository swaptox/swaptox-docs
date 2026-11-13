---
title: 安装
description: 使用 pnpm 安装 SwaptoX Widget SDK，也可以通过 CDN 导入。
---

# 安装

```sh
pnpm add @swaptox/widget
```

在浏览器代码中导入 `createWidget`：

```ts
import { createWidget } from '@swaptox/widget'
```

不使用项目构建工具时，也可以从 `esm.sh` 导入 ESM 包：

```ts
import { createWidget } from 'https://esm.sh/@swaptox/widget'
```

Widget 需要浏览器 DOM 环境。请在挂载元素已出现在页面后创建实例。

