import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Signup from "../Pages/Shared/Signup/Signup";
import AllToys from "../Pages/All Toys/AllToys";
import ToyDetails from "../Pages/Toy Details/ToyDetails";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../Pages/Dashboard/AddToy/AddToy";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/toydetails/:_id',
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`https://robotechtoy-server-dq64xfm55-sohelranagtc.vercel.app/products/${params._id}`)
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "myprofile",
        element: <MyProfile/>
      },
      {
        path: "mycart",
        element: <MyCart/>
      },
      {
        path: "addtoy",
        element: <AddToy/>
      }
    ]
  }
]);