import { notFound } from 'next/navigation'
import React from 'react'

export const dynamicParams = false

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

    const {blogID} = await params
    if(!/^\d+$/.test(blogID)){
      notFound()
    }
    
  return (
    <div>Blog {blogID}</div>
  )
}

export default Blog