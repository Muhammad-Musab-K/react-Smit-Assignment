'use client'
import Link from "next/link"

function page() {
  return (
    <div style={{ backgroundImage: "url(https://img.freepik.com/free-vector/flat-comic-style-background-copy-space_52683-54924.jpg?w=900&t=st=1708408162~exp=1708408762~hmac=ac3f8e695ed57c4dbdd42c88fac4380b71033ccdac6bb21cc3b05ecc129817f9)" }} className='w-full h-screen bg-cover flex flex-col gap-10 justify-center items-center'>
      <h1 className='text-7xl font-bold text-yellow-500 bg-red-600 '>MEME GENERATOR</h1>
      <Link href={"/collection"}><button 
    
      style={{ backgroundImage: "url(https://img.freepik.com/free-vector/red-background-comic-style_23-2149034894.jpg?w=900&t=st=1708409256~exp=1708409856~hmac=635821b87afccf36ddffc5cf4472bd6b69f86175705e93529d5f11f013334ccf)" }} className=' p-3 rounded-lg bg-cover bg-center font-bold text-white bg-no-repeat active:scale-75 duration-300'>GENERATE MEME</button></Link>
    </div>
  )
}

export default page
