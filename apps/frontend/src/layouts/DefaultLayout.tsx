import { Outlet, ScrollRestoration } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

//デフォルトのレイアウトでは、画面幅の制限はしない。つまりheader, main, footerは画面幅いっぱいに広がる。
//画面幅の制限は各ページコンポーネント側で行う。
export function DefaultLayout() {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <Header />
      <main className="mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
      {/* ページ遷移時のスクロール復元 */}
      <ScrollRestoration />
    </div>
  );
}
