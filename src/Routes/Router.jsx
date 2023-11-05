import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";


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
        },
        {
            path:'/register',
            element:<Register></Register>
          },
          {
            path:'/createAssignments',

          },
          {
            path:'/myAssignments',
          },
          {
            path:'/submittedAssignments',
          },
          {
            path:'/assignments',
          }
      ],
    },
  ]);

  export default router;