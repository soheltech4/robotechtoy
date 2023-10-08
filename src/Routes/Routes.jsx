import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Signup from "../Pages/Shared/Signup/Signup";
import AllToys from "../Pages/Home/All Toys/AllToys";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
      ]
    },
  ]);