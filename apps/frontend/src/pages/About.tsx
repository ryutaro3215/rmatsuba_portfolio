import type { Book, Tech } from "@mysite/shared";
import { Link } from "react-router";
import { createImagesByFilename, techIconModules } from "../app/importImages";
import ProfilePic from "../assets/favicon.png";
import { BookCard } from "../components/BookCard";
import { books, favoriteBooks } from "../data/books";
import { techs } from "../data/tech";

const TechCategory = ({
  title,
  items,
  icons,
}: {
  title: string;
  items: Tech[];
  icons: Record<string, string>;
}) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
    <p className="mb-3 font-semibold text-slate-900 text-sm dark:text-white">
      {title}
    </p>
    <div className="flex flex-row flex-wrap gap-2">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg p-1.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <img
            src={icons[item.cover]}
            alt={item.name}
            className="h-8 w-8 object-contain sm:h-10 sm:w-10"
          />
        </a>
      ))}
    </div>
  </div>
);

export const About = () => {
  const techIcons = createImagesByFilename(techIconModules);
  const languages: Tech[] = techs.filter(
    (tech) => tech.category === "Languages",
  );
  const frameworksAndLibraries: Tech[] = techs.filter(
    (tech) => tech.category === "Frameworks / Libraries",
  );
  const infrastructuresAndEnvironments: Tech[] = techs.filter(
    (tech) => tech.category === "Infrastructure / Environments",
  );
  const toolingAndWorkflows: Tech[] = techs.filter(
    (tech) => tech.category === "Tooling / Workflows",
  );
  const favoriteBooksData: Book[] = books.filter((book) =>
    favoriteBooks.includes(book.id),
  );
  return (
    <div className="mx-auto w-full">
      {/* Page header */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <h1 className="font-bold font-source-serif-4 text-4xl text-slate-900 tracking-tight sm:text-5xl lg:text-6xl dark:text-white">
          About Me
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed dark:text-slate-400">
          「私」について
        </p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-20">
        {/* Profile */}
        <section>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
            <div className="shrink-0">
              <div className="mx-auto w-40 sm:w-48 md:w-56">
                <img
                  className="block w-full rounded-full border border-slate-200 object-contain dark:border-slate-700"
                  src={ProfilePic}
                  alt="profile"
                />
              </div>
              <p className="mt-3 text-center font-bold text-lg text-slate-900 dark:text-white">
                Ryutaro Matsuba
              </p>
              <p className="text-center text-slate-500 text-sm dark:text-slate-400">
                University Student
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-base text-slate-600 leading-relaxed dark:text-slate-400">
                東京理科大学経営学部経営学科所属の大学4年。趣味は読書や書店巡り、好きなアーティストのライブに行ったり、美味しいものを食べること。
              </p>
              <p className="text-base text-slate-600 leading-relaxed dark:text-slate-400">
                好奇心が強く、自分が気になったことや知りたいことについて調べるのが好きで、読む本のジャンルも社会科学や人文学をメインにいろいろ読んでいます。
              </p>
              <p className="text-base text-slate-600 leading-relaxed dark:text-slate-400">
                このブログでは私が考えたことや疑問に思ったこと、学んだことの備忘録として書いています。自分が書きたいことをメインとしながらも、読んでもらう人に価値を感じてもらえるように書いていますのでぜひ読んでいってください。
              </p>
            </div>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="scroll-mt-24">
          <h2 className="font-bold text-2xl text-slate-900 sm:text-3xl dark:text-white">
            Research
          </h2>
          <div className="mt-2 h-px w-16 bg-slate-900 dark:bg-white" />
          <p className="mt-6 text-base text-slate-600 leading-relaxed dark:text-slate-400">
            現在大学では経営学における
            <span className="font-bold text-slate-900 dark:text-white">
              経営組織や経営管理・経営戦略論
            </span>
            を専門として勉強しています。卒業研究では主に組織の中における人材の多様性と組織の知の関係性をテーマとしており、具体的には個人内の多様性である
            <span className="font-bold text-slate-900 dark:text-white">
              イントラパーソナルダイバーシティ
            </span>
            と
            <span className="font-bold text-slate-900 dark:text-white">
              認知的柔軟性
            </span>
            の関連性についての研究を行なっています。
            大学院ではこのテーマから発展させ引き続き研究を進めて行く予定です。
          </p>
        </section>

        {/* Coding */}
        <section id="coding" className="scroll-mt-24">
          <h2 className="font-bold text-2xl text-slate-900 sm:text-3xl dark:text-white">
            Coding
          </h2>
          <div className="mt-2 h-px w-16 bg-slate-900 dark:bg-white" />
          <p className="mt-6 text-base text-slate-600 leading-relaxed dark:text-slate-400">
            <a
              href="https://42tokyo.jp/"
              className="font-bold text-slate-900 underline dark:text-white"
            >
              42Tokyo
            </a>
            というエンジニア養成機関を卒業。完全初学者からC言語を通じてコンピュータサイエンスの基礎を習得し、同時に基本情報技術者試験も一発で合格。個人ではTypeScriptをはじめReactやVite,
            HonoといったWeb技術や、rustなども勉強中。本ブログも自作しており、
            扱った技術に関するブログ記事も投稿しています。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <TechCategory
              title="Languages"
              items={languages}
              icons={techIcons}
            />
            <TechCategory
              title="Frameworks & Libraries"
              items={frameworksAndLibraries}
              icons={techIcons}
            />
            <TechCategory
              title="Infrastructure & Environments"
              items={infrastructuresAndEnvironments}
              icons={techIcons}
            />
            <TechCategory
              title="Tooling & Workflows"
              items={toolingAndWorkflows}
              icons={techIcons}
            />
          </div>
        </section>

        {/* Books */}
        <section id="books">
          <h2 className="font-bold text-2xl text-slate-900 sm:text-3xl dark:text-white">
            Books
          </h2>
          <div className="mt-2 h-px w-16 bg-slate-900 dark:bg-white" />
          <p className="mt-6 text-base text-slate-600 leading-relaxed dark:text-slate-400">
            読書にハマったのは大学に入学してから。元々知的好奇心みたいなものは比較的高かったので気になった本を片っ端から買っては読みを繰り返していたら、4年で大体
            <span className="font-bold text-slate-900 dark:text-white">
              350冊
            </span>
            くらいの本を読んでいました。特によく読むジャンルとしては、
            <span className="font-bold text-slate-900 dark:text-white">
              経営学
            </span>
            や{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              歴史、思想・哲学、コンピュータサイエンス
            </span>
            など。新書が好きで、特に
            <span className="font-bold text-slate-900 dark:text-white">
              岩波新書
            </span>
            、や
            <span className="font-bold text-slate-900 dark:text-white">
              講談社現代新書
            </span>
            が個人的好きな出版レーベルです。{" "}
            <Link
              to="/books"
              className="font-bold text-slate-900 underline dark:text-white"
            >
              Libraryページ
            </Link>
            にこれまで読んだ書籍を本棚として置いており、本の感想や書評はBlogで公開しています。
          </p>
          <div className="mt-8">
            <p className="mb-4 font-bold text-lg text-slate-900 dark:text-white">
              おすすめの本ピックアップ
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {favoriteBooksData.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/books"
                className="inline-block rounded-lg bg-slate-900 px-5 py-2.5 font-medium text-sm text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Library を見る
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
