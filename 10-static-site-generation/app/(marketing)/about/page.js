
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title : "About ",
  description :""

}

const About = () => {
  return (
    <>
        <div>About</div>
        <Link href='/'>Home</Link>
    </>

  )
}

export default About