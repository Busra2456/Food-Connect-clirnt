import { useContext, useEffect, useState } from "react";


import axios from "axios";

import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "../Services/BookingsRow";

const Booking = () => {

       const {user} = useContext(AuthContext);

      const [bookings,setBookings] = useState([]);
      

      const url = `https://food-connect-server-one.vercel.app/bookingFood?email=${user?.email}`;



      useEffect(() =>{

            axios.get(url
                  , {withCredentials: true},
                 
                 
            )
            .then(res =>{
                  setBookings(res.data)
            })
            .catch(error => {
  console.error( error);
});

            // fetch(url
            //       // ,
            //       // {credentials:'include'}
            // )
            // .then(res => res.json())
            // .then(data => setBookings(data))
      },[url])

       const handleDelete = id => {
                  const proceed = confirm('Are You Sure you Want to delete');
                  if(proceed){
                        fetch(`https://food-connect-server-one.vercel.app/bookingFood/${id}`, {
                              method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                  // console.log(data);
                  if(data.deletedCount > 0){
                        alert('deleted successfully');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                              }
                        })
      
                  }
            }

            const handleBookingConfirm = id => {
                fetch(`https://food-connect-server-one.vercel.app/bookingFood/${id}`, { method: 'PATCH',
                  headers:{
                        'content-type' : 'application/json'

                  },
                  body: JSON.stringify({status: 'confirm'})
                        })
                        .then(res =>res.json())
                        .then(data =>{
                              // console.log(data);
                              if(data.modifiedCount > 0){
                                    
                                    const remaining = bookings.filter(booking => booking._id !== id);
                                    const updated = bookings.find(booking => booking._id === id)
                                    
                                    updated.status = 'confirm'
                                    const newBooking = [updated,...remaining];
                                    setBookings(newBooking)
                              }
                        })
      
                  }
            
      return (
      <div>
                  <h2 className="text-5xl">your bookings: {bookings.length} </h2>

                  <div className="overflow-x-auto">
  <table className="table">
  <thead>
  <tr>
        <th>
        <label>
                <input type="checkbox" className="checkbox" />
              </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
  
   
      
   {
     bookings.map(booking => <BookingsRow
     key={booking._id}
     booking={booking}
     handleDelete={handleDelete}
     handleBookingConfirm ={handleBookingConfirm}
     ></BookingsRow>)
   }
  
  
      </thead>
  </table>
</div>
            </div>
      );
};

export default Booking;