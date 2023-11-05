import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const AssignmentDetails = () => {

    const  assignment = useLoaderData()
    const {_id, title, photo, mark, difficulty,date, description } = assignment

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="card card-compact max-w-7xl mx-auto lg:p-20 bg-base-100 shadow-xl">
                    <figure><img src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl lg:text-5xl font-bold">{title}</h2>
                        <p className="text-xl lg:text-3xl font-semibold">Marks: {mark}</p>
                        <p className="text-lg font-bold">Difficulty: {difficulty.toUpperCase()}</p>
                        <p className="text-lg font-bold">Due date: {date}</p>
                        <p className="text-lg font-bold">Description</p>
                        <p className="text-lg">{description}</p>
                        <div className="card-actions justify-center">
                        <button className="btn  bg-[#FFEAD2] text-black border-2 border-[#FFEAD2]  rounded-lg hover:bg-[#92140c] hover:border-[#FFEAD2] hover:text-[#FFEAD2]">Take Assignment</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AssignmentDetails;