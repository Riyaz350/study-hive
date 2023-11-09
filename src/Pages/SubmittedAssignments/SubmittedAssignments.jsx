import { useContext, useEffect, useState } from "react";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SubmittedAssignmentsRow from "./SubmittedAssignmentsRow";
import axios from "axios";

const SubmittedAssignments = () => {
    const [assignments, setAssignments]= useState([])

    const {user} =useContext(AuthContext)
    useEffect(()=>{

        axios.get(`https://assignment-server-sand.vercel.app/submitted?email=${user?.email}`,{withCredentials:true})
        .then(data=>setAssignments(data.data))


        
    },[user?.email])
    return (
        <div>
        <Navbar></Navbar>
            <div className="lg:min-h-screen">
            <h1 className="text-4xl text-center mt-10 text-[#FFDDB6] p-3 rounded-lg bg-[#92140c] w-fit mx-auto">Pending Assignments</h1>

             
            <div className="overflow-x-auto max-w-7xl mx-auto my-5 ">
             <table className="table w-full">
                {/* head */}
                <thead>
                    <tr className="text-xl">
                        <th>Examinee</th>
                        <th>Assignment</th>
                        <th>Marks</th>
                        <th>Submission Time</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody >
                {
                assignments.map(assignment =><SubmittedAssignmentsRow key={assignment._id} assignment={assignment} assignments={assignments} setAssignments={setAssignments}></SubmittedAssignmentsRow>)
                }
                </tbody>

            </table>
            </div>    

        
           
            
            </div>
        <Footer></Footer>
    </div>
);
};

export default SubmittedAssignments;