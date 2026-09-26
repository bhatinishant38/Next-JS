import React from 'react'

const comment =async ({params}) => {
    console.log(await params)

    const {comments} = await params
    
  return (
    <div>comment {comments}</div>
  )
}

export default comment