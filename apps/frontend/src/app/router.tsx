import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { BookDetail } from "../pages/BookDetail";
import { Home } from "../pages/Home";
import { Library } from "../pages/Library";
import { NotFound } from "../pages/NotFound";

export const navItems = [
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
      { path: "*", Component: NotFound },
    ],
  },
]);
