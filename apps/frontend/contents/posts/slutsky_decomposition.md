---
title: "スルツキー分解"
emoji: "✂️"
date: "2026-06-10"
created_at: "2026-06-10T00:00:00.000Z"
updated_at: "2026-06-10T14:30:53.187Z"
draft: false
slug: "slutsky_decomposition"
tags:
  - "economics"
  - "mathematica"
---

# スルツキー分解（Slutsky Decomposition）

## 概念

財の価格変化が需要量に与える効果を**代替効果**と**所得効果**に分解すること。

$$\underbrace{\frac{\partial x_i}{\partial p_j}}_{\text{全効果}} = \underbrace{\frac{\partial h_i}{\partial p_j}}_{\text{代替効果}} - \underbrace{x_j \frac{\partial x_i}{\partial I}}_{\text{所得効果}}$$

---

## 各項の意味

### 全効果（左辺）
財 $j$ の価格 $p_j$ が上がったとき、マーシャル需要 $x_i$ がどれだけ変わるか。所得は名目上固定。

### 代替効果（右辺第1項）
価格変化後も**同じ効用を維持**したとき（＝補償需要の変化）、需要がどれだけ変わるか。純粋に「相対価格の変化」への反応。

### 所得効果（右辺第2項）
価格変化によって**実質所得が変化**したことによる需要への影響。  
$x_j$（消費量）× $\frac{\partial x_i}{\partial I}$（所得1単位増加への需要反応）。

---

## 導出

ヒックス需要とマーシャル需要の関係式：

$$h_i(p, \bar{u}) = x_i(p,\; e(p, \bar{u}))$$

両辺を $p_j$ で微分する：

$$\frac{\partial h_i}{\partial p_j} = \frac{\partial x_i}{\partial p_j} + \frac{\partial x_i}{\partial I} \cdot \frac{\partial e}{\partial p_j}$$

シェパードの補題 $\frac{\partial e}{\partial p_j} = h_j = x_j$ を代入して整理：

$$\frac{\partial x_i}{\partial p_j} = \frac{\partial h_i}{\partial p_j} - x_j \frac{\partial x_i}{\partial I}$$

---

## 代替効果は支出関数の2階偏微分

補償需要はシェパードの補題より支出関数の1階偏微分：

$$e(p, \bar{u}) \xrightarrow{\partial / \partial p_i} h_i(p, \bar{u}) \xrightarrow{\partial / \partial p_j} S_{ij}$$

つまり代替効果（スルツキー行列の成分）は支出関数の**2階偏微分**：

$$S_{ij} = \frac{\partial h_i}{\partial p_j} = \frac{\partial^2 e(p, \bar{u})}{\partial p_i \, \partial p_j}$$

---

## スルツキー行列の性質

1. **対称性**：$S_{ij} = S_{ji}$（ヤングの定理：偏微分の順序交換可能）
2. **負値半正定値**：$S_{ii} \leq 0$（自己価格への代替効果は常に非正）
3. **斉次性**：$\sum_j S_{ij} p_j = 0$

---

## 代替効果・所得効果の直感

財 $j$ の価格が上がったとき、消費者には2つのことが同時に起きる：

- **代替効果**：財 $j$ が割高になったので他の財に乗り換える（相対価格への反応）
- **所得効果**：実質的に貧しくなる（実質所得の低下への反応）

スルツキー分解はこの2つを切り分けるツール。補償需要（所得を補填して効用を一定に保つ）を使うことで所得効果を除去し、代替効果だけを取り出す。

---

## 財の分類との関係

| 財の種類 | 所得効果 | 全効果（自己価格） |
|---|---|---|
| 正常財 | $\frac{\partial x_i}{\partial I} > 0$ | 必ず負（右下がり需要曲線） |
| 下級財 | $\frac{\partial x_i}{\partial I} < 0$ | 通常は負 |
| ギッフェン財 | $\frac{\partial x_i}{\partial I} < 0$（かつ大） | 正（右上がり需要曲線） |

ギッフェン財は所得効果が代替効果を上回るケース。補償需要（代替効果のみ）は常に右下がり。

---

## まとめ

$$e(p, \bar{u}) \;\xrightarrow{\text{シェパード}}\; h_i \;\xrightarrow{\text{価格微分}}\; S_{ij}$$

支出関数 → 補償需要 → 代替効果、という2段階の微分で全てつながっている。スルツキー行列の対称性もこの構造から自然に導かれる。
