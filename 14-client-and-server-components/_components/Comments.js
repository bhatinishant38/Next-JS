import React from 'react'

const Comments =async () => {
  await new Promise((resolve)=>setTimeout(resolve,9000))

  return (
    <div>1k comments</div>
  )
}

export default Comments