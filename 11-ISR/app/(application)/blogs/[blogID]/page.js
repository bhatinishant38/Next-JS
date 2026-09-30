import { notFound } from 'next/navigation'
import React from 'react'

export const dynamicParams = false

// for ISR(Incremental static Regeneration)
export const revalidate = 5

// for SSG(staic site generation)
export async function generateStaticParams(){
  
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data)
    return data.map(({id})=>({blogID :`${id}`}))

}

export async function generateMetadata({params}) {
  const {blogID} = await params
  console.log("BlogID :",blogID)
  return {
    title : `Blog${blogID}`
  }
}

const Blog = async ({params}) => {
    console.log(await params)
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
      next :{
        revalidate:5
      }
    })
    const data = await response.json()
    console.log(data)

    const {blogID} = await params
    if(!/^\d+$/.test(blogID)){
      notFound()
    }
    
  return (
    <>
      <div>Blog {blogID}</div>
      <div className="p-5">Date:{ new Date().toLocaleString()}</div>
    </>
  )
}

export default Blog