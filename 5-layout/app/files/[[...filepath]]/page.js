import React from 'react'

const file =async ({params}) => {
    console.log(await params)
    const {filepath} = await params
  return (
    <div>file  <b> {filepath?.join('/')}</b></div>
  )
}

export default file