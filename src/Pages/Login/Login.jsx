
import { useContext, useState } from 'react';
import img0 from '../../assets/assets/img0.png'

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import axios from 'axios';


const Login = () => {
      const { signIn,signInGoogle} = useContext(AuthContext)  
      const [success,setSuccess] = useState('');
  const [loginError,setLoginError] = useState('');
  const [showPassword,setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate()
  // console.log(location)

      const handleLogin = event =>{
            event.preventDefault()
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

             //reset error and success
    setSuccess('');
    setLoginError('');
            

            signIn(email, password)
            .then(result =>{
                  const loggedInUser=(result.user)
                  console.log(loggedInUser);
                  const user = {email};

                
            
             setSuccess('User create Successfully')
              // navigate(location?.state ? location?.state : '/')
              //get access token
              axios.post('http://localhost:15000/jwt',user,{
                withCredentials:true
              })

              .then(res =>{
                console.log(res.data)
                if(res.data.success){
                   navigate(location?.state ? location?.state : '/')
                }
              })
              

            })
            .catch(error =>{
              console.error(error)
               setLoginError(error.message)}
            )
      }

       const handleSignInGoogle = () =>{
    signInGoogle ()
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error)
    })

    }

      return (
           
      <div className='flex-col lg:flex-row '>
             <h1 className="text-5xl text-center font-bold  text-zinc-700">Login your account </h1>
          <div className='flex-col lg:flex-row '>
              <div className="hero-content max-w-xl mx-auto ">
      <img className='mt-5  ' src={img0} alt="" />
    </div>
   

    <div className=" w-full  shrink-0 shadow-2xl mb-20 ">
      <form onSubmit={handleLogin} className="bg-linear-to-l from-[#151515] to-[rgba(21,21,21,0)]   w-full p-10 ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-zinc-800 font-semibold w-full my-2">Email</span>
          </label>
          <br />
         <div className=''>
             <input 
             type="email"
             name='email' 
            
             placeholder="email" 
             className="
             input border-none mb-2 text-zinc-900 text-[11px] bg-zinc-100 w-full p-7 " required />
         </div>
     
       </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-zinc-900 font-semibold my-2">Password</span>
          </label>
        <div>
            <div className='relative'>
       
            <input 
           type= { showPassword ? "text" : "password"}
         
           name='password' 
           placeholder="password" 
           className="input input-bordered border-none mb-6 
           text-zinc-800 text-[11px] w-full p-7 "required />
        

           <span className='absolute top-4 right-5 text-[14px]' onClick={() => setShowPassword(!showPassword)}>{ showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}  </span>
        </div>
        </div>
          
        </div>
        <div className="form-control">
          <button className=" bg-zinc-800 text-white w-full text-[12px] p-3 font-semibold">Login</button>
        </div>
      </form>
     <div className=' bg-linear-to-l from-[#151515] to-[rgba(21,21,21,0)] '>
       {
        loginError && <p className='text-red-800 text-center pt-4  text-2xl' > {loginError} </p>
      }
      {
        success && <p className='text-green-800 text-center pt-4 text-2xl'> {success} </p>
      }
      <p className='text-center text-xl m-4 pb-4 text-zinc-600 font-semibold'>Do not have an account <Link className='btn-link text-blue-900 font-semibold' to={'/Register'}>Register</Link> </p>
     </div>

     <div className=' flex ml-16'>
      <p><button className="btn btn-link m-3 text-black text-2xl " onClick={handleSignInGoogle} > <p><FaGoogle className='text-black'></FaGoogle></p> Google</button></p>


      </div>

      
      </div>

     
     
  
          </div>
      </div>
    
      );
};

export default Login;