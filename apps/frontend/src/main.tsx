import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TestComponent } from "./Test";

const root = document.querySelector<HTMLElement>("#root");

if (!root) throw new Error("Failed to find the root element");

createRoot(root).render(
  <StrictMode>
    <TestComponent />
  </StrictMode>,
);
