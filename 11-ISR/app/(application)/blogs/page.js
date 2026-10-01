import React from 'react'
import Link from "next/link";

export const metadata = {
  title : "comment ",
  description :""

}

 const blog =async ({params ,searchParams}) => {
  
  console.log("params",params)
    
  return (
    <>
      <main className='mx-auto min-h-[55vh] max-w-6xl px-6 py-14 sm:px-10 sm:py-20'>
      <div className='mb-10 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl'>Welcome to blogs page</div>

      <div className='flex max-w-2xl flex-col divide-y divide-zinc-200 border-y border-zinc-200'>
        <Link className='flex items-center justify-between py-5 text-lg font-semibold text-zinc-800 transition-colors hover:text-emerald-700' href='/blogs/1'>Blog 1</Link>
        <Link className='flex items-center justify-between py-5 text-lg font-semibold text-zinc-800 transition-colors hover:text-emerald-700' href='/blogs/2'>Blog 2</Link>
        <Link className='flex items-center justify-between py-5 text-lg font-semibold text-zinc-800 transition-colors hover:text-emerald-700' href='/blogs/3'>Blog 3</Link>
      </div>
       </main>
    
    </>
    
  )
}

export default blog