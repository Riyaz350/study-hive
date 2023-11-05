import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import CreateAssignments from "../Pages/CreateAssignments";
import MyAssignments from "../Pages/MyAssignments";
import SubmittedAssignments from "../Pages/SubmittedAssignments";
import Assignments from "../Pages/Assignments";


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
            element:<CreateAssignments></CreateAssignments>

          },
          {
            path:'/myAssignments',
            element:<MyAssignments></MyAssignments>
          },
          {
            path:'/submittedAssignments',
            element:<SubmittedAssignments></SubmittedAssignments>
          },
          {
            path:'/assignments',
            element:<Assignments></Assignments>
          }
      ],
    },
  ]);

  export default router;