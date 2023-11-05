import { useContext, useEffect, useState } from "react";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyAssignmentsCard from "./MyAssignmentsCard";

const MyAssignments = () => {

    const [assignments, setAssignments]= useState([])

    const {user} =useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/assignments?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAssignments(data))
        
    },[user?.email])
    return (
        <div>
            <Navbar></Navbar>
                <div className="flex-1 h-full lg:grid grid-cols-3 max-w-7xl mx-auto my-20">

                {
                    assignments.map(assignment =><MyAssignmentsCard key={assignment._id} assignment={assignment}></MyAssignmentsCard>)
                }
                </div>
            <Footer></Footer>
        </div>
    );
};

export default MyAssignments;