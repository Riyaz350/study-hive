import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import CreateAssignments from "../Pages/CreateAssignments";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import Assignments from "../Pages/Assignments/Assignments";
import UpdateAssignment from "../Pages/UpdateAssignment";
import AssignmentDetails from "../Pages/Assignments/AssignmentDetails";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Pages/Home/Home";


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
            element:<PrivateRoutes><CreateAssignments></CreateAssignments></PrivateRoutes>

          },
          {
            path:'/myAssignments',
            element:<PrivateRoutes><MyAssignments></MyAssignments></PrivateRoutes>
          },
          {
            path:'/submittedAssignments',
            element:<PrivateRoutes><SubmittedAssignments></SubmittedAssignments></PrivateRoutes>,
          },
          {
            path:'/assignments',
            element:<Assignments></Assignments>,
            loader:()=>fetch('https://assignment-server-sand.vercel.app/assignments')
          },
          {
            path:'/updateAssignment/:id',
            element:<PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>,
            loader:({params})=> fetch(`https://assignment-server-sand.vercel.app/assignments/${params.id}`)
          },
          {
            path:'/assignmentDetails/:id',
            element:<PrivateRoutes><AssignmentDetails></AssignmentDetails></PrivateRoutes>,
            loader:({params})=> fetch(`https://assignment-server-sand.vercel.app/assignments/${params.id}`)

          }
      ],
    },
  ]);

  export default router;