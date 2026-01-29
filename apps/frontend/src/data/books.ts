import type { Book } from "@mysite/shared";

export const favoriteBooks: number[] = [2, 4, 5, 6];

export const books: Book[] = [
  {
    id: 1,
    title: "日本語の作文技術",
    author: "本多勝一",
    cover: "book-0001.jpg",
    genre: "語学",
    tags: ["日本語", "文章術", "ロングセラー"],
    status: "unread",
    rating: 0,
  }, // [1]
  {
    id: 2,
    title: "現代数理統計学",
    author: "竹村彰通",
    cover: "book-0002.jpg",
    genre: "数学",
    tags: ["統計学", "数理統計", "教科書"],
    status: "unread",
    rating: 0,
  }, // [2]
  {
    id: 3,
    title: "現代数理統計学の基礎",
    author: "久保川達也",
    cover: "book-0003.jpg",
    genre: "数学",
    tags: ["統計学", "共立出版", "基礎"],
    status: "unread",
    rating: 0,
  }, // [3]
  {
    id: 4,
    title: "データ解析のための数理統計入門",
    author: "久保川達也",
    cover: "book-0004.jpg",
    genre: "数学",
    tags: ["データ解析", "統計学", "入門"],
    status: "unread",
    rating: 0,
  }, // [4]
  {
    id: 5,
    title: "ミクロ経済学の力",
    author: "神取道宏",
    cover: "book-0005.jpg",
    genre: "経済学",
    tags: ["ミクロ経済学", "理論", "教科書"],
    status: "unread",
    rating: 0,
  }, // [5]
  {
    id: 6,
    title: "モダンオペレーティングシステム 第5版 上",
    author: "アンドリュー・S・タネンバウム / ハーバート・ボス",
    cover: "book-0006.jpg",
    genre: "コンピュータサイエンス",
    tags: ["OS", "オペレーティングシステム", "技術書"],
    status: "unread",
    rating: 0,
  }, // [6]
  {
    id: 7,
    title: "世界標準の経営理論",
    author: "入山章栄",
    cover: "book-0007.jpg",
    genre: "経営学",
    tags: ["ビジネス", "経営理論", "MBA"],
    status: "unread",
    rating: 0,
  }, // [7]
  {
    id: 8,
    title: "C++実践プログラミング",
    author: "Steve Oualline",
    cover: "book-0008.jpg",
    genre: "プログラミング",
    tags: ["C++", "O'Reilly", "開発"],
    status: "unread",
    rating: 0,
  }, // [8]
  {
    id: 9,
    title: "LINUXプログラミングインタフェース",
    author: "Michael Kerrisk",
    cover: "book-0009.jpg",
    genre: "プログラミング",
    tags: ["Linux", "API", "システムプログラミング"],
    status: "unread",
    rating: 0,
  }, // [9]
  {
    id: 10,
    title: "Real World HTTP 第2版",
    author: "渋川よしき",
    cover: "book-0010.jpg",
    genre: "プログラミング",
    tags: ["HTTP", "Web", "ネットワーク", "O'Reilly"],
    status: "unread",
    rating: 0,
  }, // [10]
  {
    id: 11,
    title: "問題解決力を鍛える！アルゴリズムとデータ構造",
    author: "大槻兼資",
    cover: "book-0011.jpg",
    genre: "コンピュータサイエンス",
    tags: ["アルゴリズム", "データ構造", "競技プログラミング"],
    status: "unread",
    rating: 0,
  }, // [11]
  {
    id: 12,
    title: "リレーショナルデータベース入門 [第3版]",
    author: "増永良文",
    cover: "book-0012.jpg",
    genre: "コンピュータサイエンス",
    tags: ["SQL", "RDB", "データベース"],
    status: "unread",
    rating: 0,
  }, // [12]
  {
    id: 13,
    title: "東京大学のデータサイエンティスト育成講座",
    author: "松尾豊 (監修)",
    cover: "book-0013.jpg",
    genre: "コンピュータサイエンス",
    tags: ["Python", "機械学習", "データ分析"],
    status: "unread",
    rating: 0,
  }, // [13]
  {
    id: 14,
    title: "JavaScript本格入門",
    author: "山田祥寛",
    cover: "book-0014.jpg",
    genre: "プログラミング",
    tags: ["JavaScript", "Web開発", "入門"],
    status: "unread",
    rating: 0,
  }, // [14]
  {
    id: 15,
    title: "本気で学ぶ Linux実践入門",
    author: "大竹龍史 / 山本道子",
    cover: "book-0015.jpg",
    genre: "コンピュータサイエンス",
    tags: ["Linux", "サーバー", "運用"],
    status: "unread",
    rating: 0,
  }, // [15]
  {
    id: 16,
    title: "ネットワークはなぜつながるのか 第2版",
    author: "戸根勤",
    cover: "book-0016.jpg",
    genre: "コンピュータサイエンス",
    tags: ["TCP/IP", "インフラ", "入門"],
    status: "unread",
    rating: 0,
  }, // [16]
  {
    id: 17,
    title: "プログラムはなぜ動くのか 第3版",
    author: "矢沢久雄",
    cover: "book-0017.jpg",
    genre: "コンピュータサイエンス",
    tags: ["ハードウェア", "基礎知識", "仕組み"],
    status: "unread",
    rating: 0,
  }, // [17]
  {
    id: 18,
    title: "プログラマの考え方がおもしろいほど身につく本",
    author: "V. Anton Spraul",
    cover: "book-0018.jpg",
    genre: "プログラミング",
    tags: ["思考法", "問題解決", "アルゴリズム"],
    status: "unread",
    rating: 0,
  }, // [18]
  {
    id: 19,
    title: "この一冊で全部わかる サーバーの基本",
    author: "きはしまさひろ",
    cover: "book-0019.jpg",
    genre: "コンピュータサイエンス",
    tags: ["サーバー", "インフラ", "入門"],
    status: "unread",
    rating: 0,
  }, // [19]
  {
    id: 20,
    title: "詳解 シェルスクリプト",
    author: "Arnold Robbins / Nelson H. F. Beebe",
    cover: "book-0020.jpg",
    genre: "プログラミング",
    tags: ["Shell", "Linux", "O'Reilly"],
    status: "unread",
    rating: 0,
  }, // [20]
  {
    id: 21,
    title: "マスタリングTCP/IP 入門編 第6版",
    author: "井上直也 他",
    cover: "book-0021.jpg",
    genre: "コンピュータサイエンス",
    tags: ["TCP/IP", "ネットワーク", "教科書"],
    status: "unread",
    rating: 0,
  }, // [21]
  {
    id: 22,
    title: "社会科学の哲学 入門",
    author: "吉田敬",
    cover: "book-0022.jpg",
    genre: "哲学",
    tags: ["社会科学", "科学哲学", "入門"],
    status: "unread",
    rating: 0,
  }, // [22]
  {
    id: 23,
    title: "死とは何か",
    author: "シェーリーケーガン",
    cover: "book-0023.jpg",
    genre: "哲学",
    tags: ["死", "哲学", "倫理"],
    status: "unread",
    rating: 0,
  },
  {
    id: 24,
    title: "濃霧の中の方向感覚",
    author: "鷲田清一",
    cover: "book-0024.jpg",
    genre: "哲学",
    tags: ["哲学", "倫理", "臨床哲学"],
    status: "unread",
    rating: 0,
  }, // [23]
  {
    id: 25,
    title: "中動態の世界 意志と責任の考古学",
    author: "國分功一郎",
    cover: "book-0025.jpg",
    genre: "哲学",
    tags: ["中動態", "言語学", "哲学"],
    status: "unread",
    rating: 0,
  }, // [24]
  {
    id: 26,
    title: "エルサレムのアイヒマン 悪の陳腐さについての報告",
    author: "ハンナ・アーレント",
    cover: "book-0026.jpg",
    genre: "哲学",
    tags: ["ホロコースト", "政治哲学", "倫理"],
    status: "unread",
    rating: 0,
  },
  {
    id: 27,
    title: "自由からの逃走",
    author: "エーリッヒ・フロム",
    cover: "book-0027.jpg",
    genre: "哲学",
    tags: ["自由", "ファシズム", "心理学"],
    status: "unread",
    rating: 0,
  }, // [25]
  {
    id: 28,
    title: "共感の正体",
    author: "山竹伸二",
    cover: "book-0028.jpg",
    genre: "哲学",
    tags: ["共感", "現象学", "心理療法"],
    status: "unread",
    rating: 0,
  }, // [26]
  {
    id: 29,
    title: "生成と消滅の精神史",
    author: "下西風澄",
    cover: "book-0029.jpg",
    genre: "哲学",
    tags: ["精神史", "哲学", "生命"],
    status: "unread",
    rating: 0,
  }, // [27]
  {
    id: 30,
    title: "知の考古学",
    author: "ミシェル・フーコー",
    cover: "book-0030.jpg",
    genre: "哲学",
    tags: ["構造主義", "認識論", "フランス現代思想"],
    status: "unread",
    rating: 0,
  }, // [28]
  {
    id: 31,
    title: "スピノザ (人類の知的遺産 35)",
    author: "工藤喜作",
    cover: "book-0031.jpg",
    genre: "哲学",
    tags: ["スピノザ", "伝記", "思想解説"],
    status: "unread",
    rating: 0,
  }, // [29]
  {
    id: 32,
    title: "夜と霧 新版",
    author: "ヴィクトール・E・フランクル",
    cover: "book-0032.jpg",
    genre: "哲学",
    tags: ["ホロコースト", "実存主義", "心理学"],
    status: "unread",
    rating: 0,
  }, // [30]
  {
    id: 33,
    title: "隷属への道",
    author: "F・A・ハイエク",
    cover: "book-0033.jpg",
    genre: "経済学",
    tags: ["自由主義", "社会主義", "経済思想"],
    status: "unread",
    rating: 0,
  }, // [31]
  {
    id: 34,
    title: "哲学者たちのワンダーランド",
    author: "上野修",
    cover: "book-0034.jpg",
    genre: "哲学",
    tags: ["哲学", "思想史", "入門"],
    status: "unread",
    rating: 0,
  },
  {
    id: 35,
    title: "武器になる哲学",
    author: "山口周",
    cover: "book-0035.jpg",
    genre: "哲学",
    tags: ["哲学", "思考法", "ビジネス教養"],
    status: "unread",
    rating: 0,
  }, // [32]
  {
    id: 36,
    title: "破門の哲学 スピノザの生涯と思想",
    author: "清水禮子",
    cover: "book-0036.jpg",
    genre: "哲学",
    tags: ["スピノザ", "ユダヤ教", "オランダ"],
    status: "unread",
    rating: 0,
  }, // [33]
  {
    id: 37,
    title: "リーダブルコード",
    author: "Dustin Boswell / Trevor Foucher",
    cover: "book-0037.jpg",
    genre: "プログラミング",
    tags: ["コーディング", "リファクタリング", "品質"],
    status: "unread",
    rating: 0,
  }, // [34]
  {
    id: 38,
    title: "スピノザ『神学政治論』を読む",
    author: "上野修",
    cover: "book-0038.jpg",
    genre: "哲学",
    tags: ["スピノザ", "政治哲学", "聖書解釈"],
    status: "unread",
    rating: 0,
  }, // [35]
  {
    id: 39,
    title: "はじめてのスピノザ 自由へのエチカ",
    author: "國分功一郎",
    cover: "book-0039.jpg",
    genre: "哲学",
    tags: ["スピノザ", "エチカ", "入門"],
    status: "unread",
    rating: 0,
  }, // [36]
  {
    id: 41,
    title: "スピノザ 「変性の哲学者」の思想世界",
    author: "加藤節",
    cover: "book-0041.jpg",
    genre: "哲学",
    tags: ["スピノザ", "政治思想", "思想史"],
    status: "unread",
    rating: 0,
  }, // [37]
  {
    id: 42,
    title: "知の教科書 スピノザ",
    author: "チャールズ・ジャレット",
    cover: "book-0042.jpg",
    genre: "哲学",
    tags: ["スピノザ", "解説書", "哲学史"],
    status: "unread",
    rating: 0,
  }, // [38]
  {
    id: 43,
    title: "スピノザ 人間の自由の哲学",
    author: "吉田量彦",
    cover: "book-0043.jpg",
    genre: "哲学",
    tags: ["スピノザ", "自由", "現代新書"],
    status: "unread",
    rating: 0,
  }, // [39]
  {
    id: 44,
    title: "愛するということ",
    author: "エーリッヒ・フロム",
    cover: "book-0044.jpg",
    genre: "哲学",
    tags: ["愛", "人間関係", "ベストセラー"],
    status: "unread",
    rating: 0,
  }, // [40]
  {
    id: 45,
    title: "UNIXという考え方",
    author: "Mike Gancarz",
    cover: "book-0045.jpg",
    genre: "コンピュータサイエンス",
    tags: ["UNIX", "設計思想", "哲学"],
    status: "unread",
    rating: 0,
  }, // [41]
  {
    id: 46,
    title: "Webを支える技術",
    author: "山本陽平",
    cover: "book-0046.jpg",
    genre: "コンピュータサイエンス",
    tags: ["HTTP", "REST", "Webアーキテクチャ"],
    status: "unread",
    rating: 0,
  }, // [42]
  {
    id: 47,
    title: "独習Git",
    author: "Rick Umali",
    cover: "book-0047.jpg",
    genre: "プログラミング",
    tags: ["Git", "バージョン管理", "入門"],
    status: "unread",
    rating: 0,
  }, // [43]
  {
    id: 48,
    title: "実用 Git 第3版",
    author: "Prem Kumar Ponuthorai / Jon Loeliger",
    cover: "book-0048.jpg",
    genre: "プログラミング",
    tags: ["Git", "O'Reilly", "バージョン管理"],
    status: "unread",
    rating: 0,
  }, // [44]
  {
    id: 49,
    title: "入門 データ構造とアルゴリズム",
    author: "Narasimha Karumanchi",
    cover: "book-0049.jpg",
    genre: "コンピュータサイエンス",
    tags: ["アルゴリズム", "データ構造", "O'Reilly"],
    status: "unread",
    rating: 0,
  }, // [45]
  {
    id: 50,
    title: "勉強の哲学 来たるべきバカのために",
    author: "千葉雅也",
    cover: "book-0050.jpg",
    genre: "哲学",
    tags: ["勉強法", "現代思想", "文春文庫"],
    status: "unread",
    rating: 0,
  }, // [1]
  {
    id: 51,
    title: "哲学の先生と人生の話をしよう",
    author: "國分功一郎",
    cover: "book-0051.jpg",
    genre: "哲学",
    tags: ["人生論", "対話", "朝日文庫"],
    status: "unread",
    rating: 0,
  }, // [3]
  {
    id: 52,
    title: "西洋哲学史 近代から現代へ",
    author: "熊野純彦",
    cover: "book-0052.jpg",
    genre: "哲学",
    tags: ["哲学史", "岩波新書", "教科書"],
    status: "unread",
    rating: 0,
  }, // [4]
  {
    id: 53,
    title: "「いき」の構造",
    author: "九鬼周造",
    cover: "book-0053.jpg",
    genre: "哲学",
    tags: ["美学", "日本文化", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [5]
  {
    id: 54,
    title: "デカルト入門講義",
    author: "冨田恭彦",
    cover: "book-0054.jpg",
    genre: "哲学",
    tags: ["デカルト", "近代哲学", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [6]
  {
    id: 55,
    title: "暇と退屈の倫理学",
    author: "國分功一郎",
    cover: "book-0055.jpg",
    genre: "哲学",
    tags: ["倫理学", "消費社会", "新潮文庫"],
    status: "unread",
    rating: 0,
  }, // [7]
  {
    id: 56,
    title: "はじめての構造主義",
    author: "橋爪大三郎",
    cover: "book-0056.jpg",
    genre: "哲学",
    tags: ["構造主義", "入門", "講談社現代新書"],
    status: "unread",
    rating: 0,
  }, // [8]
  {
    id: 57,
    title: "はじめてのフッサール『現象学の理念』",
    author: "竹田青嗣",
    cover: "book-0057.jpg",
    genre: "哲学",
    tags: ["フッサール", "現象学", "講談社現代新書"],
    status: "unread",
    rating: 0,
  }, // [9]
  {
    id: 58,
    title: "ハンナ・アレント全体主義という悪魔",
    author: "牧野雅彦",
    cover: "book-0058.jpg",
    genre: "哲学",
    tags: ["アレント", "全体主義", "思想史"],
    status: "unread",
    rating: 0,
  }, //
  {
    id: 59,
    title: "ハイデガー『存在と時間』入門",
    author: "轟孝夫",
    cover: "book-0059.jpg",
    genre: "哲学",
    tags: ["ハイデガー", "実存主義", "講談社現代新書"],
    status: "unread",
    rating: 0,
  }, // [10]
  {
    id: 60,
    title: "人間の建設",
    author: "小林秀雄,岡潔",
    cover: "book-0060.jpg",
    genre: "哲学",
    tags: ["随筆", "人間論", "新潮文庫"],
    status: "unread",
    rating: 0,
  }, //
  {
    id: 61,
    title: "暗黙知の次元",
    author: "マイケル・ポランニー",
    cover: "book-0061.jpg",
    genre: "哲学",
    tags: ["科学哲学", "認識論", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [11]
  {
    id: 62,
    title: "カント入門",
    author: "石川文康",
    cover: "book-0062.jpg",
    genre: "哲学",
    tags: ["カント", "批判哲学", "ちくま新書"],
    status: "unread",
    rating: 0,
  }, // [12]
  {
    id: 63,
    title: "カント入門講義",
    author: "冨田恭彦",
    cover: "book-0063.jpg",
    genre: "哲学",
    tags: ["カント", "超越論的観念論", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [13]
  {
    id: 64,
    title: "イスラーム文化",
    author: "井筒俊彦",
    cover: "book-0064.jpg",
    genre: "歴史学",
    tags: ["イスラーム", "文化", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [14]
  {
    id: 65,
    title: "日本の思想",
    author: "丸山真男",
    cover: "book-0065.jpg",
    genre: "哲学",
    tags: ["日本思想", "政治学", "岩波新書"],
    status: "unread",
    rating: 0,
  }, // [15]
  {
    id: 66,
    title: "ユダヤ キリスト イスラム 集中講座",
    author: "井沢元彦",
    cover: "book-0066.jpg",
    genre: "宗教学",
    tags: ["一神教", "歴史", "徳間文庫"],
    status: "unread",
    rating: 0,
  }, // [16]
  {
    id: 67,
    title: "手段からの解放",
    author: "國分功一郎",
    cover: "book-0067.jpg",
    genre: "哲学",
    tags: ["倫理学", "現代思想", "講談社文庫"],
    status: "unread",
    rating: 0,
  }, //
  {
    id: 68,
    title: "方法序説",
    author: "デカルト",
    cover: "book-0068.jpg",
    genre: "哲学",
    tags: ["近代哲学", "合理主義", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [17]
  {
    id: 69,
    title: "モナドロジー 他二篇",
    author: "ライプニッツ",
    cover: "book-0069.jpg",
    genre: "哲学",
    tags: ["形而上学", "モナド", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [18]
  {
    id: 70,
    title: "道徳形而上学の基礎づけ",
    author: "カント",
    cover: "book-0070.jpg",
    genre: "哲学",
    tags: ["倫理学", "定言命法", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [19]
  {
    id: 71,
    title: "これがニーチェだ",
    author: "永井均",
    cover: "book-0071.jpg",
    genre: "哲学",
    tags: ["ニーチェ", "実存主義", "講談社現代新書"],
    status: "unread",
    rating: 0,
  }, // [20]
  {
    id: 72,
    title: "ノヴム・オルガヌム",
    author: "ベーコン",
    cover: "book-0072.jpg",
    genre: "哲学",
    tags: ["経験論", "科学的方法", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [21]
  {
    id: 73,
    title: "パンセ",
    author: "パスカル",
    cover: "book-0073.jpg",
    genre: "哲学",
    tags: ["キリスト教", "人間論", "中公文庫"],
    status: "unread",
    rating: 0,
  }, // [22]
  {
    id: 74,
    title: "現象学とは何か",
    author: "新田義弘",
    cover: "book-0074.jpg",
    genre: "哲学",
    tags: ["現象学", "フッサール", "講談社学術文庫"],
    status: "unread",
    rating: 0,
  }, // [23]
  {
    id: 75,
    title: "これが現象学だ",
    author: "谷徹",
    cover: "book-0075.jpg",
    genre: "哲学",
    tags: ["現象学", "入門", "講談社現代新書"],
    status: "unread",
    rating: 0,
  }, // [24]
  {
    id: 76,
    title: "はじめての哲学史",
    author: "竹田青嗣 / 西研",
    cover: "book-0076.jpg",
    genre: "哲学",
    tags: ["哲学史", "入門", "有斐閣アルマ"],
    status: "unread",
    rating: 0,
  }, // [25]
  {
    id: 77,
    title: "哲学入門",
    author: "バートランド・ラッセル",
    cover: "book-0077.jpg",
    genre: "哲学",
    tags: ["分析哲学", "認識論", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [26]
  {
    id: 78,
    title: "差別感情の哲学",
    author: "中島義道",
    cover: "book-0078.jpg",
    genre: "哲学",
    tags: ["倫理学", "社会哲学", "講談社学術文庫"],
    status: "unread",
    rating: 0,
  }, // [27]
  {
    id: 79,
    title: "読書について",
    author: "ショウペンハウエル",
    cover: "book-0079.jpg",
    genre: "哲学",
    tags: ["読書論", "随筆", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [28]
  {
    id: 80,
    title: "目的への抵抗",
    author: "國分功一郎",
    cover: "book-0080.jpg",
    genre: "哲学",
    tags: ["自由意志", "倫理学", "講談社文庫"],
    status: "unread",
    rating: 0,
  }, //
  {
    id: 81,
    title: "ラッセル幸福論",
    author: "ラッセル",
    cover: "book-0081.jpg",
    genre: "哲学",
    tags: ["幸福論", "人生論", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [29]
  {
    id: 82,
    title: "科学史・科学哲学入門",
    author: "村上陽一郎",
    cover: "book-0082.jpg",
    genre: "哲学",
    tags: ["科学史", "科学哲学", "講談社学術文庫"],
    status: "unread",
    rating: 0,
  }, // [30]
  {
    id: 83,
    title: "自省録",
    author: "マルクス・アウレーリウス",
    cover: "book-0083.jpg",
    genre: "哲学",
    tags: ["ストア派", "古代ローマ", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [31]
  {
    id: 84,
    title: "類推と思考",
    author: "鈴木宏昭",
    cover: "book-0084.jpg",
    genre: "思考法",
    tags: ["認知科学", "思考法", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [32]
  {
    id: 85,
    title: "ソクラテスの弁明 クリトン",
    author: "プラトン",
    cover: "book-0085.jpg",
    genre: "哲学",
    tags: ["古代ギリシア", "ソクラテス", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [33]
  {
    id: 86,
    title: "スピノザ-読む人の肖像-",
    author: "國分功一郎",
    cover: "book-0086.jpg",
    genre: "哲学",
    tags: ["スピノザ", "伝記", "思想解説"],
    status: "unread",
    rating: 0,
  }, //
  {
    id: 87,
    title: "この一冊で「聖書」がわかる！",
    author: "白取春彦",
    cover: "book-0087.jpg",
    genre: "宗教学",
    tags: ["聖書", "キリスト教", "三笠書房"],
    status: "unread",
    rating: 0,
  }, // [34]
  {
    id: 88,
    title: "人はなぜ宗教を必要とするのか",
    author: "阿満利麿",
    cover: "book-0088.jpg",
    genre: "宗教学",
    tags: ["宗教学", "日本人論", "ちくま新書"],
    status: "unread",
    rating: 0,
  }, // [35]
  {
    id: 89,
    title: "生物から見た世界",
    author: "ユクスキュル / クリサート",
    cover: "book-0089.jpg",
    genre: "生物学",
    tags: ["環世界", "動物行動学", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [36]
  {
    id: 90,
    title: "知性改善論",
    author: "バールーフ・デ・スピノザ",
    cover: "book-0090.jpg",
    genre: "哲学",
    tags: ["スピノザ", "認識論", "講談社学術文庫"],
    status: "unread",
    rating: 0,
  }, // [37]
  {
    id: 91,
    title: "エチカ (下)",
    author: "スピノザ",
    cover: "book-0091.jpg",
    genre: "哲学",
    tags: ["倫理学", "汎神論", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [38]
  {
    id: 92,
    title: "弓と禅",
    author: "オイゲン・ヘリゲル",
    cover: "book-0092.jpg",
    genre: "哲学",
    tags: ["禅", "武道", "角川ソフィア文庫"],
    status: "unread",
    rating: 0,
  }, // [39]
  {
    id: 93,
    title: "構造と力",
    author: "浅田彰",
    cover: "book-0093.jpg",
    genre: "哲学",
    tags: ["ポスト構造主義", "現代思想", "勁草書房"],
    status: "unread",
    rating: 0,
  }, // [40]
  {
    id: 94,
    title: "神学・政治論 (下)",
    author: "スピノザ",
    cover: "book-0094.jpg",
    genre: "哲学",
    tags: ["政治哲学", "聖書解釈", "光文社古典新訳文庫"],
    status: "unread",
    rating: 0,
  }, // [41]
  {
    id: 95,
    title: "科学哲学への招待",
    author: "野家啓一",
    cover: "book-0095.jpg",
    genre: "哲学",
    tags: ["科学哲学", "入門", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [42]
  {
    id: 96,
    title: "西洋哲学史",
    author: "野田又夫",
    cover: "book-0096.jpg",
    genre: "哲学",
    tags: ["哲学史", "概説", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [43]
  {
    id: 97,
    title: "責任と判断",
    author: "ハンナ・アレント",
    cover: "book-0097.jpg",
    genre: "哲学",
    tags: ["政治哲学", "道徳", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [44]
  {
    id: 98,
    title: "近代科学を超えて",
    author: "村上陽一郎",
    cover: "book-0098.jpg",
    genre: "哲学",
    tags: ["科学論", "パラダイム", "講談社学術文庫"],
    status: "unread",
    rating: 0,
  }, // [45]
  {
    id: 99,
    title: "道徳の系譜",
    author: "ニーチェ",
    cover: "book-0099.jpg",
    genre: "哲学",
    tags: ["倫理学", "ルサンチマン", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [46]
  {
    id: 100,
    title: "無常の日本精神史",
    author: "竹内整一",
    cover: "book-0100.jpg",
    genre: "哲学",
    tags: ["日本文化", "精神史", "角川ソフィア文庫"],
    status: "unread",
    rating: 0,
  }, // [2]
  {
    id: 101,
    title: "人類の歴史を変えた8つのできごと I",
    author: "眞 淳平",
    cover: "book-0101.jpg",
    genre: "歴史学",
    tags: ["歴史", "言語", "宗教", "岩波ジュニア新書"],
    status: "unread",
    rating: 0,
  }, // [1]

  {
    id: 102,
    title: "キリスト教思想への招待",
    author: "田川建三",
    cover: "book-0102.jpg",
    genre: "宗教学",
    tags: ["キリスト教", "思想", "宗教"],
    status: "unread",
    rating: 0,
  }, // [2]

  {
    id: 103,
    title: "完全教祖マニュアル",
    author: "架神恭介/辰巳一世",
    cover: "book-0103.jpg",
    genre: "宗教学",
    tags: ["宗教", "マニュアル", "ちくま新書"],
    status: "unread",
    rating: 0,
  }, // [3]

  {
    id: 104,
    title: "歴史から理論を創造する方法",
    author: "保城広至",
    cover: "book-0104.jpg",
    genre: "歴史学",
    tags: ["社会科学", "歴史学", "研究法"],
    status: "unread",
    rating: 0,
  }, // [4]

  {
    id: 105,
    title: "歴史とは何か",
    author: "E.H. カー",
    cover: "book-0105.jpg",
    genre: "歴史学",
    tags: ["歴史哲学", "古典", "岩波新書"],
    status: "unread",
    rating: 0,
  }, // [5]

  {
    id: 106,
    title: "金融の世界史",
    author: "板谷敏彦",
    cover: "book-0106.jpg",
    genre: "経済学",
    tags: ["金融", "世界史", "バブル", "新潮選書"],
    status: "unread",
    rating: 0,
  }, // [6]

  {
    id: 107,
    title: "フランス史10講",
    author: "柴田三千雄",
    cover: "book-0107.jpg",
    genre: "歴史学",
    tags: ["フランス", "歴史", "岩波新書"],
    status: "unread",
    rating: 0,
  }, // [7]

  {
    id: 108,
    title: "フランス革命",
    author: "遅塚忠躬",
    cover: "book-0108.jpg",
    genre: "歴史学",
    tags: ["フランス革命", "歴史", "岩波ジュニア新書"],
    status: "unread",
    rating: 0,
  }, // [8]

  {
    id: 109,
    title: "あの国の本当の思惑を見抜く 地政学",
    author: "",
    cover: "book-0109.jpg",
    genre: "その他",
    tags: ["地政学", "国際情勢"],
    status: "unread",
    rating: 0,
  }, // [9]

  {
    id: 110,
    title: "銃・病原菌・鉄",
    author: "ジャレド・ダイアモンド",
    cover: "book-0110.jpg",
    genre: "歴史学",
    tags: ["文明史", "環境史", "ベストセラー"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 111,
    title: "ハプスブルク帝国",
    author: "岩崎周一",
    cover: "book-0111.jpg",
    genre: "歴史学",
    tags: ["ハプスブルク家", "ヨーロッパ史", "講談社現代新書"],
    status: "unread",
    rating: 0,
  }, // [10]

  {
    id: 112,
    title: "歴史学の方法",
    author: "マックス・ヴェーバー",
    cover: "book-0112.jpg",
    genre: "歴史学",
    tags: ["社会学", "方法論", "古典"],
    status: "unread",
    rating: 0,
  }, // [11]

  {
    id: 113,
    title: "砂糖の世界史",
    author: "川北 稔",
    cover: "book-0113.jpg",
    genre: "歴史学",
    tags: ["砂糖", "世界史", "モノの歴史", "岩波ジュニア新書"],
    status: "unread",
    rating: 0,
  }, // [12]

  {
    id: 114,
    title: "イタリア史10講",
    author: "北村暁夫",
    cover: "book-0114.jpg",
    genre: "歴史学",
    tags: ["イタリア", "歴史", "岩波新書"],
    status: "unread",
    rating: 0,
  }, // [13]

  {
    id: 115,
    title: "日本国紀",
    author: "百田尚樹",
    cover: "book-0115.jpg",
    genre: "歴史学",
    tags: ["日本史", "通史", "ベストセラー"],
    status: "unread",
    rating: 0,
  }, // [14]

  {
    id: 116,
    title: "いっきに学び直す日本史",
    author: "安藤達朗",
    cover: "book-0116.jpg",
    genre: "歴史学",
    tags: ["日本史", "学び直し"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 117,
    title: "マーガレット・サッチャー 政治を変えた「鉄の女」",
    author: "冨田浩司",
    cover: "book-0117.jpg",
    genre: "歴史学",
    tags: ["サッチャー", "イギリス史", "伝記"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 118,
    title: "世界史 (上)",
    author: "ウィリアム・H・マクニール",
    cover: "book-0118.jpg",
    genre: "歴史学",
    tags: ["世界史", "通史", "中公文庫"],
    status: "unread",
    rating: 0,
  }, // [15]

  {
    id: 119,
    title: "ナチズムとユダヤ人 アイヒマンの人間像",
    author: "村松剛",
    cover: "book-0119.jpg",
    genre: "歴史学",
    tags: ["ナチズム", "ホロコースト", "伝記"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 120,
    title: "サピエンス全史 (上)",
    author: "ユヴァル・ノア・ハラリ",
    cover: "book-0120.jpg",
    genre: "歴史学",
    tags: ["人類史", "文明", "ベストセラー"],
    status: "unread",
    rating: 0,
  }, // [16]

  {
    id: 121,
    title: "正倉院",
    author: "杉本一樹",
    cover: "book-0121.jpg",
    genre: "歴史学",
    tags: ["正倉院", "日本史", "文化財", "中公新書"],
    status: "unread",
    rating: 0,
  }, // [17]

  {
    id: 122,
    title: "世間体の構造",
    author: "井上忠司",
    cover: "book-0122.jpg",
    genre: "心理学",
    tags: ["社会心理", "日本人", "世間体"],
    status: "unread",
    rating: 0,
  }, // [18]

  {
    id: 123,
    title: "なぜ歴史を学ぶのか",
    author: "リン・ハント",
    cover: "book-0123.jpg",
    genre: "歴史学",
    tags: ["歴史学", "教養", "岩波書店"],
    status: "unread",
    rating: 0,
  }, // [19]

  {
    id: 124,
    title: "世界史の構造",
    author: "柄谷行人",
    cover: "book-0124.jpg",
    genre: "哲学",
    tags: ["世界史", "思想", "構造", "岩波現代文庫"],
    status: "unread",
    rating: 0,
  }, // [20]

  {
    id: 125,
    title: "全世界史 (上)",
    author: "出口治明",
    cover: "book-0125.jpg",
    genre: "歴史学",
    tags: ["世界史", "教養", "新潮文庫"],
    status: "unread",
    rating: 0,
  }, // [21]

  {
    id: 126,
    title: "新 もういちど読む 山川世界史",
    author: "「世界の歴史」編集委員会",
    cover: "book-0126.jpg",
    genre: "歴史学",
    tags: ["世界史", "教科書", "学び直し", "山川出版社"],
    status: "unread",
    rating: 0,
  }, // [22]

  {
    id: 127,
    title: "福沢諭吉 最後の蘭学者",
    author: "大久保健晴",
    cover: "book-0127.jpg",
    genre: "歴史学",
    tags: ["福沢諭吉", "伝記"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 128,
    title: "キリスト教からよむ世界史",
    author: "関 眞興",
    cover: "book-0128.jpg",
    genre: "歴史学",
    tags: ["キリスト教", "世界史", "日経ビジネス人文庫"],
    status: "unread",
    rating: 0,
  }, // [23]
  {
    id: 129,
    title: "イノベーションのDNA",
    author:
      "クレイトン・クリステンセン/ジェフリー・ダイアー/ハル・グレガーセン",
    cover: "book-0129.jpg",
    genre: "経営学",
    tags: ["イノベーション", "破壊的創造", "スキル"],
    status: "unread",
    rating: 0,
  }, // [1]

  {
    id: 130,
    title: "戦略経営論 (第3版)",
    author:
      "マイケル・A・ヒット/R・デュエーン・アイルランド/ロバート・E・ホスキソン",
    cover: "book-0130.jpg",
    genre: "経営学",
    tags: ["経営戦略", "MBA", "グローバリゼーション", "テキスト"],
    status: "unread",
    rating: 0,
  }, // [2]

  {
    id: 131,
    title: "企業進化論",
    author: "野中郁次郎",
    cover: "book-0131.jpg",
    genre: "経営学",
    tags: ["情報創造", "組織論", "マネジメント", "日経ビジネス人文庫"],
    status: "unread",
    rating: 0,
  }, // [3]

  {
    id: 132,
    title: "この一冊で全部わかる ビジネスモデル",
    author: "根来龍之/富樫佳織/足代訓史",
    cover: "book-0132.jpg",
    genre: "経営学",
    tags: ["ビジネスモデル", "図鑑", "入門"],
    status: "unread",
    rating: 0,
  }, // [4]

  {
    id: 133,
    title: "ビジネスモデル・イノベーション",
    author: "野中郁次郎/徳岡晃一郎",
    cover: "book-0133.jpg",
    genre: "経営学",
    tags: ["イノベーション", "知識創造", "戦略論"],
    status: "unread",
    rating: 0,
  }, // [5]

  {
    id: 134,
    title: "経営戦略入門",
    author: "網倉久永/新宅純二郎",
    cover: "book-0134.jpg",
    genre: "経営学",
    tags: ["経営戦略", "入門", "マネジメント・テキスト"],
    status: "unread",
    rating: 0,
  }, // [6]

  {
    id: 135,
    title: "経営戦略の論理 (第4版)",
    author: "伊丹敬之",
    cover: "book-0135.jpg",
    genre: "経営学",
    tags: ["経営戦略", "ダイナミクス", "不均衡"],
    status: "unread",
    rating: 0,
  }, // [7]

  {
    id: 136,
    title: "ケース・スタディ 日本企業事例集",
    author: "ハーバード・ビジネス・スクール",
    cover: "book-0136.jpg",
    genre: "経営学",
    tags: ["ケースメソッド", "HBS", "日本企業", "戦略"],
    status: "unread",
    rating: 0,
  }, // [8]

  {
    id: 137,
    title: "会社という迷宮",
    author: "石井光太郎",
    cover: "book-0137.jpg",
    genre: "経営学",
    tags: ["組織論", "経営者", "コーポレートガバナンス"],
    status: "unread",
    rating: 0,
  }, // [9]

  {
    id: 138,
    title: "ストーリーとしての競争戦略",
    author: "楠木 建",
    cover: "book-0138.jpg",
    genre: "経営学",
    tags: ["競争戦略", "ストーリー", "ベストセラー"],
    status: "unread",
    rating: 0,
  }, // [10]

  {
    id: 139,
    title: "競争戦略論I",
    author: "マイケル・E・ポーター",
    cover: "book-0139.jpg",
    genre: "経営学",
    tags: ["競争戦略", "ファイブフォース", "テキスト"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 140,
    title: "創発的破壊",
    author: "米倉誠一郎",
    cover: "book-0140.jpg",
    genre: "経営学",
    tags: ["イノベーション", "未来", "パラダイムシフト"],
    status: "unread",
    rating: 0,
  }, // [11]

  {
    id: 141,
    title: "ダイバーシティ・マネジメント",
    author: "谷口真美",
    cover: "book-0141.jpg",
    genre: "経営学",
    tags: ["ダイバーシティ", "多様性", "組織"],
    status: "unread",
    rating: 0,
  }, // [12]

  {
    id: 142,
    title: "多様性の科学",
    author: "マシュー・サイド",
    cover: "book-0142.jpg",
    genre: "経営学",
    tags: ["多様性", "組織論", "意思決定", "失敗学"],
    status: "unread",
    rating: 0,
  }, // [13]

  {
    id: 143,
    title: "経済性工学の基礎 (新版)",
    author: "千住鎮雄/伏見多美雄",
    cover: "book-0143.jpg",
    genre: "経営学",
    tags: ["意思決定", "経済性分析", "投資評価"],
    status: "unread",
    rating: 0,
  }, // [14]

  {
    id: 144,
    title: "アントレプレナーシップ",
    author: "清水 洋",
    cover: "book-0144.jpg",
    genre: "経営学",
    tags: ["起業", "イノベーション", "スタートアップ"],
    status: "unread",
    rating: 0,
  }, // [15]

  {
    id: 145,
    title: "失敗の本質",
    author: "戸部良一/寺本義也/鎌田伸一/杉之尾孝生/村井友秀/野中郁次郎",
    cover: "book-0145.jpg",
    genre: "経営学",
    tags: ["組織論", "日本軍", "リーダーシップ", "古典"],
    status: "unread",
    rating: 0,
  }, // [16]

  {
    id: 146,
    title: "論文の書き方",
    author: "小熊英二",
    cover: "book-0146.jpg",
    genre: "思考法",
    tags: ["論文", "ライティング", "研究法", "講談社現代新書"],
    status: "unread",
    rating: 0,
  }, // [17]

  {
    id: 147,
    title: "イノベーションのジレンマ (増補改訂版)",
    author: "クレイトン・クリステンセン",
    cover: "book-0147.jpg",
    genre: "経営学",
    tags: ["イノベーション", "技術経営", "破壊的技術"],
    status: "unread",
    rating: 0,
  }, // [18]

  {
    id: 148,
    title: "イノベーション",
    author: "清水 洋",
    cover: "book-0148.jpg",
    genre: "経営学",
    tags: ["イノベーション", "経営史", "メカニズム"],
    status: "unread",
    rating: 0,
  }, // [19]

  {
    id: 149,
    title: "イノベーションはなぜ途絶えたか",
    author: "山口栄一",
    cover: "book-0149.jpg",
    genre: "経営学",
    tags: ["イノベーション", "科学技術", "日本企業", "ちくま新書"],
    status: "unread",
    rating: 0,
  }, // [20]

  {
    id: 150,
    title: "イノベーション・オブ・ライフ",
    author: "クレイトン・クリステンセン",
    cover: "book-0150.jpg",
    genre: "経営学",
    tags: ["イノベーション", "人生設計", "ベストセラー"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 151,
    title: "知識創造企業 (新装版)",
    author: "野中郁次郎/竹内弘高",
    cover: "book-0151.jpg",
    genre: "経営学",
    tags: ["ナレッジマネジメント", "知識創造", "日本企業", "古典"],
    status: "unread",
    rating: 0,
  }, // [21]

  {
    id: 152,
    title: "知識創造の方法論",
    author: "野中郁次郎/紺野 登",
    cover: "book-0152.jpg",
    genre: "経営学",
    tags: ["ナレッジマネジメント", "方法論", "SECIモデル"],
    status: "unread",
    rating: 0,
  }, // [22]

  {
    id: 153,
    title: "知識経営のすすめ",
    author: "野中郁次郎/紺野 登",
    cover: "book-0153.jpg",
    genre: "経営学",
    tags: ["ナレッジマネジメント", "知識経営", "ちくま新書"],
    status: "unread",
    rating: 0,
  }, // [23]

  {
    id: 154,
    title: "経営の知的思考",
    author: "伊丹敬之",
    cover: "book-0154.jpg",
    genre: "経営学",
    tags: ["思考法", "経営論理", "直感", "検証"],
    status: "unread",
    rating: 0,
  }, // [24]

  {
    id: 155,
    title: "[新版] MBA経営戦略",
    author: "グロービス経営大学院",
    cover: "book-0155.jpg",
    genre: "経営学",
    tags: ["MBA", "経営戦略", "教科書"],
    status: "unread",
    rating: 0,
  }, // [25]

  {
    id: 156,
    title: "領域を超える経営学",
    author: "琴坂将広",
    cover: "book-0156.jpg",
    genre: "経営学",
    tags: ["グローバル経営", "経営理論", "知の系譜"],
    status: "unread",
    rating: 0,
  }, // [26]

  {
    id: 157,
    title: "経営管理 (新版)",
    author: "塩次喜代明/高橋伸夫/小林敏男",
    cover: "book-0157.jpg",
    genre: "経営学",
    tags: ["経営管理", "組織", "有斐閣アルマ"],
    status: "unread",
    rating: 0,
  }, // [27]

  {
    id: 158,
    title: "組織の不条理",
    author: "菊澤研宗",
    cover: "book-0158.jpg",
    genre: "経営学",
    tags: ["組織論", "日本軍", "失敗学", "不条理"],
    status: "unread",
    rating: 0,
  }, // [28]

  {
    id: 159,
    title: "組織行動のマネジメント (新版)",
    author: "スティーブン P. ロビンス",
    cover: "book-0159.jpg",
    genre: "経営学",
    tags: ["組織行動論", "OB", "リーダーシップ", "教科書"],
    status: "unread",
    rating: 0,
  }, // [29]

  {
    id: 160,
    title: "組織論 (補訂版)",
    author: "桑田耕太郎/田尾雅夫",
    cover: "book-0160.jpg",
    genre: "経営学",
    tags: ["組織論", "マクロ", "環境", "有斐閣アルマ"],
    status: "unread",
    rating: 0,
  }, // [30]

  {
    id: 161,
    title: "逆・タイムマシン経営論",
    author: "楠木 建/杉浦 泰",
    cover: "book-0161.jpg",
    genre: "経営学",
    tags: ["経営思考", "本質", "メディア"],
    status: "unread",
    rating: 0,
  }, // [31]

  {
    id: 162,
    title: "両利きの経営",
    author: "チャールズ・A・オライリー/マイケル・L・タッシュマン",
    cover: "book-0162.jpg",
    genre: "経営学",
    tags: ["イノベーション", "組織変革", "両利き", "戦略"],
    status: "unread",
    rating: 0,
  }, // [32]

  {
    id: 163,
    title: "創造するミドル",
    author: "金井壽宏/米倉誠一郎/沼上 幹 編",
    cover: "book-0163.jpg",
    genre: "経営学",
    tags: ["キャリア", "ミドルマネジメント", "組織論"],
    status: "unread",
    rating: 0,
  }, // [33]

  {
    id: 164,
    title: "「好き嫌い」と経営",
    author: "楠木 建",
    cover: "book-0164.jpg",
    genre: "経営学",
    tags: ["経営者", "競争戦略", "インタビュー", "好き嫌い"],
    status: "unread",
    rating: 0,
  }, // [34]

  {
    id: 165,
    title: "経営学入門",
    author: "藤田 誠",
    cover: "book-0165.jpg",
    genre: "経営学",
    tags: ["経営学", "入門", "ベーシック"],
    status: "unread",
    rating: 0,
  }, // [35]

  {
    id: 166,
    title: "経営学とはなにか",
    author: "伊丹敬之",
    cover: "book-0166.jpg",
    genre: "経営学",
    tags: ["経営学", "実学", "本質"],
    status: "unread",
    rating: 0,
  }, // [36]

  {
    id: 167,
    title: "経営学説史",
    author: "岸田民樹/田中政光",
    cover: "book-0167.jpg",
    genre: "経営学",
    tags: ["経営史", "学説", "有斐閣アルマ"],
    status: "unread",
    rating: 0,
  }, // [37]

  {
    id: 168,
    title: "経営戦略の思考法",
    author: "沼上 幹",
    cover: "book-0168.jpg",
    genre: "経営学",
    tags: ["経営戦略", "思考法", "ダイナミクス"],
    status: "unread",
    rating: 0,
  }, // [38]

  {
    id: 169,
    title: "経営読書記録表",
    author: "楠木 建",
    cover: "book-0169.jpg",
    genre: "経営学",
    tags: ["読書論", "書評", "経営書"],
    status: "unread",
    rating: 0,
  }, // [39]
  {
    id: 170,
    title: "本を読む本",
    author: "M.J.アドラー/C.V.ドーレン",
    cover: "book-0170.jpg",
    genre: "思考法",
    tags: ["読書術", "教養", "古典", "講談社学術文庫"],
    status: "unread",
    rating: 0,
  }, // [1]

  {
    id: 171,
    title: "ホモ・ルーデンス",
    author: "ヨハン・ホイジンガ",
    cover: "book-0171.jpg",
    genre: "歴史学",
    tags: ["文化史", "遊び", "人類学", "講談社学術文庫"],
    status: "unread",
    rating: 0,
  }, // [2]

  {
    id: 172,
    title: "人間の由来 上",
    author: "チャールズ・ダーウィン",
    cover: "book-0172.jpg",
    genre: "生物学",
    tags: ["進化論", "古典", "講談社学術文庫"],
    status: "unread",
    rating: 0,
  }, // [3]

  {
    id: 173,
    title: "日本型「教養」の運命",
    author: "筒井清忠",
    cover: "book-0173.jpg",
    genre: "歴史学",
    tags: ["歴史社会学", "教養", "近代日本"],
    status: "unread",
    rating: 0,
  }, // [4]

  {
    id: 174,
    title: "階層化日本と教育危機",
    author: "苅谷剛彦",
    cover: "book-0174.jpg",
    genre: "社会学",
    tags: ["教育", "格差", "不平等", "ロングセラー"],
    status: "unread",
    rating: 0,
  }, // [5]

  {
    id: 175,
    title: "日本権力構造の謎 (上)",
    author: "カレル・ヴァン・ウォルフレン",
    cover: "book-0175.jpg",
    genre: "社会学",
    tags: ["政治", "日本論", "権力構造"],
    status: "unread",
    rating: 0,
  }, // [6]

  {
    id: 176,
    title: "就活の社会学",
    author: "妹尾麻美",
    cover: "book-0176.jpg",
    genre: "社会学",
    tags: ["就活", "大学生", "若者"],
    status: "unread",
    rating: 0,
  }, // [7]

  {
    id: 177,
    title: "レオナルド・ダ・ヴィンチ 芸術と科学を越境する旅人",
    author: "マーティン・ケンプ",
    cover: "book-0177.jpg",
    genre: "その他",
    tags: ["レオナルド・ダ・ヴィンチ", "芸術", "科学"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 178,
    title: "マキャベリの生涯 その微笑の謎",
    author: "マウリツィオ・ヴィローリ",
    cover: "book-0178.jpg",
    genre: "その他",
    tags: ["マキャベリ", "伝記", "ルネサンス"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 179,
    title: "マンキュー入門経済学 [第3版]",
    author: "N・グレゴリー・マンキュー",
    cover: "book-0179.jpg",
    genre: "経済学",
    tags: ["教科書", "入門", "マクロ・ミクロ"],
    status: "unread",
    rating: 0,
  }, // [8]

  {
    id: 180,
    title: "ミル自伝",
    author: "ジョン・スチュアート・ミル",
    cover: "book-0180.jpg",
    genre: "経済学",
    tags: ["自伝", "思想", "古典", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [9]

  {
    id: 181,
    title: "プロテスタンティズムの倫理と資本主義の精神",
    author: "マックス・ヴェーバー",
    cover: "book-0181.jpg",
    genre: "社会学",
    tags: ["社会学", "宗教", "資本主義", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [10]

  {
    id: 182,
    title: "責任という虚構",
    author: "小坂井敏晶",
    cover: "book-0182.jpg",
    genre: "社会学",
    tags: ["法社会学", "責任", "心理", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [11]

  {
    id: 183,
    title: "知識の社会史",
    author: "ピーター・バーク",
    cover: "book-0183.jpg",
    genre: "歴史学",
    tags: ["知識", "情報", "社会史"],
    status: "unread",
    rating: 0,
  }, // [12]

  {
    id: 184,
    title: "社会科学と因果分析",
    author: "佐藤俊樹",
    cover: "book-0184.jpg",
    genre: "社会学",
    tags: ["方法論", "ウェーバー", "社会科学"],
    status: "unread",
    rating: 0,
  }, // [13]

  {
    id: 185,
    title: "社会科学と社会政策にかかわる認識の「客観性」",
    author: "マックス・ヴェーバー",
    cover: "book-0185.jpg",
    genre: "社会学",
    tags: ["方法論", "価値自由", "理念型", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [14]

  {
    id: 186,
    title: "社会思想史講義",
    author: "城塚 登",
    cover: "book-0186.jpg",
    genre: "社会学",
    tags: ["社会思想", "歴史", "講義", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [15]

  {
    id: 187,
    title: "社会学の根本概念",
    author: "マックス・ヴェーバー",
    cover: "book-0187.jpg",
    genre: "社会学",
    tags: ["理論", "定義", "古典", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [16]

  {
    id: 188,
    title: "有閑階級の理論 [新版]",
    author: "ソースタイン・ヴェブレン",
    cover: "book-0188.jpg",
    genre: "経済学",
    tags: ["消費", "制度派経済学", "古典", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [17]

  {
    id: 189,
    title: "わかりやすさの罪",
    author: "武田砂鉄",
    cover: "book-0189.jpg",
    genre: "社会学",
    tags: ["メディア", "社会評論", "思考停止"],
    status: "unread",
    rating: 0,
  }, // [18]

  {
    id: 190,
    title: "価値の社会学",
    author: "作田啓一",
    cover: "book-0190.jpg",
    genre: "社会学",
    tags: ["価値観", "理論", "日本社会", "ちくま学芸文庫"],
    status: "unread",
    rating: 0,
  }, // [19]

  {
    id: 191,
    title: "戦争論 (上)",
    author: "クラウゼヴィッツ",
    cover: "book-0191.jpg",
    genre: "その他",
    tags: ["軍事", "戦略", "政治", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [20]

  {
    id: 192,
    title: "「衝動」に支配される世界",
    author: "ポール・ロバーツ",
    cover: "book-0192.jpg",
    genre: "社会学",
    tags: ["消費社会", "心理", "ビジネス"],
    status: "unread",
    rating: 0,
  }, // [21]

  {
    id: 193,
    title: "Z世代化する社会",
    author: "舟津昌平",
    cover: "book-0193.jpg",
    genre: "社会学",
    tags: ["Z世代", "組織論", "若者論"],
    status: "unread",
    rating: 0,
  }, // [22]

  {
    id: 194,
    title: "君主論",
    author: "マキアヴェッリ",
    cover: "book-0194.jpg",
    genre: "その他",
    tags: ["政治学", "リーダーシップ", "古典", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [23]

  {
    id: 195,
    title: "堕落論・日本文化私観 他二十二篇",
    author: "坂口安吾",
    cover: "book-0195.jpg",
    genre: "その他",
    tags: ["日本文化", "エッセイ", "文学", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, // [24]

  {
    id: 196,
    title: "実力も運のうち 能力主義は正義か？",
    author: "マイケル・J・サンデル",
    cover: "book-0196.jpg",
    genre: "政治学",
    tags: ["能力主義", "政治哲学", "正義論"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 197,
    title: "モヤモヤする正義",
    author: "ベンジャミン・クリッツァー",
    cover: "book-0197.jpeg",
    genre: "哲学",
    tags: ["公共哲学", "倫理学", "リベラリズム"],
    status: "unread",
    rating: 0,
  }, // [25]
  {
    id: 198,
    title: "22世紀の資本主義",
    author: "成田悠輔",
    cover: "book-0198.jpg",
    genre: "経済学",
    tags: ["資本主義", "未来予測", "経済思想"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 199,
    title: "22世紀の民主主義",
    author: "成田悠輔",
    cover: "book-0199.jpg",
    genre: "政治学",
    tags: ["民主主義", "未来予測", "政治思想"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 200,
    title: "社会学史",
    author: "大澤真幸",
    cover: "book-0200.jpg",
    genre: "社会学",
    tags: ["社会学", "歴史", "教養", "講談社現代新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 201,
    title: "人新生の『資本論』",
    author: "斎藤幸平",
    cover: "book-0201.jpg",
    genre: "経済学",
    tags: ["資本論", "気候変動", "社会変革"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 202,
    title: "USJのジェットコースターはなぜ後ろ向きに走ったのか？",
    author: "森岡 毅",
    cover: "book-0202.jpg",
    genre: "経営学",
    tags: ["マーケティング", "USJ", "V字回復", "アイデア"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 203,
    title: "新・現代会計入門 第5版",
    author: "伊藤邦雄",
    cover: "book-0203.jpg",
    genre: "経営学",
    tags: ["会計学", "財務", "テキスト"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 204,
    title: "経済発展の理論 (上)",
    author: "シュムペーター",
    cover: "book-0204.jpg",
    genre: "経済学",
    tags: ["イノベーション", "古典", "岩波文庫"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 205,
    title: "Academic Writing Strategies for University Students",
    author: "中谷安男",
    cover: "book-0205.jpg",
    genre: "語学",
    tags: ["英語", "ライティング", "論文", "大学生"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 206,
    title: "文章技術",
    author: "石黒 圭",
    cover: "book-0206.jpg",
    genre: "語学",
    tags: ["文章術", "ライティング", "ちくまプリマー新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 207,
    title: "行動経済学",
    author: "友野典男",
    cover: "book-0207.jpg",
    genre: "経済学",
    tags: ["行動経済学", "心理", "入門"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 208,
    title: "1冊でマスター 大学の微分積分",
    author: "石井俊全",
    cover: "book-0208.jpg",
    genre: "数学",
    tags: ["微分積分", "大学数学", "入門"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 209,
    title: "コーポレートファイナンス 入門編 [第2版]",
    author: "ジョナサン・バーク/ピーター・ディマーゾ",
    cover: "book-0209.jpg",
    genre: "経営学",
    tags: ["ファイナンス", "企業財務", "教科書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 210,
    title: "創造的論文の書き方",
    author: "伊丹敬之",
    cover: "book-0210.jpg",
    genre: "思考法",
    tags: ["論文", "ライティング", "研究法"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 211,
    title: "データ分析の力 因果関係に迫る思考法",
    author: "伊藤公一朗",
    cover: "book-0211.jpg",
    genre: "経済学",
    tags: ["データ分析", "因果推論", "統計", "光文社新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 212,
    title: "データサイエンティスト入門",
    author: "野村総合研究所データサイエンスラボ",
    cover: "book-0212.jpg",
    genre: "コンピュータサイエンス",
    tags: ["データサイエンス", "AI", "ビジネス", "日経文庫"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 213,
    title: "はじめての経済思想史",
    author: "中村隆之",
    cover: "book-0213.jpg",
    genre: "経済学",
    tags: ["経済思想", "歴史", "入門"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 214,
    title: "経済学を学ぶ",
    author: "岩田規久男",
    cover: "book-0214.jpg",
    genre: "経済学",
    tags: ["経済学", "入門", "思考法", "ちくま新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 215,
    title: "経済学講義",
    author: "飯田泰之",
    cover: "book-0215.jpg",
    genre: "経済学",
    tags: ["経済学", "入門", "思考法", "ちくま新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 216,
    title: "ファンベース",
    author: "佐藤尚之",
    cover: "book-0216.jpg",
    genre: "経営学",
    tags: ["マーケティング", "ファン", "コミュニティ", "ちくま新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 217,
    title: "よくわかるファイナンス",
    author: "久保田敬一",
    cover: "book-0217.jpg",
    genre: "経営学",
    tags: ["ファイナンス", "金融", "入門"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 218,
    title: "ざっくり分かるファイナンス",
    author: "石野雄一",
    cover: "book-0218.jpg",
    genre: "経営学",
    tags: ["ファイナンス", "決算書", "企業価値", "光文社新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 219,
    title: "道具としてのファイナンス",
    author: "石野雄一",
    cover: "book-0219.jpg",
    genre: "経営学",
    tags: ["ファイナンス", "実務", "投資評価"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 220,
    title: "財務会計講義 (第25版)",
    author: "桜井久勝",
    cover: "book-0220.jpg",
    genre: "経営学",
    tags: ["会計学", "財務会計", "テキスト"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 221,
    title: "財務3表一体理解法",
    author: "國貞克則",
    cover: "book-0221.jpg",
    genre: "経営学",
    tags: ["会計", "簿記", "財務諸表", "朝日新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 222,
    title: "ストラテジストにさよならを",
    author: "広木 隆",
    cover: "book-0222.jpg",
    genre: "経済学",
    tags: ["投資", "株式市場", "ゲーテ・ビジネス新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 223,
    title: "ヘッジファンドのアクティブ投資戦略",
    author: "ラッセ・ヘジェ・ペデルセン",
    cover: "book-0223.jpg",
    genre: "経済学",
    tags: ["投資", "ヘッジファンド", "市場効率性"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 224,
    title: "世界史のなかの産業革命",
    author: "R.C. アレン",
    cover: "book-0224.jpg",
    genre: "歴史学",
    tags: ["産業革命", "経済史", "グローバルヒストリー"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 225,
    title: "「知の技法」入門",
    author: "小林康夫/大澤真幸",
    cover: "book-0225.jpg",
    genre: "思考法",
    tags: ["教養", "大学", "学び"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 226,
    title: "入門 マクロ経済学",
    author: "嶋村紘輝/佐々木宏夫 他",
    cover: "book-0226.jpg",
    genre: "経済学",
    tags: ["マクロ経済学", "入門", "テキスト"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 227,
    title: "投資1年目の教科書",
    author: "高橋慶行",
    cover: "book-0227.jpg",
    genre: "経済学",
    tags: ["投資", "株式", "入門"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 228,
    title: "コトラー&ケラーのマーケティング・マネジメント 基本編",
    author: "フィリップ・コトラー/ケビン・レーン・ケラー",
    cover: "book-0228.jpg",
    genre: "経営学",
    tags: ["マーケティング", "教科書", "コトラー"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 229,
    title: "1冊でマスター 大学の線形代数",
    author: "石井俊全",
    cover: "book-0229.jpg",
    genre: "数学",
    tags: ["線形代数", "大学数学", "入門"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 230,
    title: "意味がわかる線形代数",
    author: "石井俊全",
    cover: "book-0230.jpg",
    genre: "数学",
    tags: ["線形代数", "入門", "解説"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 231,
    title: "1冊でマスター 大学の統計学",
    author: "石井俊全",
    cover: "book-0231.jpg",
    genre: "数学",
    tags: ["統計学", "大学数学", "入門"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 232,
    title: "MBAマーケティング (改訂4版)",
    author: "グロービス経営大学院",
    cover: "book-0232.jpg",
    genre: "経営学",
    tags: ["マーケティング", "MBA", "教科書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 233,
    title: "マキアヴェッリ 「君主論」をよむ",
    author: "鹿子生浩輝",
    cover: "book-0233.jpg",
    genre: "その他",
    tags: ["政治学", "古典", "岩波新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 234,
    title: "売れるもマーケ 当たるもマーケ",
    author: "アル・ライズ/ジャック・トラウト",
    cover: "book-0234.jpg",
    genre: "経営学",
    tags: ["マーケティング", "法則", "古典"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 235,
    title: "はじめてのマーケティング",
    author: "久保田進彦/澁谷 覚/須永 努",
    cover: "book-0235.jpg",
    genre: "経営学",
    tags: ["マーケティング", "入門", "有斐閣"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 236,
    title: "マーケティングをつかむ [第3版]",
    author: "黒岩健一郎/水越康介",
    cover: "book-0236.jpg",
    genre: "経営学",
    tags: ["マーケティング", "テキスト", "有斐閣"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 237,
    title: "マルクス入門",
    author: "今村仁司",
    cover: "book-0237.jpg",
    genre: "経済学",
    tags: ["マルクス", "思想", "ちくま新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 238,
    title: "マルクス 資本論の哲学",
    author: "熊野純彦",
    cover: "book-0238.jpg",
    genre: "哲学",
    tags: ["マルクス", "資本論", "哲学", "岩波新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 239,
    title: "数学する身体",
    author: "森田真生",
    cover: "book-0239.jpg",
    genre: "数学",
    tags: ["数学", "身体性", "エッセイ", "新潮文庫"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 240,
    title: "統計学のための数学入門30講",
    author: "永田 靖",
    cover: "book-0240.jpg",
    genre: "数学",
    tags: ["統計学", "数学", "入門"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 241,
    title: "入門 ミクロ経済学",
    author: "嶋村紘輝/佐々木宏夫 他",
    cover: "book-0241.jpg",
    genre: "経済学",
    tags: ["ミクロ経済学", "入門", "テキスト"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 242,
    title: "現代広告論 [第4版]",
    author: "岸 志津江/田中 洋/嶋村和恵/丸岡吉人",
    cover: "book-0242.jpg",
    genre: "経営学",
    tags: ["広告", "マーケティング", "テキスト"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 243,
    title: "まったく新しいアカデミック・ライティングの教科書",
    author: "阿部幸大",
    cover: "book-0243.jpg",
    genre: "思考法",
    tags: ["ライティング", "論文", "大学"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 244,
    title: "ポスト資本主義社会",
    author: "P.F. ドラッカー",
    cover: "book-0244.jpg",
    genre: "経営学",
    tags: ["社会論", "資本主義", "ドラッカー", "未来予測"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 245,
    title: "確率思考の戦略論",
    author: "森岡 毅/今西聖貴",
    cover: "book-0245.jpg",
    genre: "経営学",
    tags: ["マーケティング", "数学", "戦略", "USJ"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 246,
    title: "確率思考の戦略論",
    author: "森岡 毅/今西聖貴",
    cover: "book-0246.jpg",
    genre: "経営学",
    tags: ["マーケティング", "数学", "戦略", "USJ", "角川文庫"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 247,
    title: "読書大全",
    author: "堀内 勉",
    cover: "book-0247.jpg",
    genre: "その他",
    tags: ["読書", "ブックガイド", "教養"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 248,
    title: "マックス・ウェーバーを読む",
    author: "仲正昌樹",
    cover: "book-0248.jpg",
    genre: "社会学",
    tags: ["ウェーバー", "社会学", "講談社現代新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 249,
    title: "リサーチ・デザイン",
    author: "田村正紀",
    cover: "book-0249.jpg",
    genre: "経営学",
    tags: ["研究法", "方法論", "経営学"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 250,
    title: "リサーチのはじめかた",
    author: "トーマス・S・マラニー/クリストファー・レア",
    cover: "book-0250.jpg",
    genre: "思考法",
    tags: ["研究法", "論文", "問い"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 251,
    title: "面白くて刺激的な論文のためのリサーチ・クエスチョンの作り方と育て方",
    author: "M.アルヴェッソン/J.サンドバーグ",
    cover: "book-0251.jpg",
    genre: "思考法",
    tags: ["研究法", "論文", "問い"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 252,
    title: "線型代数入門講義",
    author: "長岡亮介",
    cover: "book-0252.jpg",
    genre: "数学",
    tags: ["線形代数", "大学数学", "講義"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 253,
    title: "微分積分学",
    author: "齋藤正彦",
    cover: "book-0253.jpg",
    genre: "数学",
    tags: ["微分積分", "数学", "教科書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 254,
    title: "「文系学部廃止」の衝撃",
    author: "吉見俊哉",
    cover: "book-0254.jpg",
    genre: "社会学",
    tags: ["大学論", "教育", "集英社新書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 255,
    title: "Rによる統計的学習入門",
    author: "G.James/D.Witten/T.Hastie/R.Tibshirani",
    cover: "book-0255.jpg",
    genre: "数学",
    tags: ["統計学", "R言語", "機械学習", "データ分析"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 256,
    title: "統計学基礎",
    author: "日本統計学会 編",
    cover: "book-0256.jpg",
    genre: "数学",
    tags: ["統計学", "統計検定", "教科書"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 257,
    title: "統計学入門",
    author: "東京大学教養学部統計学教室 編",
    cover: "book-0257.jpg",
    genre: "数学",
    tags: ["統計学", "教科書", "東大", "ロングセラー"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 258,
    title: "統計学が最強の学問である",
    author: "西内 啓",
    cover: "book-0258.jpg",
    genre: "数学",
    tags: ["統計学", "ビジネス", "ベストセラー"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 259,
    title: "USJを劇的に変えた、たった1つの考え方",
    author: "森岡 毅",
    cover: "book-0259.jpg",
    genre: "経営学",
    tags: ["USJ", "マーケティング"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 260,
    title: "西洋政治思想史",
    author: "宇野重規",
    cover: "book-0260.jpg",
    genre: "歴史学",
    tags: ["政治学", "思想史", "有斐閣アルマ"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 261,
    title: "大学で何を学ぶか",
    author: "浅羽通明",
    cover: "book-0261.jpg",
    genre: "思考法",
    tags: ["大学", "教養", "学び", "幻冬舎文庫"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 262,
    title: "ゼロからの『資本論』",
    author: "斎藤幸平",
    cover: "book-0262.jpg",
    genre: "経済学",
    tags: ["資本論", "マルクス", "入門"],
    status: "unread",
    rating: 0,
  }, // Missing Source

  {
    id: 263,
    title: "限界費用ゼロ社会",
    author: "ジェレミー・リフキン",
    cover: "book-0263.jpg",
    genre: "経済学",
    tags: ["共有型経済", "IoT", "未来予測"],
    status: "unread",
    rating: 0,
  }, //

  {
    id: 264,
    title: "大学生になるきみへ",
    author: "中山 茂",
    cover: "book-0264.jpg",
    genre: "その他",
    tags: ["大学", "知的空間", "入門"],
    status: "unread",
    rating: 0,
  }, //
  {
    id: 265,
    title:
      "0才から100才まで学び続けなくてはならない時代を生きる学ぶ人と育てる人のための教科書",
    author: "落合 陽一",
    cover: "book-0265.jpg",
    genre: "その他",
    tags: ["教育", "人生戦略", "教科書"],
    status: "unread",
    rating: 0,
  }, // [1]
  {
    id: 266,
    title: "なぜ働いていると本が読めなくなるのか",
    author: "三宅 香帆",
    cover: "book-0266.jpg",
    genre: "社会学",
    tags: ["読書論", "労働", "現代社会"],
    status: "unread",
    rating: 0,
  }, // [2]
  {
    id: 267,
    title: "「好き嫌い」と才能",
    author: "楠木 建",
    cover: "book-0267.jpg",
    genre: "経営学",
    tags: ["キャリア", "才能", "努力"],
    status: "unread",
    rating: 0,
  }, // [3]
  {
    id: 268,
    title: "20代にしておきたい17のこと",
    author: "本田 健",
    cover: "book-0268.jpg",
    genre: "その他",
    tags: ["人生論", "20代", "自己啓発"],
    status: "unread",
    rating: 0,
  }, // [4]
  {
    id: 269,
    title: "思考の整理学",
    author: "外山 滋比古",
    cover: "book-0269.jpg",
    genre: "思考法",
    tags: ["思考", "ロングセラー", "アイデア"],
    status: "unread",
    rating: 0,
  }, // [5]
  {
    id: 270,
    title: "世界の「頭のいい人」がやっていることを1冊にまとめてみた",
    author: "中野信子",
    cover: "book-0270.jpg",
    genre: "その他",
    tags: ["知能", "脳科学", "思考法"],
    status: "unread",
    rating: 0,
  },
  {
    id: 271,
    title: "20歳のときに知っておきたかったこと",
    author: "ティナ・シーリグ",
    cover: "book-0271.jpg",
    genre: "自己啓発",
    tags: ["人生論", "自己啓発", "若者"],
    status: "unread",
    rating: 0,
  },
  {
    id: 272,
    title: "GRIT やり抜く力",
    author: "アンジェラ・ダックワース",
    cover: "book-0272.jpg",
    genre: "心理学",
    tags: ["成功", "継続", "マインドセット"],
    status: "unread",
    rating: 0,
  }, // [6]
  {
    id: 273,
    title: "アブダクション",
    author: "米盛裕二",
    cover: "book-0273.jpg",
    genre: "思考法",
    tags: ["発想法", "問題解決", "クリエイティビティ"],
    status: "unread",
    rating: 0,
  }, // [7]
  {
    id: 274,
    title: "絶対悲観主義",
    author: "楠木 建",
    cover: "book-0274.jpg",
    genre: "思考法",
    tags: ["仕事術", "メンタル", "経営者"],
    status: "unread",
    rating: 0,
  }, // [8]
  {
    id: 275,
    title: "「具体⇄抽象」トレーニング",
    author: "細谷 功",
    cover: "book-0275.jpg",
    genre: "思考法",
    tags: ["抽象化", "問題解決", "思考力"],
    status: "unread",
    rating: 0,
  }, // [9]
  {
    id: 276,
    title: "冒険の書",
    author: "孫泰蔵",
    cover: "book-0276.jpg",
    genre: "自己啓発",
    tags: ["起業", "人生論", "冒険"],
    status: "unread",
    rating: 0,
  }, // [10]
  {
    id: 277,
    title: "仕事に生かすアート思考",
    author: "町田 裕治",
    cover: "book-0277.jpg",
    genre: "思考法",
    tags: ["アート", "創造性", "ビジネス"],
    status: "unread",
    rating: 0,
  }, // [11]
  {
    id: 278,
    title: "無くならない アートとデザインの間",
    author: "佐藤 直樹",
    cover: "book-0278.jpg",
    genre: "その他",
    tags: ["デザイン", "芸術", "クリエイティブ"],
    status: "unread",
    rating: 0,
  }, // [12]
  {
    id: 279,
    title: "仕事選びのアートとサイエンス",
    author: "山口 周",
    cover: "book-0279.jpg",
    genre: "経営学",
    tags: ["キャリア", "意思決定", "転職"],
    status: "unread",
    rating: 0,
  }, // [13]
  {
    id: 280,
    title: "バカ論",
    author: "ビートたけし",
    cover: "book-0280.jpg",
    genre: "その他",
    tags: ["人生論", "社会批評", "芸人"],
    status: "unread",
    rating: 0,
  }, // [14]
  {
    id: 281,
    title: "最高の勉強法",
    author: "安川 康介",
    cover: "book-0281.jpg",
    genre: "思考法",
    tags: ["学習法", "科学的根拠", "スキルアップ"],
    status: "unread",
    rating: 0,
  }, // [15]
  {
    id: 282,
    title: "CSS設計完全ガイド",
    author: "半田 惇志",
    cover: "book-0282.jpg",
    genre: "プログラミング",
    tags: ["Webデザイン", "CSS", "エンジニアリング"],
    status: "unread",
    rating: 0,
  }, // [16]
  {
    id: 283,
    title: "人がうごく コンテンツのつくり方",
    author: "高瀬 敦也",
    cover: "book-0283.jpg",
    genre: "経営学",
    tags: ["マーケティング", "企画", "コンテンツ"],
    status: "unread",
    rating: 0,
  }, // [17]
  {
    id: 284,
    title: "DX進化論",
    author: "尾原 和啓,宮田 裕章,山口 周",
    cover: "book-0284.jpg",
    genre: "その他",
    tags: ["DX", "デジタル変革", "ビジネス"],
    status: "unread",
    rating: 0,
  },
  {
    id: 285,
    title: "いまこそ知りたいDX戦略",
    author: "石角 友愛",
    cover: "book-0285.jpg",
    genre: "その他",
    tags: ["DX", "デジタル変革", "ビジネス"],
    status: "unread",
    rating: 0,
  },
  {
    id: 286,
    title: "ダーウィンの呪い",
    author: "千葉 聡",
    cover: "book-0286.jpg",
    genre: "生物学",
    tags: ["進化論", "科学", "現代思想"],
    status: "unread",
    rating: 0,
  }, // [18]
  {
    id: 287,
    title: "デザイン入門教室",
    author: "坂本 伸二",
    cover: "book-0287.jpg",
    genre: "デザイン",
    tags: [],
    status: "unread",
    rating: 0,
  }, // [19]
  {
    id: 288,
    title: "DIE WITH ZERO ゼロで死ね。",
    author: "ビル・パーキンス",
    cover: "book-0288.jpg",
    genre: "自己啓発",
    tags: ["人生論", "お金", "幸福"],
    status: "unread",
    rating: 0,
  }, // [20]
  {
    id: 289,
    title: "稼ぐ力",
    author: "大前 研一",
    cover: "book-0289.jpg",
    genre: "自己啓発",
    tags: ["キャリア", "仕事術", "経済環境"],
    status: "unread",
    rating: 0,
  },
  {
    id: 290,
    title: "本質を見抜く「考え方」",
    author: "中西 輝政",
    cover: "book-0290.jpg",
    genre: "思考法",
    tags: ["判断力", "教養", "国際政治"],
    status: "unread",
    rating: 0,
  }, // [21]
  {
    id: 291,
    title: "エッセンシャル思考",
    author: "グレッグ・マキューン",
    cover: "book-0291.jpg",
    genre: "思考法",
    tags: ["生産性", "ミニマリズム", "選択と集中"],
    status: "unread",
    rating: 0,
  }, // [22]
  {
    id: 292,
    title: "体験格差",
    author: "今井 悠介",
    cover: "book-0292.jpg",
    genre: "社会学",
    tags: ["貧困", "教育", "格差社会"],
    status: "unread",
    rating: 0,
  }, // [23]
  {
    id: 293,
    title: "正義を振りかざす「極端な人」の正体",
    author: "山口 真一",
    cover: "book-0293.jpg",
    genre: "社会学",
    tags: ["SNS", "心理", "炎上"],
    status: "unread",
    rating: 0,
  }, // [24]
  {
    id: 294,
    title: "FACTFULNESS (ファクトフルネス)",
    author: "ハンス・ロスリング",
    cover: "book-0294.jpg",
    genre: "経済学",
    tags: ["データ", "世界情勢", "教養"],
    status: "unread",
    rating: 0,
  }, // [25]
  {
    id: 295,
    title: "フェイク",
    author: "中野 信子",
    cover: "book-0295.jpg",
    genre: "その他",
    tags: ["情報リテラシー", "心理学", "現代社会"],
    status: "unread",
    rating: 0,
  },
  {
    id: 296,
    title: "ファスト教養",
    author: "レジー",
    cover: "book-0296.jpg",
    genre: "社会学",
    tags: ["現代文化", "教養", "消費社会"],
    status: "unread",
    rating: 0,
  }, // [26]
  {
    id: 297,
    title: "はじめて世に出る青年へ",
    author: "渋沢 栄一",
    cover: "book-0297.jpg",
    genre: "自己啓発",
    tags: ["自己啓発", "人生論", "古典"],
    status: "unread",
    rating: 0,
  }, // [27]
  {
    id: 298,
    title: "忘れる読書",
    author: "落合陽一",
    cover: "book-0298.jpg",
    genre: "その他",
    tags: ["読書論", "知識", "情報社会"],
    status: "unread",
    rating: 0,
  },
  {
    id: 299,
    title: "フリーエージェント社会の到来",
    author: "ダニエル・ピンク",
    cover: "book-0299.jpg",
    genre: "社会学",
    tags: ["働き方", "未来予測", "キャリア"],
    status: "unread",
    rating: 0,
  }, // [28]
  {
    id: 300,
    title: "起業家",
    author: "藤田晋",
    cover: "book-0300.jpg",
    genre: "自己啓発",
    tags: ["起業", "キャリア", "実業家"],
    status: "unread",
    rating: 0,
  },
  {
    id: 301,
    title: "GAFAMのエンジニア思考",
    author: "アレックス・カントロウィッツ",
    cover: "book-0301.jpg",
    genre: "思考法",
    tags: ["IT企業", "働き方", "イノベーション"],
    status: "unread",
    rating: 0,
  }, // [29]
  {
    id: 302,
    title: "GIVE & TAKE",
    author: "アダム・グラント",
    cover: "book-0302.jpg",
    genre: "心理学",
    tags: ["成功", "人間関係", "組織論"],
    status: "unread",
    rating: 0,
  }, // [30]
  {
    id: 303,
    title: "ハーバードの美意識を磨く授業",
    author: "ポーリーン・ブラウン",
    cover: "book-0303.jpg",
    genre: "その他",
    tags: ["美意識", "教養", "ハーバード"],
    status: "unread",
    rating: 0,
  }, // [31]
  {
    id: 304,
    title: "アイデアのつくり方",
    author: "ジェームス・W・ヤング",
    cover: "book-0304.jpg",
    genre: "思考法",
    tags: ["発想法", "クリエイティブ", "古典"],
    status: "unread",
    rating: 0,
  }, // [32]
  {
    id: 305,
    title: "本はどう読むか",
    author: "清水 幾太郎",
    cover: "book-0305.jpg",
    genre: "その他",
    tags: ["読書術", "教養", "古典"],
    status: "unread",
    rating: 0,
  }, // [33]
  {
    id: 306,
    title: "いかにして問題をとくか",
    author: "ジョージ・P・ポリア",
    cover: "book-0306.jpg",
    genre: "思考法",
    tags: ["問題解決", "数学", "古典"],
    status: "unread",
    rating: 0,
  }, // [34]
  {
    id: 307,
    title: "百人一首 - 編纂がひらく小宇宙",
    author: "田淵句美子",
    cover: "book-0307.jpg",
    genre: "その他",
    tags: ["文学", "和歌", "古典"],
    status: "unread",
    rating: 0,
  }, // [35]
  {
    id: 308,
    title: "「意識の量」を増やせ！",
    author: "齋藤 孝",
    cover: "book-0308.jpg",
    genre: "その他",
    tags: ["自己啓発", "マインドセット", "成長"],
    status: "unread",
    rating: 0,
  }, // [36]
  {
    id: 309,
    title: "室内生活",
    author: "楠木 建",
    cover: "book-0309.jpg",
    genre: "その他",
    tags: ["エッセイ", "読書論", "日常"],
    status: "unread",
    rating: 0,
  }, // [37]
  {
    id: 310,
    title: "不倫と正義",
    author: "中野信子,三浦瑠麗",
    cover: "book-0310.jpg",
    genre: "社会学",
    tags: ["倫理", "心理学", "現代社会"],
    status: "unread",
    rating: 0,
  },
  {
    id: 311,
    title: "学び効率が最大化する インプット大全",
    author: "樺沢 紫苑",
    cover: "book-0311.jpg",
    genre: "思考法",
    tags: ["学習法", "脳科学", "効率化"],
    status: "unread",
    rating: 0,
  }, // [38]
  {
    id: 312,
    title: "知的複眼思考法",
    author: "苅谷 剛彦",
    cover: "book-0312.jpg",
    genre: "思考法",
    tags: ["批判的思考", "論理的思考", "視点"],
    status: "unread",
    rating: 0,
  }, // [39]
  {
    id: 313,
    title: "知的生活のすゝめ",
    author: "齋藤 孝",
    cover: "book-0313.jpg",
    genre: "その他",
    tags: ["教養", "ライフスタイル", "読書"],
    status: "unread",
    rating: 0,
  }, // [40]
  {
    id: 314,
    title: "東大教授が教える知的に考える練習",
    author: "柳川 範之",
    cover: "book-0314.jpg",
    genre: "思考法",
    tags: ["論理的思考", "批判的思考", "教育"],
    status: "unread",
    rating: 0,
  }, // [41]
  {
    id: 315,
    title: "「話が面白い人」は何をどう読んでいるのか？",
    author: "三宅香帆",
    cover: "book-0315.jpg",
    genre: "その他",
    tags: ["読書論", "コミュニケーション", "教養"],
    status: "unread",
    rating: 0,
  },
  {
    id: 316,
    title: "入門! 論理学",
    author: "野矢 茂樹",
    cover: "book-0316.jpg",
    genre: "哲学",
    tags: ["論理学", "入門書", "思考"],
    status: "unread",
    rating: 0,
  }, // [42]
  {
    id: 317,
    title: "日本の半導体四〇年",
    author: "菊池 誠",
    cover: "book-0317.jpg",
    genre: "歴史学",
    tags: ["技術史", "産業", "半導体"],
    status: "unread",
    rating: 0,
  }, // [43]
  {
    id: 318,
    title: "日本企業はなぜ「強み」を捨てるのか",
    author: "岩尾 俊兵",
    cover: "book-0318.jpg",
    genre: "経営学",
    tags: ["日本経済", "組織論", "イノベーション"],
    status: "unread",
    rating: 0,
  }, // [44]
  {
    id: 319,
    title: "日本の難点",
    author: "宮台 真司",
    cover: "book-0319.jpg",
    genre: "社会学",
    tags: ["社会問題", "政治", "論評"],
    status: "unread",
    rating: 0,
  }, // [45]
  {
    id: 320,
    title: "ワナの就活",
    author: "石渡 嶺司",
    cover: "book-0320.jpg",
    genre: "その他",
    tags: ["就職活動", "キャリア", "社会問題"],
    status: "unread",
    rating: 0,
  }, // [46]
  {
    id: 321,
    title: "仮面の告白",
    author: "三島 由紀夫",
    cover: "book-0321.jpg",
    genre: "その他",
    tags: ["文学", "小説", "古典"],
    status: "unread",
    rating: 0,
  }, // [47]
  {
    id: 322,
    title: "キーエンス解剖",
    author: "西岡 杏",
    cover: "book-0322.jpg",
    genre: "経営学",
    tags: ["企業研究", "高収益", "組織"],
    status: "unread",
    rating: 0,
  }, // [48]
  {
    id: 323,
    title: "農業再生人間再生",
    author: "木村秋則,宇城憲治",
    cover: "book-0323.jpg",
    genre: "その他",
    tags: ["農業", "環境", "ノンフィクション"],
    status: "unread",
    rating: 0,
  },
  {
    id: 324,
    title: "知の体力",
    author: "永田和宏",
    cover: "book-0324.jpg",
    genre: "思考法",
    tags: ["知識", "学問", "教養"],
    status: "unread",
    rating: 0,
  }, // [49]
  {
    id: 325,
    title: "こうやって考える。",
    author: "外山 滋比古",
    cover: "book-0325.jpg",
    genre: "思考法",
    tags: ["思考", "アイデア", "教養"],
    status: "unread",
    rating: 0,
  }, // [50]
  {
    id: 326,
    title: "自由になるための技術リベラルアーツ",
    author: "山口 周",
    cover: "book-0326.jpg",
    genre: "その他",
    tags: ["教養", "思考法", "人生論"],
    status: "unread",
    rating: 0,
  },
  {
    id: 327,
    title: "ロジカル・シンキング",
    author: "照屋 華子,岡田 恵子",
    cover: "book-0327.jpg",
    genre: "思考法",
    tags: ["論理的思考", "ビジネススキル", "問題解決"],
    status: "unread",
    rating: 0,
  }, // [51]
  {
    id: 328,
    title: "論理的思考とは何か",
    author: "渡邉 雅子",
    cover: "book-0328.jpg",
    genre: "思考法",
    tags: ["論理", "教育", "比較文化"],
    status: "unread",
    rating: 0,
  }, // [52]
  {
    id: 329,
    title: "論理トレーニング",
    author: "野矢 茂樹",
    cover: "book-0329.jpg",
    genre: "思考法",
    tags: ["論理学", "国語力", "実践"],
    status: "unread",
    rating: 0,
  }, // [53]
  {
    id: 330,
    title: "その幸運は偶然ではないんです！",
    author: "J.D.クランボルツ",
    cover: "book-0330.jpg",
    genre: "心理学",
    tags: ["キャリア", "偶発性", "人生論"],
    status: "unread",
    rating: 0,
  }, // [54]
  {
    id: 331,
    title: "メタ認知",
    author: "三宮真智子",
    cover: "book-0331.jpg",
    genre: "心理学",
    tags: ["自己理解", "学習法", "思考力"],
    status: "unread",
    rating: 0,
  }, // [55]
  {
    id: 332,
    title: "母という呪縛 娘という牢獄",
    author: "齊藤 彩",
    cover: "book-0332.jpg",
    genre: "社会学",
    tags: ["親子関係", "心理", "ノンフィクション"],
    status: "unread",
    rating: 0,
  }, // [56]
  {
    id: 333,
    title: "NEWTYPQ ニュータイプの時代",
    author: "山口 周",
    cover: "book-0333.jpg",
    genre: "その他",
    tags: ["未来予測", "社会変化", "教養"],
    status: "unread",
    rating: 0,
  },
  {
    id: 334,
    title: "「普通がいい」という病",
    author: "泉谷 閑示",
    cover: "book-0334.jpg",
    genre: "心理学",
    tags: ["精神医学", "生き方", "適応"],
    status: "unread",
    rating: 0,
  }, // [57]
  {
    id: 335,
    title: "一勝九敗",
    author: "柳生 正",
    cover: "book-0335.jpg",
    genre: "その他",
    tags: ["ビジネス", "成功哲学", "実業家"],
    status: "unread",
    rating: 0,
  }, // [58]
  {
    id: 336,
    title: "企業評価の組織論的研究",
    author: "藤田 誠",
    cover: "book-0336.jpg",
    genre: "経営学",
    tags: ["組織論", "企業価値", "研究書"],
    status: "unread",
    rating: 0,
  }, // [59]
  {
    id: 337,
    title: "ORIGINALS 誰もが「人と違うこと」ができる時代",
    author: "アダム・グラント",
    cover: "book-0337.jpg",
    genre: "経営学",
    tags: ["独創性", "イノベーション", "リーダーシップ"],
    status: "unread",
    rating: 0,
  }, // [60]
  {
    id: 338,
    title: "アウトプット大全",
    author: "樺沢 紫苑",
    cover: "book-0338.jpg",
    genre: "その他",
    tags: ["アウトプット", "コミュニケーション", "スキルアップ"],
    status: "unread",
    rating: 0,
  }, // [61]
  {
    id: 339,
    title: "過去を「巨視」して未来を考える",
    author: "落合 陽一",
    cover: "book-0339.jpg",
    genre: "自己啓発",
    tags: ["未来予測", "歴史", "思考法"],
    status: "unread",
    rating: 0,
  }, // [62]
  {
    id: 340,
    title: "原っぱと遊園地",
    author: "青木 淳",
    cover: "book-0340.jpg",
    genre: "その他",
    tags: ["建築", "デザイン", "空間論"],
    status: "unread",
    rating: 0,
  }, // [63]
  {
    id: 341,
    title: "貧困と脳",
    author: "鈴木 大介",
    cover: "book-0341.jpg",
    genre: "社会学",
    tags: ["脳科学", "格差", "ルポルタージュ"],
    status: "unread",
    rating: 0,
  }, // [64]
  {
    id: 342,
    title: "2030年: すべてが「加速」する世界に備えよ",
    author: "ピーター・ディアマンディス",
    cover: "book-0342.jpg",
    genre: "経済学",
    tags: ["未来予測", "テクノロジー", "ビジネス"],
    status: "unread",
    rating: 0,
  }, // [65]
  {
    id: 343,
    title: "問題解決プロフェッショナル",
    author: "齋藤 嘉則",
    cover: "book-0343.jpg",
    genre: "思考法",
    tags: ["コンサルティング", "ロジカルシンキング", "ビジネススキル"],
    status: "unread",
    rating: 0,
  }, // [66]
  {
    id: 344,
    title: "C実践プログラミング",
    author: "Steve Oualline",
    cover: "book-0344.jpg",
    genre: "プログラミング",
    tags: ["C言語", "技術書", "ソフトウェア開発"],
    status: "unread",
    rating: 0,
  }, // [67]
  {
    id: 345,
    title: "教養 心理学",
    author: "金敷 大之",
    cover: "book-0345.jpg",
    genre: "心理学",
    tags: ["入門", "教科書", "科学"],
    status: "unread",
    rating: 0,
  }, // [68]
  {
    id: 346,
    title: "Pthreadsプログラミング",
    author: "Bradford Nichols",
    cover: "book-0346.jpg",
    genre: "プログラミング",
    tags: ["並列処理", "C言語", "技術書"],
    status: "unread",
    rating: 0,
  }, // [69]
  {
    id: 347,
    title: "RANGE 知識の「幅」が最強の武器になる",
    author: "デイビッド・エプスタイン",
    cover: "book-0347.jpg",
    genre: "自己啓発",
    tags: ["多様性", "専門性", "成功哲学"],
    status: "unread",
    rating: 0,
  }, // [70]
  {
    id: 348,
    title: "なぜ、読解力が必要なのか？",
    author: "池上 彰",
    cover: "book-0348.jpg",
    genre: "その他",
    tags: ["読解力", "教育", "社会問題"],
    status: "unread",
    rating: 0,
  },
  {
    id: 349,
    title: "読書する人だけがたどり着ける場所",
    author: "齋藤 孝",
    cover: "book-0349.jpg",
    genre: "その他",
    tags: ["読書論", "教養", "知性"],
    status: "unread",
    rating: 0,
  }, // [71]
  {
    id: 350,
    title: "遅読家のための読書術",
    author: "印南 敦史",
    cover: "book-0350.jpg",
    genre: "その他",
    tags: ["読書術", "フロー・リーディング", "習慣"],
    status: "unread",
    rating: 0,
  }, // [72]
  {
    id: 351,
    title: "「認められたい」の正体",
    author: "山竹 伸二",
    cover: "book-0351.jpg",
    genre: "心理学",
    tags: ["承認欲求", "人間関係", "現代社会"],
    status: "unread",
    rating: 0,
  }, // [73]
  {
    id: 352,
    title: "生贄探し",
    author: "中野 信子,ヤマザキマリ",
    cover: "book-0352.jpg",
    genre: "社会学",
    tags: ["社会心理学", "スケープゴート", "現代社会"],
    status: "unread",
    rating: 0,
  },
  {
    id: 353,
    title: "科学的な適職",
    author: "鈴木 祐",
    cover: "book-0353.jpg",
    genre: "その他",
    tags: ["キャリア", "適職診断", "自己分析"],
    status: "unread",
    rating: 0,
  },
  {
    id: 354,
    title: "正欲",
    author: "朝井 リョウ",
    cover: "book-0354.jpg",
    genre: "その他",
    tags: ["小説", "多様性", "社会派"],
    status: "unread",
    rating: 0,
  }, // [74]
  {
    id: 355,
    title: "死にがいを求めて生きているの",
    author: "朝井 リョウ",
    cover: "book-0355.jpg",
    genre: "その他",
    tags: ["小説", "現代社会", "生き方"],
    status: "unread",
    rating: 0,
  }, // [75]
  {
    id: 356,
    title: "乱読のセレンディピティ",
    author: "外山 滋比古",
    cover: "book-0356.jpg",
    genre: "思考法",
    tags: ["読書論", "偶然", "創造性"],
    status: "unread",
    rating: 0,
  }, // [76]
  {
    id: 357,
    title: "スマホ脳",
    author: "アンデシュ・ハンセン",
    cover: "book-0357.jpg",
    genre: "その他",
    tags: ["脳科学", "スマホ依存", "現代社会"],
    status: "unread",
    rating: 0,
  }, // [77]
  {
    id: 358,
    title: "スパークする思考",
    author: "内田 和成",
    cover: "book-0358.jpg",
    genre: "思考法",
    tags: ["発想", "右脳", "ビジネス"],
    status: "unread",
    rating: 0,
  }, // [78]
  {
    id: 359,
    title: "超速読力",
    author: "齋藤 孝",
    cover: "book-0359.jpg",
    genre: "その他",
    tags: ["読書術", "速読", "情報収集"],
    status: "unread",
    rating: 0,
  }, // [79]
  {
    id: 360,
    title: "スタンフォード式 人生デザイン講座",
    author: "ビル・バーネット",
    cover: "book-0360.jpg",
    genre: "思考法",
    tags: ["デザイン思考", "キャリア", "ライフプラン"],
    status: "unread",
    rating: 0,
  }, // [80]
  {
    id: 361,
    title: "STARTUP 優れた起業家は何を考え、どう行動したか",
    author: "堀 新一郎",
    cover: "book-0361.jpg",
    genre: "経営学",
    tags: ["起業", "スタートアップ", "実践"],
    status: "unread",
    rating: 0,
  }, // [81]
  {
    id: 362,
    title: "戦略的思考トレーニング",
    author: "三坂 健",
    cover: "book-0362.jpg",
    genre: "思考法",
    tags: ["戦略", "クイズ", "ビジネス脳"],
    status: "unread",
    rating: 0,
  }, // [82]
  {
    id: 363,
    title: "戦略的思考とは何か",
    author: "岡崎 久彦",
    cover: "book-0363.jpg",
    genre: "政治学",
    tags: ["戦略論", "外交", "リーダーシップ"],
    status: "unread",
    rating: 0,
  }, // [83]
  {
    id: 364,
    title: "「暗記する」戦略思考",
    author: "高松 智史",
    cover: "book-0364.jpg",
    genre: "思考法",
    tags: ["コンサル思考", "スキル", "暗記"],
    status: "unread",
    rating: 0,
  }, // [84]
  {
    id: 365,
    title: "現代語訳 学問のすすめ",
    author: "福沢 諭吉",
    cover: "book-0365.jpg",
    genre: "その他",
    tags: ["教養", "自己啓発", "古典"],
    status: "unread",
    rating: 0,
  }, // [85]
  {
    id: 366,
    title: "「超」勉強力",
    author: "中野 信子,山口真由",
    cover: "book-0366.jpg",
    genre: "その他",
    tags: ["勉強法", "脳科学", "自己啓発"],
    status: "unread",
    rating: 0,
  },
  {
    id: 367,
    title: "さあ、才能(じぶん)に目覚めよう 新版",
    author: "トム・ラス",
    cover: "book-0367.jpg",
    genre: "経営学",
    tags: ["ストレングスファインダー", "自己分析", "キャリア"],
    status: "unread",
    rating: 0,
  }, // [86]
  {
    id: 368,
    title: "生きる言葉",
    author: "俵万智",
    cover: "book-0368.jpg",
    genre: "その他",
    tags: ["エッセイ", "言葉", "人生論"],
    status: "unread",
    rating: 0,
  }, // [87]
  {
    id: 369,
    title: "THINK AGAIN",
    author: "アダム・グラント",
    cover: "book-0369.jpg",
    genre: "自己啓発",
    tags: ["思考の柔軟性", "学習", "変化"],
    status: "unread",
    rating: 0,
  }, // [88]
  {
    id: 370,
    title: "半歩先を読む思考法",
    author: "落合陽一",
    cover: "book-0370.jpg",
    genre: "思考法",
    tags: ["未来予測", "戦略思考", "テクノロジー"],
    status: "unread",
    rating: 0,
  }, // [89]
  {
    id: 371,
    title: "思考のコンパス",
    author: "山口 周",
    cover: "book-0371.jpg",
    genre: "思考法",
    tags: ["抽象思考", "アート", "未来"],
    status: "unread",
    rating: 0,
  }, // [90]
  {
    id: 372,
    title: "思考中毒になる！",
    author: "齋藤孝",
    cover: "book-0372.jpg",
    genre: "思考法",
    tags: ["思考力", "自己啓発", "習慣"],
    status: "unread",
    rating: 0,
  },
  {
    id: 373,
    title: "なぜ、いま思考力が必要なのか？",
    author: "池上 彰",
    cover: "book-0373.jpg",
    genre: "その他",
    tags: ["思考力", "教育", "社会問題"],
    status: "unread",
    rating: 0,
  },
  {
    id: 374,
    title: "考える技術・書く技術",
    author: "バーバラ ミント",
    cover: "book-0374.jpg",
    genre: "思考法",
    tags: ["ロジカルシンキング", "文章術", "ビジネススキル"],
    status: "unread",
    rating: 0,
  }, // [91]
  {
    id: 375,
    title: "共に生きるということ",
    author: "緒方貞子",
    cover: "book-0375.jpg",
    genre: "その他",
    tags: ["国際協力", "人道支援", "ノンフィクション"],
    status: "unread",
    rating: 0,
  },
  {
    id: 376,
    title: "東京藝大美術学部 究極の思考",
    author: "増村岳史",
    cover: "book-0376.jpg",
    genre: "思考法",
    tags: ["芸術思考", "創造性", "教育"],
    status: "unread",
    rating: 0,
  }, // [92]
  {
    id: 377,
    title: "職場を腐らせる人たち",
    author: "片田 珠美",
    cover: "book-0377.jpg",
    genre: "心理学",
    tags: ["職場環境", "精神分析", "人間関係"],
    status: "unread",
    rating: 0,
  }, // [93]
  {
    id: 378,
    title: "UIデザインの教科書",
    author: "原田 秀司",
    cover: "book-0378.jpg",
    genre: "コンピュータサイエンス",
    tags: ["UI/UX", "デザイン", "Web制作"],
    status: "unread",
    rating: 0,
  }, // [94]
  {
    id: 379,
    title: "UI/UXデザインの原則",
    author: "平石 大祐",
    cover: "book-0379.jpg",
    genre: "コンピュータサイエンス",
    tags: ["UI/UX", "デザイン思考", "原則"],
    status: "unread",
    rating: 0,
  }, // [95]
  {
    id: 380,
    title: "無理ゲー社会",
    author: "橘 玲",
    cover: "book-0380.jpg",
    genre: "社会学",
    tags: ["格差社会", "遺伝", "現代社会"],
    status: "unread",
    rating: 0,
  }, // [96]
  {
    id: 381,
    title: "勉強の価値",
    author: "森 博嗣",
    cover: "book-0381.jpg",
    genre: "その他",
    tags: ["学習論", "価値観", "知的好奇心"],
    status: "unread",
    rating: 0,
  }, // [97]
  {
    id: 382,
    title: "言葉にできるは武器になる",
    author: "梅田悟司 ",
    cover: "book-0382.jpg",
    genre: "その他",
    tags: ["コミュニケーション", "表現力", "自己啓発"],
    status: "unread",
    rating: 0,
  }, // [98]
  {
    id: 383,
    title: "Web3とDAO",
    author: "亀井 聡彦",
    cover: "book-0383.jpg",
    genre: "コンピュータサイエンス",
    tags: ["ブロックチェーン", "Web3", "組織論"],
    status: "unread",
    rating: 0,
  }, // [99]
  {
    id: 384,
    title: "仕事ができるとはどういうことか",
    author: "楠木 建",
    cover: "book-0384.jpg",
    genre: "経営学",
    tags: ["仕事術", "センス", "スキル"],
    status: "unread",
    rating: 0,
  }, // [100]
  {
    id: 385,
    title: "生物はなぜ死ぬのか",
    author: "小林武彦",
    cover: "book-0385.jpg",
    genre: "生物学",
    tags: ["老化", "進化", "生命科学"],
    status: "unread",
    rating: 0,
  }, // [101]
  {
    id: 386,
    title: "世界のエリートはなぜ「美意識」を鍛えるのか？",
    author: "山口 周",
    cover: "book-0386.jpg",
    genre: "その他",
    tags: ["美意識", "教養", "思考法"],
    status: "unread",
    rating: 0,
  }, // [102]
  {
    id: 387,
    title: "人はなぜ「美しい」がわかるのか",
    author: "橋本治",
    cover: "book-0387.jpg",
    genre: "その他",
    tags: ["美学", "哲学", "芸術"],
    status: "unread",
    rating: 0,
  }, // [103]
  {
    id: 388,
    title: "なぜヒトは学ぶのか",
    author: "安藤寿康",
    cover: "book-0388.jpg",
    genre: "その他",
    tags: ["学習論", "教育", "脳科学"],
    status: "unread",
    rating: 0,
  }, // [104]
  {
    id: 389,
    title: "仕事と生活についての雑記",
    author: "楠木 建",
    cover: "book-0389.jpg",
    genre: "その他",
    tags: ["仕事論", "ライフスタイル", "エッセイ"],
    status: "unread",
    rating: 0,
  }, // [105]
  {
    id: 390,
    title: "世界一流エンジニアの思考法",
    author: "牛尾剛",
    cover: "book-0390.jpg",
    genre: "思考法",
    tags: ["エンジニアリング", "問題解決", "技術者"],
    status: "unread",
    rating: 0,
  }, // [106]
  {
    id: 391,
    title: "世界は経営でできている",
    author: "岩尾 俊兵",
    cover: "book-0391.jpg",
    genre: "経営学",
    tags: ["教養", "社会の見方", "組織"],
    status: "unread",
    rating: 0,
  }, // [107]
  {
    id: 392,
    title: "ビジネスの未来",
    author: "山口 周",
    cover: "book-0392.jpg",
    genre: "経営学",
    tags: ["資本主義", "未来予測", "社会課題"],
    status: "unread",
    rating: 0,
  }, // [108]
  {
    id: 393,
    title: "これからの世界をつくる仲間たちへ",
    author: "落合 陽一",
    cover: "book-0393.jpg",
    genre: "その他",
    tags: ["未来", "テクノロジー", "メッセージ"],
    status: "unread",
    rating: 0,
  }, // [109]
  {
    id: 394,
    title: "若きサムライのために",
    author: "三島 由紀夫",
    cover: "book-0394.jpg",
    genre: "その他",
    tags: ["エッセイ", "精神論", "古典"],
    status: "unread",
    rating: 0,
  }, // [110]
  {
    id: 395,
    title: "ハイ・コンセプト",
    author: "ダニエル・ピンク",
    cover: "book-0395.jpg",
    genre: "経営学",
    tags: ["未来予測", "キャリア", "感性"],
    status: "unread",
    rating: 0,
  }, // [111]
  {
    id: 396,
    title: "ザ・ラストマン",
    author: "川村隆",
    cover: "book-0396.jpg",
    genre: "その他",
    tags: ["小説", "SF", "未来社会"],
    status: "unread",
    rating: 0,
  },
  {
    id: 397,
    title: "不勉強が身にしみる",
    author: "長山 靖生",
    cover: "book-0397.jpg",
    genre: "その他",
    tags: ["教養", "勉強論", "人生"],
    status: "unread",
    rating: 0,
  }, // [112]
  {
    id: 398,
    title: "「主体性」はなぜ伝わらないのか",
    author: "武藤浩子",
    cover: "book-0398.jpg",
    genre: "その他",
    tags: ["コミュニケーション", "職場", "人間関係"],
    status: "unread",
    rating: 0,
  }, // [113]
  {
    id: 399,
    title: "企業参謀",
    author: "大前 研一",
    cover: "book-0399.jpg",
    genre: "経営学",
    tags: ["経営戦略", "ビジネススキル", "実践"],
    status: "unread",
    rating: 0,
  },
  {
    id: 400,
    title: "何様",
    author: "朝井 リョウ",
    cover: "book-0400.jpg",
    genre: "その他",
    tags: ["小説", "現代社会", "人間関係"],
    status: "unread",
    rating: 0,
  }, // [114]
  {
    id: 401,
    title: "何者",
    author: "朝井 リョウ",
    cover: "book-0401.jpg",
    genre: "その他",
    tags: ["小説", "就活", "現代社会"],
    status: "unread",
    rating: 0,
  }, // [115]
  {
    id: 402,
    title: "働き方5.0",
    author: "落合 陽一",
    cover: "book-0402.jpg",
    genre: "その他",
    tags: ["働き方", "未来予測", "テクノロジー"],
    status: "unread",
    rating: 0,
  },
  {
    id: 403,
    title: "好きなようにしてください",
    author: "楠木 建",
    cover: "book-0403.jpg",
    genre: "その他",
    tags: ["仕事論", "人生論", "エッセイ"],
    status: "unread",
    rating: 0,
  }, // [116]
  {
    id: 404,
    title: "嫉妬論 - 民主社会に渦巻く情念を解剖する",
    author: "山本圭",
    cover: "book-0404.jpg",
    genre: "その他",
    tags: ["嫉妬", "社会心理学", "現代社会"],
    status: "unread",
    rating: 0,
  }, // [117]
  {
    id: 405,
    title: "客観性の落とし穴",
    author: "村上靖彦",
    cover: "book-0405.jpg",
    genre: "その他",
    tags: ["客観性", "認知バイアス", "思考法"],
    status: "unread",
    rating: 0,
  }, // [118]
  {
    id: 406,
    title: "斜陽",
    author: "太宰 治",
    cover: "book-0406.jpg",
    genre: "その他",
    tags: ["小説", "古典", "文学"],
    status: "unread",
    rating: 0,
  }, // [119]
  {
    id: 407,
    title: "書ける人だけが手にするもの",
    author: "齋藤 孝",
    cover: "book-0407.jpg",
    genre: "その他",
    tags: ["文章術", "自己表現", "スキル"],
    status: "unread",
    rating: 0,
  }, // [120]
  {
    id: 408,
    title: "独学の思考法 地頭を鍛える「考える技術」",
    author: "山野弘樹",
    cover: "book-0408.jpg",
    genre: "思考法",
    tags: ["独学", "思考力", "自己啓発"],
    status: "unread",
    rating: 0,
  }, // [121]
  {
    id: 409,
    title: "知的戦闘力を高める独学の技法",
    author: "山口周",
    cover: "book-0409.jpg",
    genre: "その他",
    tags: ["独学", "知識習得", "思考法"],
    status: "unread",
    rating: 0,
  }, // [122]
  {
    id: 410,
    title: "知ってるつもり",
    author: "西林 克彦",
    cover: "book-0410.jpg",
    genre: "心理学",
    tags: ["認知科学", "知識", "メタ認知"],
    status: "unread",
    rating: 0,
  }, // [123]
  {
    id: 411,
    title: "映画を早送りで観る人たち",
    author: "稲田 豊史",
    cover: "book-0411.jpg",
    genre: "社会学",
    tags: ["コンテンツ消費", "現代社会", "倍速視聴"],
    status: "unread",
    rating: 0,
  }, // [124]
  {
    id: 412,
    title: "苦しかったときの話をしようか ",
    author: "森岡 毅",
    cover: "book-0412.jpg",
    genre: "その他",
    tags: ["起業", "自己啓発", "実話"],
    status: "unread",
    rating: 0,
  },
  {
    id: 413,
    title: "草枕",
    author: "夏目 漱石",
    cover: "book-0413.jpg",
    genre: "その他",
    tags: ["小説", "古典", "文学"],
    status: "unread",
    rating: 0,
  }, // [125]
];
