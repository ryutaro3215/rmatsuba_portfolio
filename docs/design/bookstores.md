# /bookstores 機能 要件定義

## 概要

訪れた書店の情報をまとめるセクション。書店一覧ページと各書店の詳細ページから構成される。

---

## ルーティング

| パス | 内容 |
|------|------|
| `/bookstores` | 書店一覧ページ |
| `/bookstores/:id` | 書店詳細ページ |

---

## データソース

microCMS API からデータを取得する（`/apps/frontend/src/lib/microcms.ts` に追記）。
取得ロジックは `/books` と同様のパターンで実装する。

### microCMS エンドポイント

- エンドポイント名: `bookstores`

### 書店データスキーマ

| フィールド | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| `id` | string | ◯ | microCMS が自動付与 |
| `name` | string | ◯ | 書店名 |
| `address` | string | ◯ | 住所（都道府県〜番地） |
| `prefecture` | string | ◯ | 都道府県（一覧カードで明示表示） |
| `nearestStation` | string | ◯ | 最寄り駅 |
| `type` | enum | ◯ | 書店種別：`new`（新本屋）/ `used`（古本屋）。将来的に細分化・追加の可能性あり |
| `features` | string | ◯ | 書店の特徴・説明文 |
| `rating` | number | ◯ | 評価（1〜5） |
| `images` | image[] | ◯ | 画像（最大5枚。先頭をサムネイルに使用） |
| `mapUrl` | string | ◯ | Google Maps 埋め込み URL（手動で設定） |

---

## ページ仕様

### 一覧ページ（`/bookstores`）

- ヘッダーセクション：他ページと同様の editorial スタイル（fol. 005 / Bookstores）
- 書店カードのグリッドレイアウト
  - 表示項目：サムネイル画像・書店名・**都道府県（明示）**・書店種別バッジ
  - カードクリックで詳細ページへ遷移

### 詳細ページ（`/bookstores/:id`）

- 写真ギャラリー（最大5枚）
- 詳細情報：書店名・都道府県・住所・最寄り駅・書店種別・評価・特徴
- 地図表示（後述）

---

## 地図表示

### 方針

詳細ページに Google Maps を iframe で埋め込む。
**完全無料・API キー不要**。埋め込み URL は microCMS で書店ごとに手動設定する。

### 実装概要

```tsx
<iframe
  src={bookstore.mapUrl}
  width="100%"
  height="300"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

---

## デザイン方針

- 配色・フォント・スペーシングは既存サイト（`/books` など）と統一
- CSS 変数（`--serif`, `--mono`, `--ink`, `--bg`, `--accent` 等）を使用
- 実装時は以下のスキルを適宜活用
  - `frontend-design`：ビジュアルデザインの方向性
  - `baseline-ui`：Tailwind クラス順序・タイポグラフィ・アクセシビリティ
  - `fixing-accessibility`：ARIA・キーボードナビ・フォーカス管理など

---

## SEO / OGP

一覧・詳細ページともに `+Head.tsx` を作成し、title・description・OGP タグを設定する。
詳細ページは書店名・特徴をもとに動的生成する。

---

## レスポンシブ対応

モバイル・PC どちらでも UX が毀損されないよう全ページでレスポンシブ対応を行う。
一覧カードのグリッド列数は画面幅に応じて柔軟に調整する（固定列数は設けない）。

---

## プリレンダリング

`books/@id` と同様に、ビルド時に全書店の詳細ページを静的生成する。
`+onBeforePrerenderStart.ts` で全 ID を列挙する。

---

## ナビゲーション

`Header.tsx` の `navItems` に `{ to: "/bookstores", label: "Bookstores", num: "V" }` を追加する。

---

## 実装順序

1. microCMS にエンドポイント・スキーマを設定（手動作業）
2. `packages/shared/src/bookstore.ts` に Zod スキーマ・型定義を追加
3. `packages/shared/src/index.ts` に export を追加 → `make typebuild`
4. `apps/frontend/src/lib/microcms.ts` に `getAllBookstores`, `getBookstoreById` を追加
5. `apps/frontend/src/pages/bookstores/+config.ts` 作成
6. `apps/frontend/src/pages/bookstores/+data.ts` 作成
7. `apps/frontend/src/pages/bookstores/+Page.tsx`（一覧）作成
8. `apps/frontend/src/pages/bookstores/+Head.tsx`（一覧 SEO）作成
9. `apps/frontend/src/pages/bookstores/@id/+data.ts` 作成
10. `apps/frontend/src/pages/bookstores/@id/+onBeforePrerenderStart.ts` 作成
11. `apps/frontend/src/pages/bookstores/@id/+Page.tsx`（詳細）作成
12. `apps/frontend/src/pages/bookstores/@id/+Head.tsx`（詳細 SEO）作成
13. `apps/frontend/src/components/Header.tsx` にナビ項目追加（`V / Bookstores`）
