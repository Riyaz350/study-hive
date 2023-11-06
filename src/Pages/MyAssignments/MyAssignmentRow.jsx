import { upperFirstChar } from "../../utilities.js/utilities";

const MyAssignmentRow = ({assignment}) => {
    const { name, title, mark, status, obtained_marks, feedback } = assignment
    const Status = upperFirstChar(status)
    return (
        <tr className="border-2 border-black  rounded-lg ">
        <th>{name}</th>
        <th>{title}</th>
        <th>{mark}</th>
        <th>{Status}</th>
        <th>{obtained_marks}</th>
        <th>{feedback}</th>
    </tr>
    );
};

export default MyAssignmentRow;