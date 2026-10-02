'use client'

import React, { useState } from 'react'

const Likes =  () => {

  const [count ,setCount] = useState(0)
    // console.log(window)

  if(typeof localStorage !=="undefined"){
    console.log(localStorage)
  }
  
  console.log("like page")
 
  return (
    <>
      <div>{count} Likes</div>
      <button onClick={()=>setCount((prev)=> prev + 1)}>+ 1</button>
    </>
  )
}

export default Likes