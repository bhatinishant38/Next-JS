'use client'

import { useEffect, useState } from 'react'

const Comments = () => {
  const [comments, setComments] = useState('5k comment in just 1 hour')

  useEffect(() => {
    setComments('1k comments')
  }, [])

  return <div>{comments}</div>
}

export default Comments