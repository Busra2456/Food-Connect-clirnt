import img1 from '../../../assets/assets/img1.jpg';
import img2 from  '../../../assets/assets/img2.jpg';
import img3 from '../../../assets/assets/img3.jpg';
import img4 from '../../../assets/assets/img4.jpg';
const Banner = () => {
      return (
            <div className="carousel w-full h-[400px]">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={img3}
                className="w-full rounded-xl" />
             <div className="absolute h-full left-0 top-0 items-center bg-linear-to-l from-[#151515] to-[rgba(21,21,21,0)] bottom-0 right-0   text-white  ">
                  <div className='mt-80 mx-10 space-y-3'>
                         <h1 className="text-8xl  font-bold text-white">Enjoy Our <br /> <hr></hr> Delicious Meal <hr /> </h1>
     <p className='text-[10px] text-black'>Welcome to our restaurant, where we serve delicious, fresh, and flavorful dishes made with care. Our menu offers a variety of local and international favorites, prepared using high-quality ingredients. Enjoy a wonderful dining experience with tasty meals and excellent service.

</p>
                  </div>
                 
     </div>
              <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            {/* ------------------------------------------------------------- */}
            <div id="slide2" className="carousel-item relative w-full">
            <img
                src={img2}
                className="w-full rounded-xl" />
               <div className="absolute h-full left-0 top-0 items-center bg-linear-to-l from-[#151515] to-[rgba(21,21,21,0)] bottom-0 right-0   text-white  ">
                  <div className='mt-80 mx-10 space-y-3'>
                         <h1 className="text-8xl  font-bold text-white ">Enjoy Our <br /> <hr></hr> Delicious Meal <hr /> </h1>
     <p className='text-[10px]'>Welcome to our restaurant, where we serve delicious, fresh, and flavorful dishes made with care. Our menu offers a variety of local and international favorites, prepared using high-quality ingredients. Enjoy a wonderful dining experience with tasty meals and excellent service.

</p>
                  </div>
                 
     </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>


            <div id="slide3" className="carousel-item relative w-full">
            <img
                src={img1}
                className="w-full rounded-xl" />
             <div className="absolute h-full left-0 top-0 items-center bg-linear-to-l from-[#151515] to-[rgba(21,21,21,0)] bottom-0 right-0   text-white  ">
                  <div className='mt-80 mx-10 space-y-3'>
                         <h1 className="text-8xl  font-bold text-white ">Enjoy Our <br /> <hr></hr> Delicious Meal <hr /> </h1>
     <p className='text-[10px]'>Welcome to our restaurant, where we serve delicious, fresh, and flavorful dishes made with care. Our menu offers a variety of local and international favorites, prepared using high-quality ingredients. Enjoy a wonderful dining experience with tasty meals and excellent service.

</p>
                  </div>
                 
     </div>
              <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img
                src={img4}
                className="w-full rounded-xl" />
              <div className="absolute h-full left-0 top-0 items-center bg-linear-to-l from-[#151515] to-[rgba(21,21,21,0)] bottom-0 right-0   text-white  ">
                  <div className='mt-80 mx-10 space-y-3'>
                         <h1 className="text-8xl  font-bold text-white ">Enjoy Our <br /> <hr></hr> Delicious Meal <hr /> </h1>
     <p className='text-[10px]'>Welcome to our restaurant, where we serve delicious, fresh, and flavorful dishes made with care. Our menu offers a variety of local and international favorites, prepared using high-quality ingredients. Enjoy a wonderful dining experience with tasty meals and excellent service.

</p>
                  </div>
                 
     </div>
              <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
      );
};

export default Banner;