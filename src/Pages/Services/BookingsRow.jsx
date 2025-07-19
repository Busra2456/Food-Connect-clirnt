import { RxCross2 } from "react-icons/rx";

      

const BookingCard = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, date, service, price, image, status } = booking;

  return (

 <tr>
            <th>
            <button onClick={() =>{handleDelete(_id)}} className="btn btn-circle bg-zinc-800 hover:bg-zinc-500 "><RxCross2 className="font-extrabold text-white text-2xl"></RxCross2>
 
</button>
             
            </th>
            <td>
              
                <div className="avatar ">
                  <div className="rounded h-24 w-24">
                   { image && <img
                      src={ image}
                      className="w-full lg:w-48 rounded-lg object-cover h-40"
                      alt="Avatar Tailwind CSS Component" />}
                  </div>
                 
               
               
              </div>
            </td>
            <td className="text-2xl font-bold text-red-700">
            {service}
              
            </td>
            <td className="text-zinc-600" >{date} </td>
            <td className="text-zinc-600" >${price} </td>
           
            <th>
             {status === 'confirm' ? <span  className="btn items-center gap-3 mt-2" >Confirmed</span>
              : <button onClick={() => handleBookingConfirm(_id)} className="btn  bg-linear-[#151515] rounded-lg text-white "> please Confirm</button>}
            </th>
          </tr>

    
  );
};

export default BookingCard;
