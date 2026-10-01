import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Services | Technical Agency",
  description: "",
};

const services = () => {
  return (
    <>
      <div className="mb-8 text-4xl font-black tracking-tight text-zinc-950">
        services
      </div>
      <Link
        className="block border-y border-zinc-200 py-5 text-xl font-semibold text-zinc-800 transition-colors hover:text-amber-800"
        href="/services/web-dev"
      >
        webdev
      </Link>
      <br />

      <Link
        className="block border-b border-zinc-200 py-5 text-xl font-semibold text-zinc-800 transition-colors hover:text-amber-800"
        href="/services/seo"
      >
        seo
      </Link>
    </>
  );
};

export default services;
