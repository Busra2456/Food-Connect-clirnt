import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../../../assets/icon.png';

const Footer = () => {
      return (
        <div>
           <footer className="
         bg-linear-[#151515] rounded-b-sm
            text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
       
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="">
              <img src={logo} alt="logo" className="w-20 mx-auto mb-4" />
               <h1 className="text-2xl font-bold text-red-600">Food Connect</h1>
            </div>
           
          </div>
          <p className="text-sm text-gray-400">
            Empowering communities by reducing food waste and sharing surplus with love.
          </p>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-sm">Email: support@foodconnect.com</p>
          <p className="text-sm">Phone: +880 1234-****</p>
          <p className="text-sm">Address: Dhanmondi, Dhaka, Bangladesh</p>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="hover:text-blue-300" />
            </a>
          </div>
        </div>
      </div>

     
      <div className="text-center mt-8 text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} FoodConnect. All rights reserved.
      </div>
    </footer>
        </div>
   
  );
};



export default Footer;