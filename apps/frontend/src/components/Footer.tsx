import { IoIosArrowForward, IoIosMail } from "react-icons/io";
import { Link } from "react-router";
import { navItems } from "../app/router";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 flex gap-8 sm:flex-row flex-col">
        <section className="sm:w-1/3 w-full">
          <div className="">
            <h3 className="text-gray-500 font-medium text-2xl border-b-2 pb-1">
              Category
            </h3>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex mt-4 text-gray-500 hover:text-black transition-colors"
              >
                <IoIosArrowForward />
                <span className="ml-1 leading-none"> {item.label}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="sm:w-1/3 w-full">
          <div className="">
            <h3 className="text-gray-500 font-medium text-2xl border-b-2 pb-1">
              Contact & SNS
            </h3>
            <a
              href="mailto:mrworks15@icloud.com"
              className="text-base w-full text-gray-500 hover:text-black transition-colors inline-flex items-center mt-4 "
            >
              <IoIosMail className="text-2xl pt-1" />
              <span className="leading-none">: mrworks15@icloud.com</span>
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/ryutaro3215">
                <img
                  src="/src/assets/github-original.svg"
                  alt="github profile"
                  className="w-10 h-10 mt-4 hover:opacity-70 transition-opacity"
                />
              </a>
              <a href="https://note.com/ma2ri_b2p">
                <img
                  src="/src/assets/note.svg"
                  alt="note profile"
                  className="border border-gray-300 w-10 h-10 mt-4 hover:opacity-70 transition-opacity"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="sm:w-1/3 w-full border border-gray-600 rounded-2xl">
          <div className="rounded-2xl">
            <img
              src="/src/assets/favicon.png"
              alt="profile"
              className="rounded-2xl px-3 border-radius: 50% mx-auto"
            />
            <div className="w-full mt-4 mb-2 px-3">
              <h3 className="text-center text-2xl text-black leading-none pb-4">
                Ryutaro Matsuba
              </h3>
              <p className="text-center leading-none pb-2">
                University Student
              </p>
              <p className="text-center text-xs leading-4">
                大学在学中に読書とプログラミングにハマる。Official髭男dismと緑黄色社会が好き。好きな本のレーベルは岩波新書。
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="max-w-6xl mx-auto border-t border-white/10 px-6 py-4 text-center">
        <p className="text-xs tracking-wide text-gray-500">
          © 2026 R.Matsuba blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
