import { useLoaderData } from "react-router-dom";
import AssignmentCards from "./AssignmentCards";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { useState } from "react";

const Assignments = () => {
    const assignments = useLoaderData()
    const [filteredAssignments, setFilteredAssignments] =useState(assignments)
    return (
        <div className="">
            <Navbar></Navbar>
            <div  className="lg:grid grid-cols-3 gap-10 max-w-7xl mx-auto my-20">

            {
                filteredAssignments.map(assignment => <AssignmentCards key={assignment._id} assignment={assignment} assignments={assignments} setFilteredAssignments={setFilteredAssignments}></AssignmentCards>)
            }
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Assignments;