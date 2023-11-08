import { Link } from "react-router-dom";
import { upperFirstChar } from "../../../utilities.js/utilities";

const FeaturedCard = ({assignment}) => {
    const {_id, title, photo, difficulty, mark} =assignment
    const Difficulty = upperFirstChar(difficulty)

    return (
        <div className="mb-10 lg:mb-0">
            <div className="p-2 h-full bg-[#92140c] text-[#FFDDB6] card items-center justify-between gap-5 w-4/5 mx-auto lg:w-96  shadow-xl">
                <div className="w-fit">
                <img className="w-fit rounded-lg" src={photo} alt="Shoes" />
                </div>
                <div className=" text-start w-full flex flex-col gap-2">
                    <h2 className="lg:card-title text-3xl">{title}</h2>
                    <p>Marks: {mark}</p>
                    <p>Difficulty: {Difficulty}</p>
                    <div className="card-actions lg:justify-center mb-2">
                    <div className="gap-2 flex flex-col  w-full ">
                    <Link to={`/assignmentDetails/${_id}`} className="btn w-full text-sm bg-[#FFDDB6] text-black border-2 border-[#FFDDB6]  rounded-lg hover:bg-[#92140c] hover:border-[#FFDDB6] hover:text-[#FFDDB6]">View Assignment</Link>
                    
                    </div>
                    </div>
                </div>
            </div>
            </div>   
    );
};

export default FeaturedCard;