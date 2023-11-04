import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/logIn',
            element:<LogIn></LogIn>
        }
      ],
    },
  ]);

  export default router;