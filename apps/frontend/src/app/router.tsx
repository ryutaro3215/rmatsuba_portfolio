import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export const navItems = [
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/library", label: "Library" },
];

export const router = createBrowserRouter([
  {
    Component: DefaultLayout,
    children: [
      { index: true, Component: Home },
      { path: "*", Component: NotFound },
    ],
  },
]);
