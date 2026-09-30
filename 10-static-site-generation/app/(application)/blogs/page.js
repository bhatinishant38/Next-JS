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
      <div className='text-center m-5 text-2xl font-bold'>Welcome to blogs page</div>

      <div className='m-5 ml-20 flex flex-col'>
        <Link href='/blogs/1'>Blog 1</Link>
        <Link href='/blogs/2'>Blog 2</Link>
        <Link href='/blogs/3'>Blog 3</Link>
      </div>
    </>

    

    
  )
}

export default blog