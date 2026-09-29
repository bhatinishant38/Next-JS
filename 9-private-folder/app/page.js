
import Link from "next/link";
import ComponentPage from "../_components/page";


export default function Home() {
  return (
   <>
   <h1>Technical Agency</h1>
   <ComponentPage></ComponentPage>
     <div>hello</div>
     <Link href="/services">Services</Link>
     <br/>
     <Link href="/about">about</Link>
     <br />
     <Link href="/files">files</Link>
   </>
  );
}
