import { notFound } from "next/navigation";
import React from "react";

export const dynamicParams = false;

// for ISR(Incremental static Regeneration)
export const revalidate = 5;

// for SSG(staic site generation)
export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return data.map(({ id }) => ({ blogID: `${id}` }));
}

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  console.log("BlogID :", blogID);
  return {
    title: `Blog${blogID}`,
  };
}

const Blog = async ({ params }) => {
  console.log(await params);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: {
      revalidate: 5,
    },
  });
  const data = await response.json();
  console.log(data);

  const { blogID } = await params;
  if (!/^\d+$/.test(blogID)) {
    notFound();
  }

  return (
    <>
      <main className="mx-auto min-h-[55vh] max-w-4xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="border-l-4 border-emerald-600 pl-6 text-4xl font-black tracking-tight text-zinc-950 sm:text-6xl">
          Blog {blogID}
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-5 text-sm font-medium text-zinc-500">
          Date:{new Date().toLocaleString()}
        </div>
      </main>
    </>
  );
};

export default Blog;
