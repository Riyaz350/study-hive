import {createBrowserRouter,} from "react-router-dom";
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
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
            loader:()=>fetch('http://localhost:5000/assignments')
          },
          {
            path:'/updateAssignment/:id',
            element:<PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>,
            loader:({params})=> fetch(`http://localhost:5000/assignments/${params.id}`)
          },
          {
            path:'/assignmentDetails/:id',
            element:<PrivateRoutes><AssignmentDetails></AssignmentDetails></PrivateRoutes>,
            loader:({params})=> fetch(`http://localhost:5000/assignments/${params.id}`)

          }
      ],
    },
  ]);

  export default router;