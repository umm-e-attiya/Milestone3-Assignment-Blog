import { BlogData } from "../../../../Data/data"
import Image from "next/image"
import Comment from "@/app/components/comment"

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
        <div className="lg:ml-20 pt-20 text-black text-[30px]">
          <img className="md:ml-[150px] lg:ml-[400px]" src={methodfind?.image} alt={methodfind?.title} width={500} height={400}/>
           <h1 className="text-black text-[40px] font-bold">{methodfind?.title}</h1>
            <p className="text-black text-[20px] lg:text-[20px]">{methodfind?.description}</p>    
        </div>

        <div>
              <Comment />
        </div>
        </div>
    )
}

export default Page