import Link from 'next/link'
import React from 'react'

export const metadata = {
  title : "Services | Technical Agency",
  description :""

}

const services = () => {
  return (
    <>
      <div>services</div>
      <Link href="/services/web-dev">webdev</Link>
      <br/>
      
      <Link href="/services/seo">seo</Link>
 
    </>
   )
}

export default services