import { Link } from "react-router-dom";

const AllData = ({allData}) => {
       const {_id,estate_title, image, price, description } = allData;
      return (
              <div>
                 

                  <div className="grid lg:grid-cols-3">
                  <div className="card bg-base-100 w-96 max-w-auto shadow-xl">
  <figure className="px-10 pt-10">
  <img
      src={image}
      
      className="rounded-xl" />
      
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl text-zinc-700 "> {estate_title} </h2>
    <div className="text-zinc-400 text-[13px]">
      {
         description.length > 60 ? <p> {description.slice(0,60) }  </p> : <p>{description} </p>
        
}<Link to={`/ServiceDetails/${_id}`}  className="text-blue-800 text-[12px]" >
Read more...</Link> 
</div>

<div className="flex items-center"> <p className=" text-zinc-700 text-[11px] font-semibold">Price: {price}</p>
             
            </div>

<div className="card-actions w-full text-center ">
      <button
       
      
      className="text-center rounded-ss-2xl  border-black border-b-4 btn  bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)]
       text-white w-full p-6 font-bold rounded-sm text-2xl mt-3"> <Link
      //   to={`/ServiceDetail/${_id}`}
        >
        Buy Now
        </Link> 
        </button>
  
    
  </div>
   </div>
</div>


                  </div>

                     

                  
            </div>
      );
};

export default AllData;