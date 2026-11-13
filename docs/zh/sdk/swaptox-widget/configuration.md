---
title: 配置
description: 设置 Widget 的网络、外观、语言、代币选项和可用控件。
---

# 配置

创建实例时将配置项传给 `createWidget`。部分选项也可以在初始化后通过[实例方法](./methods)修改。

## 界面与网络配置

| 配置项 | 说明 |
| --- | --- |
| `container` | 挂载目标，可以是 CSS 选择器或 `HTMLElement`。省略时可自行挂载 `widget.$el`。 |
| `chain` | 初始网络。内置支持 `base` 和 `rootstock`；省略时优先使用已保存的网络，否则使用 `base`。 |
| `userAddress` | 初始钱包地址。 |
| `referral` | 与当前 Widget 会话关联的邀请地址。 |
| `theme` | `light`、`dark` 或 `stxui`，默认值为 `light`。 |
| `lang` | 初始语言。内置值：`en`、`zh-Hans`、`zh-Hant`、`ja`、`ko`、`th`、`pt-BR`、`id`、`vi`。默认跟随浏览器语言，不支持时回退到 `en`。 |
| `langOptionsList` | 自定义语言选择项，每项使用 `{ id, name, symbol }`。 |
| `isUpdateHtmlLang` | Widget 语言切换时同步更新页面的 `<html lang>` 属性，默认值为 `false`。 |
| `disabledMiniPriceCard` | 隐藏迷你价格卡片，默认值为 `false`。 |
| `disabledHistoryIcon` | 隐藏交易历史图标，默认值为 `false`。 |
| `disabledCustomRecipient` | 禁用自定义接收地址，默认值为 `false`。 |
| `disabledChooseRoute` | 禁用路由选择，使用系统选出的路由，默认值为 `false`。 |
| `smallScreenCardFull` | 小屏幕下移除卡片圆角，使其铺满可用区域，默认值为 `false`。 |
| `swapButton` | 是否显示 Swap 按钮，默认值为 `true`。隐藏后可通过 `openConfirmSwapModal()` 打开确认框。 |
| `slippagLayout` | 将滑点控件放在 `top` 或 `bottom`，默认值为 `top`。请按接口名称使用 `slippagLayout` 拼写。 |

## 限制代币选项

使用 `limitOptionalToken` 按网络设置默认代币，并限制用户可选的代币列表：

```ts
const widget = createWidget({
  container: '#swaptox-widget',
  chain: 'base',
  limitOptionalToken: {
    base: {
      defaultTokenIn: '0x833589fcd6edb6e08f4c7c32d4f71b54da02913',
      disabledTokenIn: false,
      defaultTokenOut: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      disabledTokenOut: true,
      limitOptionalList: [
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
        '0x833589fcd6edb6e08f4c7c32d4f71b54da02913'
      ]
    }
  }
})
```

`limitOptionalToken` 下的键为网络名称。`disabledTokenIn` 和 `disabledTokenOut` 分别控制用户能否更改输入和输出代币。

## 自定义语言

语言包通过 `fallback` 指定回退语言。没有提供的翻译会使用回退语言中的对应文案：

```ts
const languagePack = {
  'mars-speak': {
    fallback: 'en',
    data: {
      swap: 'Trade',
      'connect-wallet': 'Connect wallet'
    }
  }
}

const widget = createWidget({
  container: '#swaptox-widget',
  lang: 'mars-speak',
  languagePack
})
```

初始化后也可以通过 `widget.setLang('mars-speak')` 切换语言。内置语言包见 [locales.js](https://github.com/swaptox/swaptox-widget/blob/main/src/data/locale/locales.js)。

## 自定义主题

通过 `fallback` 指定内置回退主题。`themeVariables` 中的值会覆盖选中主题和主题包中的同名变量：

```ts
const themePack = {
  'blue-light': {
    fallback: 'light',
    data: {
      '--stxui-theme-color': '#007aff',
      '--stxui-theme-focus-color': '#007aff80',
      '--stxui-theme-icon-color': '#007aff'
    }
  }
}

const widget = createWidget({
  container: '#swaptox-widget',
  theme: 'blue-light',
  themePack,
  themeVariables: {
    '--stxui-font-family': "'Inter', sans-serif"
  }
})
```

初始化后也可以通过 `widget.setTheme('blue-light')` 切换主题。内置主题定义见 [themes.js](https://github.com/swaptox/swaptox-widget/blob/main/src/data/theme/themes.js)。
