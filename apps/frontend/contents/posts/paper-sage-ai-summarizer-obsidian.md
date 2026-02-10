---
title: "Claude APIで論文要約を自動化！Obsidian連携の研究支援ツールを作った話"
emoji: "🖥️"
date: "2026-02-11"
created_at: "2026-02-10T19:44:34.601Z"
updated_at: "2026-02-10T19:47:18.874Z"
draft: true
slug: "paper-sage-ai-summarizer-obsidian"
tags: ["Claude API", "Obsidian", "Python", "研究ツール", "自動化"]
---

## Claude APIで論文要約を自動化！Obsidian連携の研究支援ツールを作った話

## はじめに：論文を読む前の「地図」が欲しかった

経営学を研究していると、月に20-30本ほどの論文を読む必要があります。しかし、いきなり本文を読み始めても全体像が掴めず、効率が悪い。そこで「論文を読む前の地図」として機能する要約を自動生成するツールを作ることにしました。

要件はシンプル：

- PDFをダウンロードフォルダに入れるだけで自動要約
- 論文タイプ（実証/理論/レビュー）に応じた最適な要約
- Obsidianで管理できる形式
- **コストは月300円以内**

結論から言うと、Claude APIを使って完璧に実現できました。

## なぜClaude APIを選んだのか

### 料金比較：月20-30本でいくらかかる？

まず重要なのはコスト。1論文あたり平均15,000トークン（入力）、1,500トークン（出力）として計算しました。

| モデル                | 1論文      | 月30本      | 特徴                      |
| --------------------- | ---------- | ----------- | ------------------------- |
| Claude Haiku 4.5      | 約1.4円    | 約42円      | 高速・超低コスト          |
| **Claude Sonnet 4.5** | **約10円** | **約300円** | **品質と価格のバランス◎** |
| Claude Opus 4.5       | 約50円     | 約1,500円   | 最高精度                  |

経営学系の論文は複雑な数式が少ないため、**Sonnet 4.5で十分高品質な要約が得られる**と判断。コーヒー2杯分で1ヶ月使えるコスパです。

### なぜPythonか？

他の選択肢も検討しましたが、Pythonが圧倒的に有利でした：

- **PDF処理ライブラリが豊富**（PyPDF2, pdfplumber等）
- **Anthropic公式SDK**があり、シンプルに書ける
- **ファイル監視も簡単**（watchdogライブラリ）
- **1つの言語で完結**（保守しやすい）

## システム設計

### ディレクトリ構造

```
/Myprogram/paper-sage/          # プログラム本体
├── venv/                        # 仮想環境
├── process_papers.py            # メインスクリプト
├── requirements.txt
└── .env                         # API Key

/Documents/Obsidian Vault/       # Obsidian側
├── MyPage/Research/
│   ├── downloads/               # PDFを投げ込む
│   ├── empirical/               # 実証論文
│   │   └── paper_name/
│   │       ├── paper.pdf
│   │       └── summary.md
│   ├── theoretical/             # 理論論文
│   └── review/                  # レビュー論文
└── _prompts/                    # プロンプト管理
    ├── system.md
    ├── empirical.md
    ├── theoretical.md
    └── review.md
```

**プログラムとObsidianを分離**した理由：

- Obsidianの同期対象を減らす
- バージョン管理がしやすい
- 複数のvaultで使い回せる

### 論文タイプ別プロンプト設計

論文には3つのタイプがあり、それぞれ求められる要約内容が違います。

#### 共通システムプロンプト

```markdown
**Role:** あなたは経営学のトップジャーナル（AMJ, ASQ, AMR, SMJ等）の
査読経験が豊富なシニア・スカラーです。

**Task:** 以下の論文を、大学院生が精読を始める前の「地図」として
機能するように、指定の項目に沿って構造化して要約してください。
```

重要なポイント：

- **数式はLaTeX形式で抽出**（実証論文の場合）
- **日本語なら1,200文字以内、英語なら400単語以内**
- **推測で補完しない**（論文に書かれていることのみ）

#### 実証論文用プロンプト

