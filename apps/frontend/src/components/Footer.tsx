import { IoIosMail } from "react-icons/io";
import { Link } from "react-router";
import { navItems } from "../app/router";
import profile from "../assets/favicon.png";
import github from "../assets/github-original.svg";
import note from "../assets/note.svg";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950">
      {/* 上部のアクセントライン */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:flex-row sm:gap-8">
        {/* Navigation */}
        <section className="w-full sm:w-1/3">
          <h3 className="mb-4 font-bold font-source-serif-4 text-slate-900 text-sm uppercase tracking-wide dark:text-white">
            Category
          </h3>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-2 font-medium text-slate-600 text-sm transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </section>

        {/* Contact & SNS */}
        <section className="w-full sm:w-1/3">
          <h3 className="mb-4 font-bold font-source-serif-4 text-slate-900 text-sm uppercase tracking-wide dark:text-white">
            Contact & SNS
          </h3>
          <a
            href="mailto:mrworks15@icloud.com"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <IoIosMail className="text-lg" />
            <span>mrworks15@icloud.com</span>
          </a>
          <div className="mt-3 flex gap-3 px-3">
            <a
              href="https://github.com/ryutaro3215"
              className="rounded-lg p-2 transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <img src={github} alt="GitHub" className="h-6 w-6 dark:invert" />
            </a>
            <a
              href="https://note.com/ma2ri_b2p"
              className="rounded-lg p-2 transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <img src={note} alt="note" className="h-6 w-6 dark:invert" />
            </a>
          </div>
        </section>

        {/* Profile card */}
        <section className="w-full sm:w-1/3">
          <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
            <div className="mx-auto w-24">
              <img
                src={profile}
                alt="profile"
                className="w-full rounded-full object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold font-source-serif-4 text-lg text-slate-900 dark:text-white">
                Ryutaro Matsuba
              </h3>
              <p className="mt-1 font-medium text-slate-500 text-xs tracking-wide dark:text-slate-400">
                University Student
              </p>
              <p className="mt-3 text-slate-500 text-xs leading-relaxed dark:text-slate-400">
                大学在学中に読書とプログラミングにハマる。Official髭男dismと緑黄色社会が好き。好きな本のレーベルは岩波新書。
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Copyright */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />
      <div className="mx-auto max-w-7xl px-6 py-5 text-center">
        <p className="text-slate-400 text-xs tracking-wide dark:text-slate-500">
          © 2026 R.Matsuba Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
