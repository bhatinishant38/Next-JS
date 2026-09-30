
import Link from "next/link";
import ComponentPage from "../_components/page";



export default function Home() {
  return (
   <>
   <div className="bg-slate-500 text-white p-3 text-3xl font-medium text-center">
    <h1 >Technical Agency</h1>
   </div>

   <div className="text-3xl">
     <ComponentPage></ComponentPage>
   </div>

   <div className="flex justify-around text-2xl text-blue-500 bg-gray-400 p-3">
     <Link href="/services">Services</Link>
     
     <Link href="/about">about</Link>
     
     <Link href="/files">files</Link>
     <Link href="/blogs">blogs</Link>

     

   </div>

   
     
   </>
  );
}
