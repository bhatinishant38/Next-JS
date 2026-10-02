'use client'

import React from 'react'

const Likes = () => {
    // console.log(window)
  
  if(typeof localStorage !=="undefined"){
    console.log(localStorage)
  }
  
  console.log("like page")
 
  return (
    <div>2k Likes</div>
  )
}

export default Likes