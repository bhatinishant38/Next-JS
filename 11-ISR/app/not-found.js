import React from "react";

const not_found = () => {
  return (
    <>
      <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 py-16">
        <div className="text-5xl font-black tracking-tight text-zinc-950 sm:text-7xl">
          Page not-found
        </div>
        <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
          could not found the page you are looking for.{" "}
        </p>
      </main>
    </>
  );
};

export default not_found;
