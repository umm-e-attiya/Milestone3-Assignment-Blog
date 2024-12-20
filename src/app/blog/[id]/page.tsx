import { BlogData } from "../../../../Data/data"
import Image from "next/image"
import Comment from "@/app/components/Comment"

interface param{
    params:{
        
        id:string
    }
}



const Page = ({params} : param ) =>{
    const convertnumber = Number(params.id)
    const methodfind = BlogData.find((items) => items.id === convertnumber)
    return(
        <div>
        <div className="ml-6 lg:ml-20 pt-20 text-black text-[30px]">
          <Image alt="dynamicing" className="md:ml-[150px] lg:ml-[400px]" 
          src={methodfind?.image || "/noting"} 
           width={300}
           height={600}
          />
           <h1 className="text-black lg:text-[40px] font-bold">{methodfind?.title}</h1>
            <p className="text-black w-[300px] text-[18px] lg:w-[1000px] lg:text-[20px]">{methodfind?.description}</p>    
        </div>

        <div>
              <Comment />
        </div>
        </div>
    )
}

export default Page