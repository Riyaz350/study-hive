import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const MyAssignmentsCard = ({assignment}) => {
    const {user} =useContext(AuthContext)

    const handleDelete = email =>{
        if(user?.email)
        console.log(email)
    }
    const {_id,email, title, photo, mark, difficulty } = assignment
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
                <Link to={`/updateAssignment/${_id}`} className="btn text-sm bg-[#FFEAD2] text-black border-2 border-[#FFEAD2]  rounded-lg hover:bg-[#92140c] hover:border-[#FFEAD2] hover:text-[#FFEAD2]">Update Assignment</Link>
                <Link onClick={()=>handleDelete(email)} className="btn text-sm bg-[#FFEAD2] text-black border-2 border-[#FFEAD2]  rounded-lg hover:bg-[#92140c] hover:border-[#FFEAD2] hover:text-[#FFEAD2]">Delete Assignment</Link>

                </div>
            </div>
        </div>
    </div>       





        //     <div >
        //     <div className="card w-4/5 mx-auto lg:w-96 bg-base-100 shadow-xl">
        //         <figure><img src={photo} alt="Shoes" /></figure>
        //         <div className="card-body lg:text-start text-center">
        //             <h2 className="lg:card-title text-3xl">{title}</h2>
        //             <p>{mark}</p>
        //             <p>{difficulty}</p>
        //             <div className="card-actions justify-end ">
        //             <Link to={`/updateAssignment/${_id}`} className="btn text-xs btn-primary">Update Assignment</Link>
        //             <Link onClick={()=>handleDelete(email)} className="btn text-xs btn-primary">Delete Assignment</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>        
    );
};

export default MyAssignmentsCard;