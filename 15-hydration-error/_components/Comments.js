'use client'

import React from 'react'

const Comments = () => {

  console.log('Comment page')
  
  if(typeof window ==="undefined"){
    return <div>5k comment in just 1 hour</div>
  }  return (
    <div>1k comments</div>
  )
  
}

export default Comments