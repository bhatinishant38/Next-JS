import Link from 'next/link'
import React from 'react'

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