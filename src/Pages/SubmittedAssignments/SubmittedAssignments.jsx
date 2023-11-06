import { useContext, useEffect, useState } from "react";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SubmittedAssignmentsRow from "./SubmittedAssignmentsRow";

const SubmittedAssignments = () => {
    const [assignments, setAssignments]= useState([])

    const {user} =useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/submitted?status=pending`)
        .then(res=>res.json())
        .then(data=>setAssignments(data))
        
    },[user?.email])
    return (
        <div>
        <Navbar></Navbar>
            <div className="">
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