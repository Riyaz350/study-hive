import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AssignmentCards = ({assignment}) => {

    

    const {_id, title, photo, mark, difficulty } = assignment
    return (
            <div className="mb-10 lg:mb-0">
            <div className="p-2 bg-[#92140c] text-[#FFF5EB] card items-center justify-center gap-5 w-4/5 mx-auto lg:w-96  shadow-xl">
                <div className="w-fit">
                <img className="w-fit rounded-lg" src={photo} alt="Shoes" />
                </div>
                <div className=" text-start  flex flex-col gap-2">
                    <h2 className="lg:card-title text-3xl">{title}</h2>
                    <p>Marks: {mark}</p>
                    <p>Difficulty: {difficulty.toUpperCase()}</p>
                    <div className="card-actions lg:justify-center mb-2">
                    <Link to={`/assignmentDetails/${_id}`} className="btn text-sm bg-[#FFF5EB]">View Assignment</Link>
                    <Link to={`/updateAssignment/${_id}`} className="btn text-sm bg-[#FFF5EB]">Update Assignment</Link>
                    </div>
                </div>
            </div>
        </div>        
    );
};

export default AssignmentCards;