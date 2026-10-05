'use client'

import { useRouter } from "next/navigation"
import { startTransition } from "react"

const Error = ({error ,reset}) => {

  const router = useRouter()
  console.log(error)
  console.log(error.message)
  return (
    <>
      <div>Something went wrong</div>
      {/* <p>{error.message}</p> */}

      <button onClick={()=>{
        startTransition(()=>{
          router.refresh()
          reset()
        })      
      }}> Try Again</button>
    </>
    
  )
}

export default Error