import type { Book, Tech } from "@mysite/shared";
import { Link } from "react-router";
import { createImagesByFilename, techIconModules } from "../app/importImages";
import AboutBgi from "../assets/about.jpg";
import ProfilePic from "../assets/favicon.png";
import { BookCard } from "../components/BookCard";
import { books, favoriteBooks } from "../data/books";
import { techs } from "../data/tech";

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
      <div className="relative h-screen w-full">
        <img
          src={AboutBgi}
          alt="Home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="felx w-full flex-col items-center justify-center">
            <p className="mx-auto w-full max-w-[90%] text-center font-source-serif-4 text-[3rem] text-white sm:text-[6rem] md:text-[10rem] lg:text-[18rem]">
              About Me
            </p>
            <p className="mx-auto w-full max-w-[90%] text-center font-source-serif-4 text-[1rem] text-white sm:text-[2rem] md:text-[3rem] lg:text-[4rem]">
              「私」について
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-10 flex max-w-[80%] flex-col gap-8">
        <section className="mb-10 w-full border border-gray-300 p-3 pb-7 shadow-lg">
          <h3 className="mb-3 w-full text-center font-bold text-lg sm:mb-5 sm:text-2xl md:text-4xl lg:text-5xl">
            Profile
          </h3>
          <div className="mx-auto flex w-full flex-col items-stretch sm:flex-row sm:justify-center sm:gap-8 lg:max-w-[80%]">
            <div className="mb-3">
              <div className="mx-auto mb-5 w-[10rem] sm:mt-4 md:w-[15rem] lg:w-[22rem]">
                <img
                  className="block h-full w-full rounded-full border border-black object-contain md:border-2"
                  src={ProfilePic}
                  alt="profile"
                />
              </div>
              <p className="mb-1 text-center font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl">
                Ryutaro Matsuba
              </p>
              <p className="mb-1 text-center font-bold text-xs sm:text-base md:text-xl lg:text-2xl">
                University Student
              </p>
            </div>
            <div className="mt-4 flex w-full flex-col justify-center sm:w-[50%] md:w-[50%] md:gap-3 lg:gap-5">
              <p className="mb-3 font-light text-sm sm:text-base md:text-lg lg:text-xl">
                東京理科大学経営学部経営学科所属の大学4年。趣味は読書や書店巡り、好きなアーティストのライブに行ったり、美味しいものを食べること。
              </p>
              <p className="mb-3 font-light text-sm sm:text-base md:text-lg lg:text-xl">
                好奇心が強く、自分が気になったことや知りたいことについて調べるのが好きで、読む本のジャンルも社会科学や人文学をメインにいろいろ読んでいます。
              </p>
              <p className="mb-3 font-light text-sm sm:text-base md:text-lg lg:text-xl">
                このブログでは私が考えたことや疑問に思ったこと、学んだことの備忘録として書いています。自分が書きたいことをメインとしながらも、読んでもらう人に価値を感じてもらえるように書いていますのでぜひ読んでいってください。
              </p>
            </div>
          </div>
        </section>
        <section className="mb-10 w-full border border-gray-300 p-3 pb-7 shadow-lg">
          <h3 className="mb-3 w-full text-center font-bold text-lg sm:mb-5 sm:text-2xl md:text-4xl lg:text-5xl">
            Research
          </h3>
          <p className="mb-3 w-full font-light text-sm sm:text-base md:text-lg lg:text-xl">
            現在大学では経営学における
            <span className="font-bold">経営組織や経営管理・経営戦略論</span>
            を専門として勉強しています。卒業研究では主に組織の中における人材の多様性と組織の知の関係性をテーマとしており、具体的には個人内の多様性である
            <span className="font-bold">イントラパーソナルダイバーシティ</span>
            と<span className="font-bold">認知的柔軟性</span>
            の関連性についての研究を行なっています。
            大学院ではこのテーマから発展させ引き続き研究を進めて行く予定です。
          </p>
        </section>
        <section className="mb-10 w-full border border-gray-300 p-3 pb-7 shadow-lg">
          <h3 className="mb-3 w-full text-center font-bold text-lg sm:mb-5 sm:text-2xl md:text-4xl lg:text-5xl">
            Coding
          </h3>
          <p className="mb-3 w-full font-light font-right text-sm sm:text-base md:text-lg lg:text-xl">
            <a href="https://42tokyo.jp/" className="font-bold underline">
              42Tokyo
            </a>
            というエンジニア養成機関を卒業。完全初学者からC言語を通じてコンピュータサイエンスの基礎を習得し、同時に基本情報技術者試験も一発で合格。個人ではTypeScriptをはじめReactやVite,
            HonoといったWeb技術や、rustなども勉強中。本ブログも自作しており、
            扱った技術に関するブログ記事も投稿しています。
          </p>
          <div className="mx-auto flex w-full flex-col border-gray-300 border-t pt-3 lg:flex-row lg:justify-center lg:gap-5">
            <div className="mb-3 w-full">
              <p className="mb-1.5 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Languages
              </p>
              <ul className="flex flex-row flex-wrap gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-4">
                {languages.map((language) => (
                  <li
                    key={language.id}
                    className="inline-block w-[2rem] sm:w-[2.5rem] md:w-[3rem] lg:w-[3.5rem]"
                  >
                    <a
                      href={language.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:opacity-80"
                    >
                      <img
                        src={techIcons[language.cover]}
                        alt={language.name}
                        className="h-full w-full object-contain"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-3 w-full">
              <p className="mb-1.5 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Frameworks & Libraries
              </p>
              <ul className="flex flex-row flex-wrap gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-4">
                {frameworksAndLibraries.map((frameworksAndLibraries) => (
                  <li
                    key={frameworksAndLibraries.id}
                    className="inline-block w-[2rem] sm:w-[2.5rem] md:w-[3rem] lg:w-[3.5rem]"
                  >
                    <a
                      href={frameworksAndLibraries.url}
                      className="transition hover:opacity-80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={techIcons[frameworksAndLibraries.cover]}
                        alt={frameworksAndLibraries.name}
                        className="h-full w-full object-contain"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-3 w-full">
              <p className="mb-1.5 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Infrastructure and Environments
              </p>
              <ul className="flex flex-row flex-wrap gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-4">
                {infrastructuresAndEnvironments.map(
                  (infrastructuresAndEnvironments) => (
                    <li
                      key={infrastructuresAndEnvironments.id}
                      className="inline-block w-[2rem] sm:w-[2.5rem] md:w-[3rem] lg:w-[3.5rem]"
                    >
                      <a
                        className="transition hover:opacity-80"
                        href={infrastructuresAndEnvironments.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={techIcons[infrastructuresAndEnvironments.cover]}
                          alt={infrastructuresAndEnvironments.name}
                          className="h-full w-full object-contain"
                        />
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="mb-3 w-full">
              <p className="mb-1.5 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Tooling and Workflows
              </p>
              <ul className="flex flex-row flex-wrap gap-0.5 sm:gap-1.5 md:gap-2 lg:gap-4">
                {toolingAndWorkflows.map((toolingAndWorkflows) => (
                  <li
                    key={toolingAndWorkflows.id}
                    className="inline-block w-[2rem] sm:w-[2.5rem] md:w-[3rem] lg:w-[3.5rem]"
                  >
                    <a
                      className="transition hover:opacity-80"
                      href={toolingAndWorkflows.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={techIcons[toolingAndWorkflows.cover]}
                        alt={toolingAndWorkflows.name}
                        className="h-full w-full object-contain"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="mb-10 w-full border border-gray-300 p-3 pb-10 shadow-lg">
          <h3 className="mb-3 w-full text-center font-bold text-lg sm:mb-5 sm:text-2xl md:text-4xl lg:text-5xl">
            Books
          </h3>
          <p className="mb-5 w-full font-light text-sm sm:text-base md:text-lg lg:text-xl">
            読書にハマったのは大学に入学してから。元々知的好奇心みたいなものは比較的高かったので気になった本を片っ端から買っては読みを繰り返していたら、4年で大体
            <span className="font-bold">350冊</span>
            くらいの本を読んでいました。特によく読むジャンルとしては、
            <span className="font-bold">経営学</span>や{" "}
            <span className="font-bold">
              {" "}
              歴史、思想・哲学、コンピュータサイエンス
            </span>
            など。新書が好きで、特に<span className="font-bold">岩波新書</span>
            、や<span className="font-bold">講談社現代新書</span>
            が個人的好きな出版レーベルです。{" "}
            <Link to="/books" className="font-bold underline">
              Libraryページ
            </Link>
            にこれまで読んだ書籍を本棚として置いており、本の感想や書評はBlogで公開しています。
          </p>
          <div className="mx-auto w-full rounded-lg border border-gray-500 p-3 lg:max-w-[60%]">
            <p className="test-sm mb-3 text-center font-bold sm:text-base md:text-lg lg:text-xl">
              おすすめの本ピックアップ
            </p>
            <div className="mx-auto mb-5 grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
              {favoriteBooksData.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
            <Link
              to="/books"
              className="block text-center font-bold text-sm underline sm:text-base md:text-lg lg:text-xl"
            >
              Libraryページ
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
