import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { BlogDetail } from "../pages/BlogDetail";
import { BookDetail } from "../pages/BookDetail";
import { Home } from "../pages/Home";
import { Library } from "../pages/Library";
import { NotFound } from "../pages/NotFound";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/books", label: "Library" },
];

export const router = createBrowserRouter([
  {
    Component: DefaultLayout,
    children: [
      { index: true, Component: Home },
      { path: "books", Component: Library },
      { path: "books/:bookId", Component: BookDetail },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogDetail },
      { path: "*", Component: NotFound },
    ],
  },
]);
