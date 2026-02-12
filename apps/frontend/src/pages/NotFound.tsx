import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="absolute select-none font-bold text-[12rem] text-slate-200 sm:text-[16rem] md:text-[20rem] dark:text-slate-800">
        404
      </p>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <h1 className="font-bold font-source-serif-4 text-4xl text-slate-900 tracking-tight sm:text-5xl dark:text-white">
          Page Not Found
        </h1>
        <p className="max-w-md text-base text-slate-600 leading-relaxed dark:text-slate-400">
          お探しのページは見つかりませんでした。URLをご確認いただくか、トップページにお戻りください。
        </p>
        <Link
          to="/"
          className="mt-4 rounded-lg bg-slate-900 px-5 py-2.5 font-medium text-sm text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          トップに戻る
        </Link>
      </div>
    </div>
  );
};
