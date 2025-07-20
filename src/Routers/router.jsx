import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homes/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Pages/Services/ServiceDetails";

import ServiceDetail from "../Pages/Services/ServiceDetail";
import Booking from "../Pages/Services/Booking";

import ShowAllData from "../Pages/Services/ShowAllData";
import PrivateRoute from "./PrivateRoute";

import About from "../Pages/About/About";
import ErrorPage from "../ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
     errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
            path:"/",
            element:<Home></Home>
      },
       {
              path:'/Login',
              element:<Login></Login>
            },

             {
              path:'/Register',
              element:<SignUp></SignUp>
            },
            {
              path:'/About',
              element:<About></About>

            },
            {path:'/ShowAllData ',
             element:<ShowAllData></ShowAllData>,
              

            },

            
            {
              path:'/ServiceDetails/:id',
              loader:({params} ) => fetch(`https://food-connect-server-one.vercel.app/foods/${params.id}`),
              element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>

            },
            {
              path:'/ServiceDetail/:id',
                loader:({params} ) => fetch(`https://food-connect-server-one.vercel.app/foods/${params.id}`),
              element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>
            },
            {
              path:'/booking',
              element:<PrivateRoute><Booking></Booking></PrivateRoute>
            }
    ]
  },
]);
export default router
