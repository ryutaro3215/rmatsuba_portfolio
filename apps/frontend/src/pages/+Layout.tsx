import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../style.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;
    const root = document.documentElement;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      root.style.setProperty("--mxabs", `${cx}px`);
      root.style.setProperty("--myabs", `${cy}px`);
      const mx = (tx / window.innerWidth - 0.5) * 24;
      const my = (ty / window.innerHeight - 0.5) * 24;
      root.style.setProperty("--mx", `${mx}px`);
      root.style.setProperty("--my", `${my}px`);
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="grain-layer" aria-hidden="true" />
      <div className="cursor-light" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <div className="page">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
