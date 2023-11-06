import { useContext, useEffect, useState } from "react";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyAssignmentRow from "./MyAssignmentRow";

const MyAssignments = () => {

    const [assignments, setAssignments]= useState([])

    const {user} =useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/myAssignments?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAssignments(data))
        
    },[user?.email])
    return (
        <div>
            <Navbar></Navbar>
                <div className="min-h-screen">
                <div className="overflow-x-auto max-w-7xl mx-auto  my-5 ">
                <table className="table w-full">
                    <thead className="text-xl">
                        <tr>
                            <th>Examinee</th>
                            <th>Assignment</th>
                            <th>Total Marks</th>
                            <th>Status</th>
                            <th>Obtained Marks</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    assignments.map(assignment =><MyAssignmentRow key={assignment._id} assignment={assignment}></MyAssignmentRow>)
                    }
                    </tbody>

                </table>
                </div>
                
                </div>
            <Footer></Footer>
        </div>
    );
};

export default MyAssignments;