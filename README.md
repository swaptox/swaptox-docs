# SwaptoX 文档

基于 VitePress、TypeScript 和 pnpm 的中英文文档站点。

## 开始使用

```sh
pnpm install
pnpm dev
```

开发服务器默认运行在 [http://localhost:3002](http://localhost:3002)。

## 常用命令

- `pnpm dev`：启动开发服务器
- `pnpm build`：生成静态站点
- `pnpm preview`：预览构建结果
- `pnpm typecheck`：检查 TypeScript 配置

英文文档位于 `docs/en/`，中文文档位于 `docs/zh/`。英语内容映射到根路径，中文内容位于 `/zh/`。站点导航、侧边栏和语言选项在 `docs/.vitepress/config.ts` 中维护。

