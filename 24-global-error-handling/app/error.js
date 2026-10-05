'use client'

import { startTransition } from "react"
import { useRouter } from "next/navigation"

const Error = ({error,reset}) => {

  const router = useRouter()

  console.log(error)
  console.log(error.message)
  return (
     <>
          <div>server side error</div>
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