import React from 'react'


export async function generateMetadata({params}) {
  const {comments} = await params
  return {
    title : `Comments ${comments}`
  }
}

const comment =async ({params}) => {
    console.log(await params)

    const {comments} = await params
    
  return (
    <div>comment {comments}</div>
  )
}

export default comment