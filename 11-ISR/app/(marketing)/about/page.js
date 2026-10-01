import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About ",
  description: "",
};

const About = () => {
  return (
    <>
      <main className="mx-auto flex min-h-[55vh] max-w-6xl flex-col items-start justify-center gap-8 px-6 py-16 sm:px-10 sm:py-24">
        <div className="text-5xl font-black tracking-tight text-zinc-950 sm:text-7xl">
          About
        </div>
        <Link
          className="border-b-2 border-amber-400 pb-1 font-semibold text-zinc-700 transition-colors hover:text-amber-800"
          href="/"
        >
          Home
        </Link>
      </main>
    </>
  );
};

export default About;
