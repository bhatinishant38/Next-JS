
import Link from "next/link";

export default function Home() {
  return (
   <>
   <h1>Technical Agency</h1>
     <div>hello</div>
     <Link href="/services">Services</Link>
     <br/>
     <Link href="/about">about</Link>
     <br />
     <Link href="/files">files</Link>
   </>
  );
}
