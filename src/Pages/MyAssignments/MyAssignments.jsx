import { useContext, useEffect, useState } from "react";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyAssignmentsCard from "./MyAssignmentsCard";

const MyAssignments = () => {

    const [assignments, setAssignments]= useState([])

    const {user} =useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/submitted?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAssignments(data))
        
    },[user?.email])
    return (
        <div>
            <Navbar></Navbar>
                <div className="">
                <div className="overflow-x-auto max-w-7xl mx-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Examinee</th>
                            <th>Assignment</th>
                            <th>Marks</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    assignments.map(assignment =><MyAssignmentsCard key={assignment._id} assignment={assignment}></MyAssignmentsCard>)
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