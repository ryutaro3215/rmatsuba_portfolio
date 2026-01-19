import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { navItems } from "../app/router";

export function Header() {
  const [open, setOpen] = useState(false);
  const [onHero, setOnHero] = useState(true);

  //Headerの位置によって、文字の色を変える
  useEffect(() => {
    const headerOffset = 80;

    const update = () => {
      const scrollY = window.innerHeight - headerOffset;
      setOnHero(window.scrollY < scrollY);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const text = onHero ? "text-white" : "text-black";
  const navText = onHero
    ? "text-white/80 hover:text-white"
    : "text-black/80 hover:text-black";

  const headerBg = onHero
    ? "bg-transparent"
    : "bg-white/80 backdrop-blur border-b border-black/10";

  return (
    <header className="fixed top-0 right-0 left-0 z-50 mt-5 h-fit">
      <div
        className={[
          "mx-auto flex h-16 max-w-[100rem] items-center justify-between px-6 transition-colors",
          headerBg,
        ].join(" ")}
      >
        <Link
          to="/"
          className={["font-semibold text-lg tracking-wide", text].join(" ")}
        >
          <span className="block text-2xl sm:hidden">R.M Blog</span>
          <span className="hidden sm:block sm:text-4xl md:text-5xl">
            R.Matsuba Blog
          </span>
        </Link>

        <nav className="hidden gap-8 sm:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-2xl underline-offset-8 transition-colors hover:underline",
                  navText,
                  onHero
                    ? "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    : "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  isActive
                    ? onHero
                      ? "text-white underline"
                      : "text-black underline"
                    : "",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={["text-3xl sm:hidden", text].join(" ")}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <IoMdMenu />
        </button>
      </div>

      {/* Mobile navigation menu */}
      {open && (
        <div className="fixed inset-0 z-40">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <aside
            className="fixed top-0 right-0 z-50 h-full w-64 bg-black p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <button
              className="mb-8 text-3xl text-white"
              onClick={() => setOpen(false)}
              type="button"
            >
              <IoMdClose />
            </button>
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "text-lg text-white/80 underline-offset-8 transition-colors",
                      "hover:text-white hover:underline",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2",
                      "focus-visible:ring-offset-black",
                      isActive ? "text-gray-400 underline" : "hover:text-white",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
