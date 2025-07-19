import { Link, useRouteError } from "react-router-dom";
import img from '../assets/assets/404.gif'; 
const ErrorPage = () => {
      const error = useRouteError();
      console.log(error)
      return (
           
    <div  className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-10">
      <img
        src={img}
        alt="Error Illustration"
        className="w-98 h-auto mb-6"
      />

      <h1 className="text-5xl md:text-7xl font-extrabold text-red-700 mb-4">
        Oops!
      </h1>

      <p className="text-lg md:text-2xl text-gray-800 mb-6 max-w-xl">
        {error.statusText || error.message || "Something went wrong."}
      </p>

      {error.status === 404 && (
        <div className="text-center text-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="mb-4">It looks like this page doesn’t exist anymore.</p>
          <Link to="/">
            <button className="bg-red-700 hover:bg-red-800 text-white text-lg font-medium px-6 py-3 rounded-md shadow transition duration-300">
              ⬅ Go Back Home
            </button>
          </Link>
        </div>
      )}
    </div>
 

//             <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
//   <img src={img} alt="Error Illustration" className="w-64 h-auto mb-6" />

//   <h1 className="text-6xl font-bold text-red-700 mb-4">Oops!!!</h1>

//   <p className="text-2xl text-gray-700 mb-6">
//     {error.statusText || error.message}
//   </p>

//   {error.status === 404 && (
//     <div className="text-xl text-gray-600">
//       <h3 className="font-semibold text-2xl mb-2">Page Not Found</h3>
//       <p className="mb-4">Looks like you're lost. Let's get you back home.</p>
//       <Link to="/">
//         <button className="btn bg-red-600 hover:bg-red-700 text-white text-lg font-medium px-6 py-3 rounded-md shadow-md transition-all">
//           ⬅ Go Home
//         </button>
//       </Link>
//     </div>
//   )}
// </div>

            // <div className="text-center text-4xl  space-y-3">
            //    <img src={img} alt="" />
            //     <h1 className="text-6xl my-8 text-red-900">Oops!!!</h1>  
            //     <p className="text-4xl"> {error.statusText || error.message} </p>
            //     {
            //       error.status === 404 && <div><h3>page not found</h3>
            //       <p className="my-2">Go back where you from</p>
            //       <Link to={"/"} ><button className="btn text-2xl font-semibold m-3 p-5 text-base-700">Home</button></Link>
            //       </div>
            //      }
            // </div>
      );
};

export default ErrorPage;