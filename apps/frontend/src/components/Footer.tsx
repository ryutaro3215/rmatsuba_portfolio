import { IoIosArrowForward, IoIosMail } from "react-icons/io";
import { Link } from "react-router";
import { navItems } from "../app/router";
import profile from "../assets/favicon.png";
import github from "../assets/github-original.svg";
import note from "../assets/note.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-t-gray-500 bg-white">
      <div className="mx-auto flex max-w-[100rem] flex-col gap-8 px-6 py-10 sm:flex-row">
        <section className="w-full sm:w-1/3">
          <div className="">
            <h3 className="border-b-2 pb-1 font-medium text-2xl text-gray-500">
              Category
            </h3>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="mt-4 flex text-gray-500 transition-colors hover:text-black"
              >
                <IoIosArrowForward />
                <span className="ml-1 leading-none"> {item.label}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="w-full sm:w-1/3">
          <div className="">
            <h3 className="border-b-2 pb-1 font-medium text-2xl text-gray-500">
              Contact & SNS
            </h3>
            <a
              href="mailto:mrworks15@icloud.com"
              className="mt-4 inline-flex w-full items-center text-base text-gray-500 transition-colors hover:text-black"
            >
              <IoIosMail className="pt-1 text-2xl" />
              <span className="leading-none">: mrworks15@icloud.com</span>
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/ryutaro3215">
                <img
                  src={github}
                  alt="github profile"
                  className="mt-4 h-10 w-10 transition-opacity hover:opacity-70"
                />
              </a>
              <a href="https://note.com/ma2ri_b2p">
                <img
                  src={note}
                  alt="note profile"
                  className="mt-4 h-10 w-10 border border-gray-300 transition-opacity hover:opacity-70"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="w-full rounded-2xl border border-gray-600 sm:w-1/3">
          <div className="rounded-2xl">
            <img
              src={profile}
              alt="profile"
              className="mx-auto max-w-[300px] rounded-2xl px-3"
            />
            <div className="mx-auto mt-4 mb-2 flex w-full max-w-[300px] flex-col px-3">
              <h3 className="pb-4 text-center text-2xl text-black leading-none">
                Ryutaro Matsuba
              </h3>
              <p className="pb-2 text-center leading-none">
                University Student
              </p>
              <p className="text-center text-xs leading-4">
                大学在学中に読書とプログラミングにハマる。Official髭男dismと緑黄色社会が好き。好きな本のレーベルは岩波新書。
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto max-w-6xl border-white/10 border-t px-6 py-4 text-center">
        <p className="text-gray-500 text-xs tracking-wide">
          © 2026 R.Matsuba blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
