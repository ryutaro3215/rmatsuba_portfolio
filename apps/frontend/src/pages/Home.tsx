import { Link } from "react-router";
import coding from "../assets/42Tokyo.png";
import books from "../assets/books.png";
import favicon from "../assets/favicon.png";
import management from "../assets/management.png";

const linkCards = [
  {
    to: "/about#research",
    title: "Research",
    description:
      "経営学部に所属し、専攻は経営組織や経営管理、経営戦略論です。卒業論文における研究では、主に組織における多様性と組織におけるその効果について研究を行なっており、大学院への進学し研究を継続する予定です。",
    image: management,
    alt: "Management",
  },
  {
    to: "/about#coding",
    title: "Coding",
    description:
      "23年8月に42Tokyoに入学し、26年1月にカリキュラムを修了。C、C++、TypeScriptなどを主に勉強し、OSや基本的なアルゴリズム、ネットワークなど基本的なコンピュータサイエンスの知識を勉強しました。今は自分でサイトを作ったり、自由に勉強・開発して遊んでいます。",
    image: coding,
    alt: "Coding",
  },
  {
    to: "/books",
    title: "Books",
    description:
      "本が大好きで、週に一度は必ず書店に行ってダラダラ本を見ています。特に読むジャンルは専門の経営学に関連する本から、歴史、哲学・思想、コンピュータサイエンス・ソフトウェアなど。Libraryはこれまで読んだ本を一覧として紹介しています。",
    image: books,
    alt: "Books",
  },
];

export const Home = () => {
  return (
    <div className="mx-auto w-full">
      {/* Hero */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <p className="mx-auto max-w-4xl text-center font-source-serif-4 text-3xl text-slate-900 italic leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
          Non ridere, non lugere, neque detestari, sed intelligere.
        </p>
        <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-600" />
        <p className="mt-8 max-w-2xl text-center text-base text-slate-600 leading-relaxed dark:text-slate-400">
          「馬鹿にしたり嘆いたり疑ったりせずに、ただありのままを理解する。」
          17世紀の哲学者スピノザが『エチカ』に記したこの言葉は、私がこのサイトをつくった理由の一つでもあります。
          このブログは、私自身の思考や学びを可視化する場です。普段読んだ本の記録や、学んだこと、考えたことをまとめています。
          誰かの学びにもなったら嬉しいです。
        </p>
      </section>

      {/* Profile */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-16">
          <div className="w-40 shrink-0 sm:w-48 md:w-56">
            <img
              src={favicon}
              alt="profile"
              className="block w-full rounded-full border border-slate-200 object-contain dark:border-slate-700"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="mb-6 font-bold text-2xl text-slate-900 sm:text-3xl dark:text-white">
              Owner Profile
            </h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-900 sm:mx-0 dark:bg-white" />
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-left">
              <dt className="font-medium text-slate-900 dark:text-white">
                Name
              </dt>
              <dd className="text-slate-600 dark:text-slate-400">
                Ryutaro Matsuba
              </dd>
              <dt className="font-medium text-slate-900 dark:text-white">
                Email
              </dt>
              <dd className="text-slate-600 dark:text-slate-400">
                mrworks15@icloud.com
              </dd>
              <dt className="font-medium text-slate-900 dark:text-white">
                Role
              </dt>
              <dd className="text-slate-600 dark:text-slate-400">
                Graduation University Student
              </dd>
            </dl>
          </div>
        </div>
      </section>

      {/* Link cards */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {linkCards.map((card) => (
            <Link to={card.to} key={card.to} className="group">
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                <div className="flex items-center justify-center overflow-hidden bg-slate-50 p-6 dark:bg-slate-800">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-40 w-40 object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-400">
                    {card.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
