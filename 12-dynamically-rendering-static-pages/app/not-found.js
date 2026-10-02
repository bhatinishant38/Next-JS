import React from "react";

const not_found = () => {
  return (
    <>
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 py-16 text-5xl font-black tracking-tight text-zinc-950 sm:text-7xl">
        Page not-found
      </div>
      <p className="mx-auto mt-5 max-w-4xl px-6 text-lg leading-8 text-zinc-600 sm:px-10">
        could not found the page you are looking for.{" "}
      </p>
    </>
  );
};

export default not_found;
