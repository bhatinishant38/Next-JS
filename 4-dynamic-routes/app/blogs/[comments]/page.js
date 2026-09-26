import React from 'react'

const comment =async ({params}) => {
    console.log(await params)

    const {blog} = await params
    
  return (
    <div>comment</div>
  )
}

export default comment