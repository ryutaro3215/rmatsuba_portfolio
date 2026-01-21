import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { navItems } from "../app/router";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-fit bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[100rem] items-center justify-between px-6">
        <Link to="/" className="font-semibold text-black text-lg tracking-wide">
          <span className="block text-2xl sm:hidden">R.M Blog</span>
          <span className="hidden sm:block sm:text-4xl md:text-5xl">
            R.Matsuba Blog
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 sm:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-2xl underline-offset-8 transition-colors",
                  "text-black/80 hover:text-black hover:underline",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  isActive ? "text-black underline" : "",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="text-3xl text-black sm:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <IoMdMenu />
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="fixed inset-0 z-40">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <aside
            className="fixed top-0 right-0 z-50 h-full w-64 bg-white p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <button
              className="mb-8 text-3xl text-black"
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
                      "text-lg underline-offset-8 transition-colors",
                      "text-black/80 hover:text-black hover:underline",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                      isActive ? "text-black underline" : "",
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
