import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const MyAssignmentsCard = ({assignment}) => {
    const {user} =useContext(AuthContext)


    const {_id, name, email, title, photo, mark, difficulty, status } = assignment
    return (
        <tr>
        <th>{name}</th>
        <th>{title}</th>
        <th>{mark}</th>
        <th><button className="btn">Give Mark</button></th>
    </tr>
    );
};

export default MyAssignmentsCard;