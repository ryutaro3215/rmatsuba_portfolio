import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { navItems } from "../app/router";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // bodyのスクロールロック
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/85 shadow-sm backdrop-blur-xl dark:bg-slate-950/85 dark:shadow-slate-800/30"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="group relative flex items-center gap-2">
            <span className="font-bold font-source-serif-4 text-slate-900 text-xl tracking-tight transition-colors group-hover:text-slate-600 sm:text-2xl dark:text-white dark:group-hover:text-slate-300">
              R.Matsuba
            </span>
            <span className="hidden font-light font-source-serif-4 text-slate-400 text-xl sm:inline dark:text-slate-500">
              Blog
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  [
                    "nav-link relative rounded-lg px-4 py-2 font-medium text-sm tracking-wide transition-all duration-200",
                    isActive
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="ml-2 border-slate-200 border-l pl-2 dark:border-slate-700">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-1 sm:hidden">
            <ThemeToggle />
            <button
              className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              type="button"
            >
              <IoMdMenu className="text-2xl" />
            </button>
          </div>
        </div>

        {/* 下部のアクセントライン */}
        <div
          className={[
            "h-px transition-opacity duration-300",
            scrolled
              ? "bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-100 dark:via-slate-700"
              : "opacity-0",
          ].join(" ")}
        />
      </header>

      {/* Mobile overlay */}
      <div
        className={[
          "fixed inset-0 z-60 transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        {/* Mobile drawer */}
        <aside
          className={[
            "fixed top-0 right-0 z-60 flex h-full w-72 flex-col bg-white transition-transform duration-300 ease-out dark:bg-slate-900",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between border-slate-100 border-b px-6 py-4 dark:border-slate-800">
            <span className="font-bold font-source-serif-4 text-lg text-slate-900 dark:text-white">
              Menu
            </span>
            <button
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              onClick={() => setOpen(false)}
              type="button"
              aria-label="Close menu"
            >
              <IoMdClose className="text-xl" />
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="flex flex-col gap-1 px-4 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-4 py-3 font-medium text-sm transition-all duration-200",
                    isActive
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
