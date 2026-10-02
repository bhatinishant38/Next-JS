import React from "react";

const layout = ({ children }) => {
  return (
    <section className="mx-auto min-h-[50vh] max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
      <h1 className="mb-8 border-b border-zinc-200 pb-5 text-3xl font-black tracking-tight text-zinc-950">
        Services layout
      </h1>
      {children}
    </section>
  );
};

export default layout;