```markdown
1. Research Question: 解決しようとしている問いは何か？
2. Theoretical Framework: どの理論に基づいているか？
3. Hypothesis: 主要な仮説は何か？
4. Methodology: サンプル、データ収集、分析手法（数式は$LaTeX$）
5. Key Findings: 分析結果の核心
6. Managerial Implications: 実務的な示唆
7. Limitations: 研究の限界
8. Pre-reading Guide: 精読時に注視すべき点
```

#### 理論論文用・レビュー論文用

それぞれのタイプに応じた項目を設定。プロンプトは`.md`ファイルで管理するため、**Obsidianで編集可能**です。

## 実装のポイント

### 1. 論文タイプの自動判定

```python
def detect_paper_type(self, text):
    """論文タイプを自動判定"""
    text_lower = text.lower()

    empirical_keywords = ['hypothesis', 'regression', 'sample', 'statistical']
    theoretical_keywords = ['proposition', 'framework', 'conceptual']
    review_keywords = ['literature review', 'meta-analysis']

    # キーワードの出現回数でスコアリング
    empirical_score = sum(1 for kw in empirical_keywords if kw in text_lower)
    # ... (以下同様)

    return max(scores, key=scores.get)
```

精度が気になる場合は、手動指定も可能：

```bash
python process_papers.py empirical
```

### 2. ローディングアニメーション

Claude APIは数秒〜数十秒かかるため、処理中であることを視覚的に示す必要がありました。

```python
def summarize(self, text, paper_type):
    # ローディングアニメーション
    stop_loading = threading.Event()

    def loading_animation():
        frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
        idx = 0
        while not stop_loading.is_set():
            print(f"\r  🤖 Claude API呼び出し中 {frames[idx % len(frames)]}",
                  end="", flush=True)
            idx += 1
            time.sleep(0.1)

    loading_thread = threading.Thread(target=loading_animation, daemon=True)
    loading_thread.start()

    try:
        message = self.client.messages.create(...)
    finally:
        stop_loading.set()
        loading_thread.join()
        print(f"\r  ✅ Claude API呼び出し完了")
```

実行すると：

```
  🤖 Claude API呼び出し中 ⠹
```

こんな感じでスピナーが回転します。

### 3. エラーハンドリング

PDFの移動に失敗した場合、要約生成に失敗した場合など、各ステップでエラーハンドリングを実装：

```python
try:
    summary = self.summarize(text, paper_type)
except Exception as e:
    print(f"  ❌ 要約エラー: {e}")
    # PDFを元に戻す
    new_pdf_path.rename(pdf_path)
    return
```

## セットアップ方法

### 1. プロジェクト作成

```bash
# プロジェクトディレクトリ作成
mkdir paper-sage && cd paper-sage

# 仮想環境作成
python3 -m venv venv
source venv/bin/activate

# 依存関係インストール
pip install anthropic PyPDF2 python-dotenv
pip freeze > requirements.txt
```

### 2. Obsidian側のディレクトリ作成

```bash
mkdir -p "~/Documents/Obsidian Vault/MyPage/Research/downloads"
mkdir -p "~/Documents/Obsidian Vault/MyPage/Research/empirical"
mkdir -p "~/Documents/Obsidian Vault/MyPage/Research/theoretical"
mkdir -p "~/Documents/Obsidian Vault/MyPage/Research/review"
mkdir -p "~/Documents/Obsidian Vault/_prompts"
```

### 3. 環境変数設定

`.env`ファイルを作成：

```bash
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
OBSIDIAN_VAULT_PATH=/Users/username/Documents/Obsidian Vault
```

**注意**: `.env`ファイルではスペースをそのまま書いてOK（エスケープ不要）

### 4. プロンプトファイル作成

`_prompts/`ディレクトリに4つのMarkdownファイル：

- `system.md` - 共通システムプロンプト
- `empirical.md` - 実証論文用
- `theoretical.md` - 理論論文用
- `review.md` - レビュー論文用

## 使い方

### 基本的なワークフロー

```bash
# 1. 論文PDFをダウンロードフォルダに保存
# ~/Documents/Obsidian Vault/MyPage/Research/downloads/

# 2. スクリプト実行
cd paper-sage
source venv/bin/activate
python process_papers.py

# 3. Obsidianで要約を確認
```

### 実行例

