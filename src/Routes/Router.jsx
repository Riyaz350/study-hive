import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import CreateAssignments from "../Pages/CreateAssignments";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import Assignments from "../Pages/Assignments/Assignments";
import UpdateAssignment from "../Pages/UpdateAssignment";
import AssignmentDetails from "../Pages/Assignments/AssignmentDetails";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";


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
            element:<Assignments></Assignments>,
            loader:()=>fetch('http://localhost:5000/assignments')
          },
          {
            path:'/updateAssignment/:id',
            element:<UpdateAssignment></UpdateAssignment>,
            loader:({params})=> fetch(`http://localhost:5000/assignments/${params.id}`)
          },
          {
            path:'/assignmentDetails/:id',
            element:<AssignmentDetails></AssignmentDetails>,
            loader:({params})=> fetch(`http://localhost:5000/assignments/${params.id}`)

          }
      ],
    },
  ]);

  export default router;