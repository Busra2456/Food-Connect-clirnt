import { useEffect, useState } from "react";

import AllData from "./AllData";
import logo from '../../assets/assets/img22.png'
const ShowAllData = () => {



 
   const [showAllData, setShowAllData] = useState([]);
        
    

        useEffect(() =>{
              fetch('http://localhost:15000/foods')
              .then(res => res.json())
              .then(data => setShowAllData(data))
        } ,[])
     
     
      return (
           
           <div>
                  <div className="text-center mt-4 space-y-2">
                        <div className="text-center text-2xl font-bold"><img className="max-w-[80px] mx-auto mb-6" src={logo} alt="" /></div>
                        <h2 className="text-5xl  max-w-3xl mx-auto  font-bold "> Connecting People Through Food</h2>
                        <p className="font-semibold text-[10px]   my-4 max-w-5xl mx-auto  text-zinc-400">At Food Connect, we deliver more than just meals — we deliver care, community, and connection. From home-cooked favorites to nutritious options, our curated menu is crafted to serve diverse communities with love and authenticity. Whether you're feeding your family or donating to someone in need, we ensure every bite matters. </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       {
                         showAllData.map(allData => <AllData key={allData._id} allData={allData} ></AllData>)
 
                       }

                       
                  </div>
               
            </div>
      );
};

export default ShowAllData;