```bash
$ python process_papers.py

✅ プロンプトファイル読み込み完了

============================================================
📚 3本のPDFを処理します
============================================================

[1/3]
============================================================
📄 処理中: strategic_management_2024.pdf
============================================================
  ✅ テキスト抽出完了: 45,234 文字
  📊 判定スコア - empirical:8, theoretical:2, review:1
  📋 判定結果: empirical
  📁 ディレクトリ作成: MyPage/Research/empirical/strategic_management_2024
  📦 PDF移動完了
  🤖 Claude API呼び出し中 ⠹
  ✅ Claude API呼び出し完了
  ✅ 保存完了: summary.md

============================================================
🎉 処理完了！
   成功: 3/3本
============================================================
```

### エイリアス設定（オプション）

`~/.zshrc`に追加すると、どこからでも実行可能：

```bash
alias paper-sage="cd ~/Myprogram/paper-sage && source venv/bin/activate && python process_papers.py && deactivate && cd -"
```

使い方：

```bash
paper-sage  # これだけ！
```

## 生成される要約の例

Obsidianで開くと、こんな感じのMarkdownファイルが生成されます：

```markdown
---
created: 2026-02-11T15:30:00
paper_type: empirical
source: [[strategic_management_2024.pdf]]
---

1. **Research Question:** この研究は、企業のダイナミック・ケイパビリティが
   競争優位にどのように影響するかを検証している。

2. **Theoretical Framework:** リソース・ベースド・ビューとダイナミック・
   ケイパビリティ理論を統合した枠組みを採用。

3. **Hypothesis:**

   - H1: ダイナミック・ケイパビリティは企業業績に正の影響を与える
   - H2: 環境の不確実性がこの関係を調整する

4. **Methodology:**

   - サンプル: 製造業500社、10年間のパネルデータ
   - 分析: 固定効果モデル
   - $y_{it} = \beta_0 + \beta_1 DC_{it} + \beta_2 X_{it} + \alpha_i + \epsilon_{it}$

5. **Key Findings:** ...

（以下略）
```

## コスト実績

実際に30本の論文を処理した結果：

- **総コスト**: 約280円
- **1論文あたり**: 約9.3円
- **処理時間**: 1論文あたり5-15秒

想定通り、月300円以内に収まりました。

## 運用上の工夫

### 常時起動 vs バッチ処理

当初はファイル監視で自動化することも検討しましたが、以下の理由で**バッチ処理**を選択：

- 月20-30本なら週1回の実行で十分
- リソースの無駄がない
- 処理のコントロールがしやすい

必要に応じて、`watchdog`ライブラリで常時監視も可能です。

### プロンプトの改善サイクル

プロンプトはObsidian内の`.md`ファイルで管理しているため：

- Obsidianで直接編集可能
- プレビューしながら調整できる
- バージョン管理も簡単

実際に使ってみて「もっと具体例が欲しい」と思ったら、すぐにプロンプトを修正できます。

## 今後の拡張案

現在のシステムは最小限の機能ですが、以下のような拡張が可能です：

### 1. メタデータ自動抽出

- タイトル、著者、出版年を自動抽出
- Obsidianのタグとして自動付与

### 2. 参考文献リンク

- 引用している論文を検出
- Obsidian内の他の論文とリンク

### 3. Dataview連携

- 論文データベースとして活用
- タイプ別、年度別の集計

### 4. 複数モデルの併用

- 重要な論文だけOpus 4.5で再要約
- 軽く読む論文はHaiku 4.5でコスト削減

## まとめ

**Claude APIを使った論文要約自動化**は、想像以上にコスパが良く、実用的でした。

✅ **月300円で20-30本処理**できる  
✅ **論文タイプに応じた最適な要約**  
✅ **Obsidianとシームレスに統合**  
✅ **セットアップは1時間程度**

研究者、大学院生にとって、論文を読む効率が劇的に上がるツールになると思います。

ソースコードは[GitHub](https://github.com/yourusername/paper-sage)で公開予定です。

---

**関連記事**

- Obsidianで研究ノート管理を始める方法
- Claude APIの料金体系完全ガイド
- 経営学研究に役立つPythonツール集

**使用技術**

- Python 3.11
- Claude API (Sonnet 4.5)
- PyPDF2
- python-dotenv
- Obsidian
