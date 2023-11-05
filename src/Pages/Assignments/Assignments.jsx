import { useLoaderData } from "react-router-dom";
import AssignmentCards from "./AssignmentCards";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";

const Assignments = () => {
    const assignments = useLoaderData()
    console.log(assignments)
    return (
        <div className="">
            <Navbar></Navbar>
            <div  className="lg:grid grid-cols-3 max-w-7xl mx-auto my-20">

            {
                assignments.map(assignment => <AssignmentCards key={assignment._id} assignment={assignment}></AssignmentCards>)
            }
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Assignments;