import Image from "next/image"
import image1 from "../../../public/templateimage.jpg"



const Template = () =>{
    return(
        <div>
            <div className="lg:flex w-full h-[850px] lg:h-[500px] bg-fixed bg-blue-600 pt-24 pl-2 lg:pl-20 ">
            <div className="w-[300px] lg:w-[600px] pl-[1px] lg:pl-[200px]">
                <h1 className="text-white text-[30px] lg:text-[40px]">Information Technology</h1>
                <p className="text-white pt-3">Information Technology (IT) involves using computers and software to manage, process, and share data. It is essential in modern life, driving advancements in communication, business, education, and innovation. IT enables efficiency, problem-solving, and connectivity across various industries.</p>
            </div>
             <div>
                <Image src={image1} alt="laptop" className="w-[300px] lg:h-[300px] h-[400px]  mt-4 lg:ml-24" />
             </div>
           
             
                 
            </div>
        </div>
    )
}

export default Template; 