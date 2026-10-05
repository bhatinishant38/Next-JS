'use client'

import { useRouter } from "next/navigation"
import "./globals.css";

export const dynamic = 'force-dynamic'

const Error = () => {

  return (
     <>
     
     <html lang="en" className="dark">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
     </head>
     <body>
        <div>server side error</div>
          {/* <p>{error.message}</p> */}
    
          <button onClick={()=>{         
              window.location.reload()
            }}> Try Again</button>
        
     </body>
     </html>
          
        </>
  )
}

export default Error