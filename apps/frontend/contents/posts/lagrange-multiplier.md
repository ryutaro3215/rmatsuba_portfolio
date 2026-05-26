---
title: "ラグランジュの未定乗数定理"
emoji: "🪄"
date: "2026-05-26"
created_at: "2026-05-26T04:00:43.096Z"
updated_at: "2026-05-26T04:05:11.709Z"
draft: false
slug: "lagrange-multiplier"
tags: 
 - "mathematica"
 - "analysis"
---

# ラグランジュの未定乗数定理

## 概要

等式制約 $g(x) = 0$ を満たしながら多変数関数 $f(x)$ の極値を求める手法。制約付き最適化問題を、ラグランジアンと呼ばれる新しい関数の停留点問題に書き換えることで解く。経済学・機械学習・統計学など幅広い分野で使われる最適化の基本定理。

## 数学的定義

**問題設定：**

$$\text{最大化（または最小化）} \quad f(x_1, \ldots, x_n) \quad \text{subject to} \quad g(x_1, \ldots, x_n) = 0$$

**ラグランジアンの構成：**

新たなパラメータ $\lambda$（ラグランジュ乗数）を導入し、

$$\mathcal{L}(x_1, \ldots, x_n, \lambda) = f(x_1, \ldots, x_n) - \lambda \cdot g(x_1, \ldots, x_n)$$

**極値の必要条件（$\nabla \mathcal{L} = 0$）：**

$$\frac{\partial \mathcal{L}}{\partial x_i} = \frac{\partial f}{\partial x_i} - \lambda \frac{\partial g}{\partial x_i} = 0 \quad (i = 1, \ldots, n)$$

$$\frac{\partial \mathcal{L}}{\partial \lambda} = -g(x_1, \ldots, x_n) = 0$$

## 意味的な説明

求めたいのは「$g(x) = 0$ を満たしつつ $f(x)$ が極値をとる点」であり、これは本質的に二つの条件を同時に満たすことを意味する。

**なぜ $\nabla f = \lambda \nabla g$ が極値の条件になるのか**

制約曲線 $g = 0$ 上を動ける方向を $v$ とすると、$v$ は $\nabla g$ と直交している（$\nabla g$ は制約曲線に対して垂直だから）。極値の点では制約曲線に沿ってどう動いても $f$ が変化しないので、$\nabla f \cdot v = 0$、つまり $\nabla f$ も $v$ と直交する。

$\nabla f$ と $\nabla g$ がともに $v$ と直交しているなら、両者は平行でなければならない。これを式で書くと $\nabla f = \lambda \nabla g$。

幾何学的には「$f$ の等高線と制約曲線 $g = 0$ が接している（法線方向が一致している）」ことと同値。逆に接していなければ、制約曲線に沿って $f$ をさらに改善できる方向が存在するため、その点は極値ではない。

**なぜラグランジアン $\mathcal{L}$ を作るのか**

$\nabla f = \lambda \nabla g$ と $g = 0$ という二つの条件を連立して解けばよいが、それを一つの関数の停留点問題として書き直したのが $\mathcal{L}$ である。

- $\partial \mathcal{L} / \partial x_i = 0$ → $\nabla f = \lambda \nabla g$（極値条件）
- $\partial \mathcal{L} / \partial \lambda = 0$ → $g = 0$（制約条件）

$\mathcal{L}$ の全変数での偏微分をゼロとおくだけで二つの条件が自動的に出てくる。本質的な内容は変わっておらず、二つの条件を一つの停留点問題として整理しているだけ。

## 活用される場面

- **経済学**：予算制約のもとでの効用最大化、費用最小化
- **機械学習**：SVM（サポートベクターマシン）のマージン最大化問題
- **統計学**：最尤推定における制約付き最適化
- **物理学**：拘束条件下での運動方程式の導出

## 関連概念・補足

**制約が複数ある場合**

制約が $g_1 = 0, g_2 = 0, \ldots, g_m = 0$ と複数あるときは、それぞれに乗数を導入して、

$$\mathcal{L} = f - \sum_{j=1}^m \lambda_j g_j$$

とすれば同様に解ける。

**KKT条件への拡張**

等式制約だけでなく不等式制約（$g(x) \leq 0$）を扱う拡張がKarush-Kuhn-Tucker（KKT）条件で、非線形計画法の中心的な定理。ラグランジュ法はKKT条件の特殊ケースとみなせる。

**注意点：必要条件であること**

$\nabla \mathcal{L} = 0$ は極値の**必要条件**であり、十分条件ではない。候補点が得られたあと、それが極大・極小・鞍点のいずれかを別途確認する必要がある。また $\nabla g = 0$ となる点（退化点）では定理が適用できない場合がある。
