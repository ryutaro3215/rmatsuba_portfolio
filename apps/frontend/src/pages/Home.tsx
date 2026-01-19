import coding from "../assets/42Tokyo.png";
import books from "../assets/books.png";
import favicon from "../assets/favicon.png";
import HomeBgi from "../assets/Home-bgi.jpg";
import management from "../assets/management.png";

export const Home = () => {
  return (
    <div className="mx-auto w-full">
      <div className="relative h-screen w-full">
        <img
          src={HomeBgi}
          alt="Home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <p className="w-full max-w-[90%] px-4 text-center font-source-serif-4 text-2xl text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Non ridere, non lugere, neque detestari, sed intelligere.
          </p>
        </div>
      </div>
      <p className="mx-auto my-10 max-w-[80%] bg-gray-200 px-4 py-2 text-sm leading-10 sm:px-20 sm:py-10 sm:text-lg">
        「馬鹿にしたり嘆いたり疑ったりせずに、ただありのままを理解する。」  
        17世紀の哲学者スピノザが『エチカ』に記したこの言葉は、私がこのサイトをつくった理由の一つでもあります。
        このブログは、私自身の思考や学びを可視化する場です。普段読んだ本の記録や、学んだこと、考えたことをまとめています。
        誰かの学びにもなったら嬉しいです。
      </p>
      <section className="mx-auto mb-10 flex max-w-[80%] flex-col gap-5 bg-blue-50 py-5 shadow-2xl sm:flex-row sm:items-center sm:justify-center sm:gap-7 md:gap-20">
        <div className="mx-auto w-[10rem] shrink-0 sm:w-3xs md:mx-0 md:w-2xs xl:w-sm">
          <img
            src={favicon}
            alt="profile"
            className="block h-full w-full rounded-full border border-black object-contain md:border-2"
          />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg sm:mb-3 sm:text-2xl md:text-4xl">
            Owner Profile
          </h3>
          <dl className="">
            <dt className="font-medium text-base sm:text-lg md:text-xl xl:text-2xl">
              Name
            </dt>
            <dd className="mb-2 text-sm sm:text-base md:text-lg xl:text-xl">
              Ryutaro Matsuba
            </dd>
            <dt className="font-medium text-base sm:text-lg md:text-xl xl:text-2xl">
              Email
            </dt>
            <dd className="mb-2 text-sm sm:text-base md:text-lg xl:text-xl">
              mrworks15@icloud.com
            </dd>
            <dt className="font-medium text-base sm:text-lg md:text-xl xl:text-2xl">
              Role
            </dt>
            <dd className="mb-2 text-sm sm:text-base md:text-lg xl:text-xl">
              Graduation University Student
            </dd>
          </dl>
        </div>
      </section>
      <section className="mx-auto mb-10 max-w-[80%]">
        <li className="mx-auto list-none xl:max-w-[60%]">
          <ul className="mt-4 mb-10 flex flex-col gap-7 rounded-lg border border-gray-300 p-5 shadow-lg sm:flex-row">
            <div className="">
              <p className="mb-2 text-center font-bold text-xl sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
                Research
              </p>
              <p className="font-light text-sm sm:text-base md:text-lg lg:text-xl">
                経営学部に所属し、専攻は経営組織や経営管理、経営戦略論です。
                卒業論文における研究では、主に組織における多様性と組織におけるその効果について研究を行なっており、大学院への進学し研究を継続する予定です。
              </p>
            </div>
            <div className="mx-auto flex h-42 w-42 shrink-0 items-center justify-center sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
              <img
                src={management}
                className="max-h-full max-w-full rounded-lg object-contain"
                alt="Management"
              />
            </div>
          </ul>
          <ul className="mt-4 mb-10 flex flex-col gap-7 rounded-lg border border-gray-300 p-5 shadow-lg sm:flex-row">
            <div className="">
              <p className="mb-2 text-center font-bold text-xl sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
                Coding
              </p>
              <p className="font-light text-sm sm:text-base md:text-lg lg:text-xl">
                23年8月に42Tokyoに入学し、26年1月にカリキュラムを修了。
                C、C++、TypeScriptなどを主に勉強し、OSや基本的なアルゴリズム、ネットワークなど基本的なコンピュータサイエンスの知識を勉強しました。
                今は自分でサイトを作ったり、自由に勉強・開発して遊んでいます。
              </p>
            </div>
            <div className="mx-auto flex h-42 w-42 shrink-0 items-center justify-center sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
              <img
                className="max-h-full max-w-full rounded-lg object-contain"
                src={coding}
                alt="coding"
              />
            </div>
          </ul>
          <ul className="mt-4 mb-10 flex flex-col gap-7 rounded-lg border border-gray-300 p-5 shadow-lg sm:flex-row">
            <div className="mb-4">
              <p className="mb-2 text-center font-bold text-xl sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
                Books
              </p>
              <p className="font-light text-sm sm:text-base md:text-lg lg:text-xl">
                本が大好きで、週に一度は必ず書店に行ってダラダラ本を見ています。特に読むジャンルは専門の経営学に関連する本から、歴史、哲学・思想、コンピュータサイエンス・ソフトウェアなど。
                Libraryはこれまで読んだ本を一覧として紹介しています。
              </p>
            </div>
            <div className="mx-auto flex size-42 h-42 w-42 shrink-0 items-center justify-center sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
              <img
                className="max-h-full max-w-full rounded-lg object-contain"
                src={books}
                alt="books"
              />
            </div>
          </ul>
        </li>
      </section>
    </div>
  );
};
