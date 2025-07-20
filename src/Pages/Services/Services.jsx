import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";


const Services = () => {
      

      const [services, setServices] = useState([]);
      
       const [dataLength,setDataLength] = useState(6);
      useEffect(() =>{
            fetch('https://food-connect-server-one.vercel.app/foods')
            .then(res => res.json())
            .then(data => setServices(data))
      } ,[])
      
      return (
              <div>
                  <div className="text-center mt-4 space-y-2">
                        <h3 className="text-red-700 text-2xl font-bold"> Our Services</h3>
                        <h2 className="text-5xl  max-w-3xl mx-auto  font-bold "> Connecting People Through Food</h2>
                        <p className="font-semibold text-[10px]   my-4 max-w-5xl mx-auto  text-zinc-400">At Food Connect, we deliver more than just meals — we deliver care, community, and connection. From home-cooked favorites to nutritious options, our curated menu is crafted to serve diverse communities with love and authenticity. Whether you're feeding your family or donating to someone in need, we ensure every bite matters. </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       {
                        services.slice(0,dataLength)
                        .map(services => <ServiceCard key={services._id} services={services} ></ServiceCard>)
 
                       }

                       
                  </div>
                  <div className={dataLength === services.length ? 'hidden' :'' }>

                        <Link  to={'/ShowAllData '}>
                        
                         <button onClick={() => setDataLength( services.length)}  className=" btn  bg-linear-to-t from-[#151515] to-[rgba(21,21,21,0)]  border-black border-b-4
       text-black  px-40 py-8 font-bold rounded-sm text-3xl ml-96 rounded-bl-4xl my-10 rounded-tr-4xl">All Show </button>
                        </Link>


                  </div>
            </div>
      );
};

export default Services;


