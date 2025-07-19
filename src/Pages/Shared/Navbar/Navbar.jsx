import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/icon.png'
import imgUser from '../../../assets/assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const NavBar = () => {

 const {user,  logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(() =>{

    })
    .catch(error => console.log(error))
  }


      const NavItems = <div className="text-[10px] lg:flex font-semibold text-base-900 ">
        
 
       <li className=" hover:underline  "><NavLink to={'/'}>Home</NavLink></li>
       <li className=" hover:underline  "><NavLink to={'/About'}>About</NavLink></li>
       <li className=" hover:underline  "><NavLink to={'/ShowAllData '}>Available Foods</NavLink></li>
       
       
      {user?.email &&( <>
        
       
       <li className=" hover:underline  "><NavLink to={'/booking'}>Managing Foods</NavLink></li>
       
       </> )
     }
       
      </div>
      return (
            <div className="navbar bg-base-100  h-28 mb-2">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                 {NavItems}
                </ul>
              </div>
               <NavLink to="/"className="font-bold text-3xl">
      
     <div className="flex items-center">
         <div
               className="mx-2 "><img
               className="w-8"
               src={logo} alt="" /></div>
     <div className="flex items-center "><span className="text-red-600" >F</span>ood <div>Con<span className="text-red-700">n</span>ect</div> </div> 
     </div>
      
      </NavLink>
              
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
            {NavItems}
              </ul>
            </div>
            <div className="navbar-end">
               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-4 ">
        <div className="w-10 rounded-full ">
          

           {
      user?.photoURL 
      ?
       <img src={user.photoURL} alt="User" />
      : <img src={imgUser} ></img>
    }

   

         
        </div>
      </div>
            {
       user ? <>
      
<button onClick={handleLogOut} className="btn text-[12px] text-base-700 p-5 hover:underline" >Log Out</button>
       </> :
        <Link to="/Login" ><button className="btn text-[12px] text-base-700 p-5 hover:underline" >Login</button></Link>
      }
            </div>
          </div>
      );
};

export default NavBar;

