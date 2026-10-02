import React from "react";

export const metadata = {
  title: {
    absolute: "My Files",
  },
};
const file = async ({ params }) => {
  console.log(await params);
  const { filepath } = await params;
  return (
    <div className="mx-auto min-h-[55vh] max-w-6xl px-6 py-16 text-lg text-zinc-600 sm:px-10 sm:py-24">
      file{" "}
      <b className="font-mono font-semibold text-zinc-950">
        / {filepath?.join("/")}
      </b>
    </div>
  );
};

export default file;
