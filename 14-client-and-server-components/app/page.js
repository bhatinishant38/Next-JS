import Link from "next/link";
import ComponentPage from "../_components/page";

export default function Home() {
  return (
    <>
      <div className="border-b border-lime-300/20 bg-zinc-950 px-6 py-5 text-center text-white sm:px-10">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Technical Agency
        </h1>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 text-3xl sm:px-10 sm:py-24">
        <ComponentPage></ComponentPage>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 border-t border-zinc-200 px-6 py-8 text-base font-semibold text-zinc-700 sm:justify-between sm:px-10 sm:text-lg">
        <Link
          className="rounded-full px-5 py-3 transition-colors hover:bg-lime-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
          href="/services"
        >
          Services
        </Link>

        <Link
          className="rounded-full px-5 py-3 transition-colors hover:bg-lime-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
          href="/about"
        >
          about
        </Link>

        <Link
          className="rounded-full px-5 py-3 transition-colors hover:bg-lime-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
          href="/files"
        >
          files
        </Link>
        <Link
          className="rounded-full px-5 py-3 transition-colors hover:bg-lime-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
          href="/blogs"
        >
          blogs
        </Link>
      </div>
    </>
  );
}
