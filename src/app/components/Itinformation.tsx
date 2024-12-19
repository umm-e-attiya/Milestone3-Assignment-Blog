import Image from "next/image";
import photo1 from "../../../public/photo1.jpg"



  const Itinformation = () =>{
      return (
       <div>
           <div className="mt-9">
            <h1 className="font-bold text-center text-[20px] lg:text-center lg:text-[60px]">Information Technology (IT)</h1>
            </div>

            <div className=" mt-11">
                 <div>
                    <Image src={photo1} alt="photo1" width={500} height={500}   className="ml-4 w-[400px] h-[300px] md:ml-36  md:w-[600px] md:h-[300px] lg:w-[900px] lg:h-[500px] lg:ml-80" />
                 </div>
                <div className=" mt-4 ml-6 md:ml-40 lg:ml-72">
                  <h1 className="font-bold lg:ml-8 lg:text-[30px] ">What is Information Technology?</h1>
                  <p className="w-[350px] mt-2 md:w-[600px] lg:w-[800px] lg:ml-10">Information technology (IT) is the use of computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data. Typically, IT is used in the context of business operations, as opposed to the technology used for personal or entertainment purposes. The commercial use of IT encompasses both computer technology and telecommunications.</p>

                  <h1 className="font-bold mt-6 lg:ml-8 lg:text-[30px] ">Why is information technology important?</h1>
                  <p className="w-[350px] mt-2 md:w-[600px] lg:w-[800px] lg:ml-10">Its been said that data is what powers industries worldwide. That might be hyperbole, but few businesses large or small  can remain competitive without the ability to collect data and turn it into useful information. IT provides the means to develop, process, analyze, exchange, store and secure information.</p>
                   
                  <h1 className="font-bold mt-6 lg:ml-8 lg:text-[30px] ">What does information technology encompass?</h1>
                  <p className="w-[350px] mt-2 md:w-[600px] lg:w-[800px] lg:ml-10">The IT department ensures that the organization's systems, networks, applications, data and information all connect and function properly. The IT team handles the following three major areas:
                    <ul>
                      <li>Deploying and maintaining business applications, services and infrastructure including servers, networks and storage.</li>
                      <li>Monitoring, optimizing and troubleshooting the performance of applications, services and infrastructure.</li>
                      <li>Overseeing the security and governance of applications, services and infrastructure.</li>
                    </ul>
                  </p>


                  <h1 className="font-bold mt-6 lg:ml-8 lg:text-[30px]">Careers in information technology</h1>
                  <p className="w-[350px] mt-2 md:w-[600px] lg:w-[800px] lg:ml-10">A team of administrators and other technical staffers deploy and manage a companys IT infrastructure and assets. IT teams depend on a range of specialized information and technology skills and knowledge to support equipment, applications and activities. Third-party contractors and IT vendor support personnel augment the IT team.</p>
                  <p className="w-[350px] mt-6 md:w-[600px] lg:w-[800px] lg:ml-10">The information technology profession is extremely diverse. IT workers can specialize in fields, including software development; application management; hardware components; server, storage or network administration and network architecture. Many businesses seek IT professionals with mixed or overlapping skill sets.</p>
                  </div> 

                  </div>

           
       </div>
      )
    }

    export default Itinformation;
  
