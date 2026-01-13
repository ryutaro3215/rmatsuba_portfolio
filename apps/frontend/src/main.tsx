import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TestComponent } from "./Test";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TestComponent />
  </StrictMode>,
);
