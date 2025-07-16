
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";


import { AuthContext } from "../../Provider/AuthProvider";



const ServiceDetails = () => {
 const serviceDetails = useLoaderData();
      // console.log(service)
     const {_id,estate_title, image,description, price} = serviceDetails;
      const {user} = useContext(AuthContext);
      
      const handleCheckout = event =>{
           event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const date = form.date.value;
            const email = user?.email;
            const booking = {
                  customerName : name,
                  email,
                  image,
                  date,
                  description:description,
                  service:estate_title,
                  service_id:_id,
                  price: price
            } 
            console.log(booking);
            fetch('http://localhost:15000/bookingFood',{
                  method: 'POST',
                  headers:{
                        'content-type' : 'application/json'

                  },
                  body: JSON.stringify(booking)

            })
            .then(res => res.json())
            .then(data =>{
            // console.log(data);
            if(data.insertedId){
                  alert('service book successfully')
            }

            })

      }
  

    
      return (
           
          <div className="mt-4">
            <div>
                  
            </div>

        
                  <h2 className="text-center text-3xl mb-6 font-bold"> Booking: {estate_title} </h2>
                   <img className="max-w-4xl mx-auto rounded-2xl" src={image} alt="" />
                   

                  <form onSubmit={handleCheckout}>
                        
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
                
                
         <div className=" ">
        
          <input type="text" name="name" defaultValue={user?.displayName} className="input w-full" placeholder="Service Name" />
          
         </div>
         <div>
         
         <input type="date" name="date" className="input w-full" placeholder="Service Price" />
         </div>
         
        
          <div>
         
          <input type="text" name="email" className="input w-full" defaultValue={user?.email} placeholder="email"  />
          
          </div>
          <div>
         
          <input type="text" defaultValue={'$'+ price} className="input w-full" placeholder="Service Type" />
         
          </div>
        
        
      </div>
      
      <div className="my-6">
            <input  className="btn border-black 
            bg-linear-to-l from-[#151515] to-[rgba(21,21,21,0)]  text-white 
            w-full
            rounded-sm text-xl mt-3 border-b-4  " type="submit" value="Order Confirm" />
      </div>
                
                  </form>
                
                 
      
    </div>
      );
};

export default ServiceDetails;