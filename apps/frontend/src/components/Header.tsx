import { Link, NavLink } from "react-router";
import { navItems } from "../app/router";

export function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Site Title */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide text-gray-900"
        >
          <span className="block sm:hidden">R.M Blog</span>
          <span className="hidden sm:block">R.Matsuba Blog</span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-sm transition-colors",
                  isActive ? "text-white" : "text-gray-500 hover:text-black",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
