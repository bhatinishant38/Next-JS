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
      <div className='mx-auto mb-10 max-w-6xl px-6 pt-14 text-3xl font-black tracking-tight text-zinc-950 sm:px-10 sm:pt-20 sm:text-4xl'>Welcome to blogs page</div>

      <div className='mx-auto flex max-w-6xl flex-col divide-y divide-zinc-200 border-y border-zinc-200 px-6 pb-14 sm:px-10 sm:pb-20'>
        <Link className='flex items-center justify-between py-5 text-lg font-semibold text-zinc-800 transition-colors hover:text-emerald-700' href='/blogs/1'>Blog 1</Link>
        <Link className='flex items-center justify-between py-5 text-lg font-semibold text-zinc-800 transition-colors hover:text-emerald-700' href='/blogs/2'>Blog 2</Link>
        <Link className='flex items-center justify-between py-5 text-lg font-semibold text-zinc-800 transition-colors hover:text-emerald-700' href='/blogs/3'>Blog 3</Link>
      </div>
    
    </>
    
  )
}

export default blog