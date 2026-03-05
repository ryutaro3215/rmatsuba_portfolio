import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../style.css";

//デフォルトのレイアウトでは、画面幅の制限はしない。つまりheader, main, footerは画面幅いっぱいに広がる。
//画面幅の制限は各ページコンポーネント側で行う。
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="mx-auto w-full">{children}</main>
      <Footer />
    </div>
  );
}
