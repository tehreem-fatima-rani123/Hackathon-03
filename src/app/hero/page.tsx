import Section01 from "@/components/Herosection";
import { client } from "@/sanity/lib/client";



async function getData(){
  const fetchData  =await client.fetch (`*[_type == 'home']{
  title, description,
  "imageUrl": image.asset->url
}`)
  return fetchData
 }


export default async function Hero() {
  const data =await getData()
  console.log(data);
  return (
    <><div className="h-min-screen">
{
      data.map((val:any,l:any) =>{
        return(
         <>
      {/* <Section01/> */}
         </>
        )
      })
    }
    </div>
    
 
    </>
  )}