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

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
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
             element:<ShowAllData></ShowAllData>

            },

            
            {
              path:'/ServiceDetails/:id',
              loader:({params} ) => fetch(`http://localhost:15000/food/${params.id}`),
              element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>

            },
            {
              path:'/ServiceDetail/:id',
              element:<ServiceDetail></ServiceDetail>
            },
            {
              path:'/booking',
              element:<PrivateRoute><Booking></Booking></PrivateRoute>
            }

    ]
  },
]);
export default router
