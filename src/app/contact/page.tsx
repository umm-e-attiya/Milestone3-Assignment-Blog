const Contact = () =>{
    return(
          <div>
              <div>
                  <h1 className="font-bold text-center lg:text-[36px] ">Contact Us</h1>
              </div>

              <div className="bg-blue-300 mt-4 ml-20 md:ml-64 lg:ml-[620px] w-[300px] h-[300px]">
              <p>Have questions or need help? Contact us. we are here to assist you!</p>
                <form>
                    <div className="mt-5">
                    <label htmlFor="name">Name:</label> 
                    
                    <input className="w-[200px] rounded-md" type="text" name="name" id="name" /> 
                    </div>
                     
                     <div className="mt-5">
                    <label htmlFor="name">Email::</label> 
                    
                    <input className="w-[200px] rounded-md" type="email" name="email" id="email" />
                    </div>
                     
                    <div className="mt-5">
                    <label htmlFor="name">Mesaage:</label> 
                    
                    <input className="w-[200px] h-[100px] rounded-md" type="text" name="name" id="name" />
                    </div>



                     
                </form>
              </div>
          </div>
    )
}

export default Contact;