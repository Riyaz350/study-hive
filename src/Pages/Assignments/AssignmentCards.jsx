import { Link } from "react-router-dom";

const AssignmentCards = ({assignment}) => {
    const {_id, title, photo, mark, difficulty } = assignment
    return (
            <div>
            <div className="card w-4/5 mx-auto lg:w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body lg:text-start text-center">
                    <h2 className="lg:card-title text-3xl">{title}</h2>
                    <p>{mark}</p>
                    <p>{difficulty}</p>
                    <div className="card-actions justify-end ">
                    <Link to={`/updateAssignment/${_id}`} className="btn text-xs btn-primary">Update Assignment</Link>
                    <Link className="btn text-xs btn-primary">Delete Assignment</Link>
                    </div>
                </div>
            </div>
        </div>        
    );
};

export default AssignmentCards;