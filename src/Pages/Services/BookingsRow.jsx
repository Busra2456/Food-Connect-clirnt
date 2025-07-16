      

const BookingCard = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, date, service, price, image, status } = booking;

  return (
    <div className="card bg-white shadow-xl p-4  my-4">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        
        <img src={image} alt={service} className="w-full lg:w-48 rounded-lg object-cover h-40" />

        <div className="flex-1  space-y-2">
          <h2 className="text-2xl font-bold text-red-700">{service}</h2>
          <p className="text-zinc-600"><strong>Booking Date:</strong> {date}</p>
          <p className="text-zinc-600"><strong>Price:</strong> ${price}</p>

          
          <div className="flex items-center gap-3 mt-2">
            {status === 'confirm' ? (
              <button className="btn  bg-linear-[#151515] rounded-lg text-white "> Confirmed</button>
            ) : (
              <button
                onClick={() => handleBookingConfirm(_id)}
                className="btn  bg-linear-[#151515] rounded-lg text-white "
              >
                Confirm Now
              </button>
            )}
          </div>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => handleDelete(_id)}
          className="btn  btn-circle bg-linear-[#151515] text-white hover:bg-linear-[#151515]"
          
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
