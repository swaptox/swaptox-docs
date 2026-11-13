---
title: Timelock 治理
description: SwaptoX Timelock 的目标治理机制与待定事项。
---

# Timelock 治理

**部署状态：待定。**

Timelock 治理规则：协议管理操作采用 **2/3 多签审批**，并在执行前强制等待至少 **3 天**。

## 治理规则

- 仅允许对列入白名单的合约和函数执行管理操作。
- 管理操作须满足 2/3 多签审批。
- 操作至少等待 3 天后才可执行。
- 紧急 Guardian 机制可在多签治理不可用时支持所有权恢复。

## 待定事项

- Timelock 部署与最终治理参数：待定。
- Base 和 Rootstock 部署地址：待定，见[部署地址](./deployments)。
