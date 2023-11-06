import { useLoaderData } from "react-router-dom";
import AssignmentCards from "./AssignmentCards";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { useState } from "react";

const Assignments = () => {
    const assignments = useLoaderData()
    const [filteredAssignments, setFilteredAssignments] =useState(assignments)

    const handleDifficulty = e =>{
        fetch(`http://localhost:5000/assignments?difficulty=${e.target.value}`)
        .then(res=>res.json())
        .then(data=> setFilteredAssignments(data))

    }
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="lg:grid grid-cols-4 max-w-7xl space-y-5 items-center mx-auto mt-10">
                <div className="col-span-3  text-center ">
                    <h1 className="text-4xl text-[#FFF5EB] p-3 rounded-lg bg-[#92140c] w-fit mx-auto">Available Assignments</h1>
                </div>
                <div className="col-span-1 flex lg:justify-end justify-center h-2/3 items-center ">
                    <select onChange={handleDifficulty} className="bg-[#92140c] p-2 text-[#FFF5EB] text-xl rounded-lg">
                        <option value="">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
            </div>
            <div  className="lg:grid grid-cols-3 gap-10 max-w-7xl mx-auto my-10">

            {
                filteredAssignments.map(assignment => <AssignmentCards key={assignment._id} filteredAssignment={filteredAssignments} assignment={assignment} setFilteredAssignments={setFilteredAssignments}></AssignmentCards>)
            }
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Assignments;