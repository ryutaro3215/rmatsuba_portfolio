---
title: "これはブログ機能を試すためのファイルです"
emoji: "📘"
date: "2026-01-23"
created_at: "2026-01-23T13:54:26.119Z"
updated_at: "2026-01-23T19:46:14.959Z"
draft: true
slug: "this-is-test-article"
tags: ["test", "blog", "functionality", "確認"]
---

React-MarkdownとRemarkGfmの機能を網羅的にテストするための、包括的なマークダウンテンプレートを作成しました。

このファイルをレンダリングすることで、スタイル崩れやシンタックスハイライト、テーブル、タスクリストなどの拡張機能が正しく動作しているか一目で確認できます。

---

# 1. 見出し（Headers）

# H1 見出し

## H2 見出し

### H3 見出し

#### H4 見出し

##### H5 見出し

---

# 2. テキスト装飾（Emphasis）

- **太字 (Bold)**: `**bold text**`
- _斜体 (Italic)_: `*italic text*`
- **_太字かつ斜体_**: `***bold & italic***`
- ~~打ち消し線 (Strikethrough)~~: `~~strikethrough~~` (RemarkGfm)

---

# 3. リスト（Lists）

### 無順序リスト

- アイテム 1
- アイテム 2
- ネストされたアイテム A
- ネストされたアイテム B

### 順序付きリスト

1. 最初のステップ
2. 次のステップ
3. 最後のステップ

### タスクリスト (RemarkGfm)

- [x] 完了したタスク
- [ ] 未完了のタスク
- [ ] 次の予定

---

# 4. コード（Code）

### インラインコード

これは `const test = "Hello"` のようなインラインコードです。

### コードブロック（シンタックスハイライト）

```typescript
function greet(name: string): string {
  console.log(`Hello, ${name}!`);
  return "Success";
}

const value = 42;
```

---

# 5. 表 (Tables - RemarkGfm)

| 機能                   | ステータス | 備考                     |
| ---------------------- | ---------- | ------------------------ |
| React-Markdown         | OK         | 基本機能                 |
| RemarkGfm              | OK         | 拡張機能                 |
| シンタックスハイライト | Ready      | PrismやHighligh.jsが必要 |

---

# 6. 引用とリンク（Quotes & Links）

> これは引用文です。
> 複数行にわたる引用のテストも行います。
> -- 著者名

[Googleへのリンク](https://www.google.com)

自動リンク (RemarkGfm): [https://github.com/remarkjs/remark-gfm](https://github.com/remarkjs/remark-gfm)

---

# 7. 画像（Images）

外部ソースからの画像表示テストです。

![テスト用の風景画像](https://picsum.photos/id/237/200/300)

_（画像が枠内に収まっているか、代替テキストが正しく処理されているか確認してください）_

---

# 8. 水平線（Horizontal Rules）

---

# 9. 数式 (LaTeX)

ここでは `remark-math` と `rehype-katex` の動作を確認します。

### インライン数式

文章の中に数式を含めるテストです。
例えば、オイラーの等式は $e^{i\pi} + 1 = 0$ です。また、二次方程式 $ax^2 + bx + c = 0$ の解の公式は $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ となります。

### ディスプレイ数式

独立した行として表示される大きな数式のテストです。

$$
\int_{a}^{b} f(x) \,dx = F(b) - F(a)
$$

行列の表示テスト：

$$
\begin{pmatrix}
1 & a & a^2 \\
1 & b & b^2 \\
1 & c & c^2
\end{pmatrix}
$$

総和記号と極限：

$$
\lim_{n \to \infty} \sum_{k=1}^{n} \frac{1}{k^2} = \frac{\pi^2}{6}
$$

---

### 次のステップ

このマークダウンを実際の環境で表示して、特に**テーブルの枠線**や**コードブロックの背景色**が正しく当たっているか確認してみてください。

もし特定のライブラリ（`rehype-highlight`など）の導入方法や、CSSでのスタイリング方法についても詳しく知りたい場合は、いつでも教えてくださいね。
