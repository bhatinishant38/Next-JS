'use client'

import React from 'react'

const Comments = () => {

  console.log('Comment page')
  
  // this situation creates a hydration error which occurs when the server send a  resopnse/output which is differnet from the browsers output , which can be generated through like math.random ,Date.now(),which creates a differnet output on differnt situations
  if(typeof window ==="undefined"){
    return <div>5k comment in just 1 hour</div>
  }  return (
    <div>1k comments</div>
  )
  
}

export default Comments