import Link from "next/link";
import Image from "next/image";

export default async function Dashboard() {
  // Fetch data from API
  const res = await fetch('https://api.imgflip.com/get_memes');

  // Parse the JSON response
  const data = await res.json();

  // data ke object ko 1 array me convert kiya data get kiya 
  const images = data.data.memes;

  console.log(images, '...images');

  return(
    <div className="flex flex-wrap p-4 justify-center space-x-3 text-xl">
    
  {/* map chalaya all imagesArray par */}
  {images.map(function (item, index) {
  //const {name,url,id} = item
// Extract the property you want to display (for example, 'name' property)
  return (
  <div key={index}
  className="mb-0 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
      
     <Link href={`/detail/${item.id}`} key={index} className="border-2 p-2 w-60 h-auto m-3 inline-block"
    /*className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/
  rel="noopener noreferrer" passHref> 
  
<img src={item.url} alt={item.name} width={100} height={100} className="p-2 w-52 h-52" /><span>{item.name}</span>  
  </Link>
            </div>
          );
        })}
      </div>
  )
}