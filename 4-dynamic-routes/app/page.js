import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
     <div>hello</div>
     <Link href="/services">Services</Link>
     <br/>
     <Link href="/about">about</Link>
   </>
  );
}
