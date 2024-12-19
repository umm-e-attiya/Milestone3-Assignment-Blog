import Image from "next/image"
import {BlogData} from "../../../Data/data"
import Link from "next/link"



const Page = () =>{
    return(
        <div className="mt-4 lg:mt-28 ">
            <ul className="flex-wrap md:ml-5 md:flex md:gap-14">
                {BlogData.map((data)=>{
                    return(
                        <ul key={data.id}>
                           <Link href={`/blog/${data.id}`}>
                           <li>
                            <Image
                            src={data.image}
                            alt={data.title}
                            width={300}
                            height={200}
                            
                        />
                        <h1 className="font-bold text-[20px]">{data.title}</h1>
                        <p className="w-[300px] line-clamp-2">{data.description}</p>
                            </li>
                           </Link>
                        </ul>
                    )
                })

                }
            </ul>
      </div>
    )
}

export default Page;