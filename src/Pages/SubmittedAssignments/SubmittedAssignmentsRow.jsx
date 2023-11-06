
const SubmittedAssignmentsRow = ({assignment}) => {
    const {name, title, mark } = assignment
    return (
        <tr>
        <th>{name}</th>
        <th>{title}</th>
        <th>{mark}</th>
        <th><button className="btn">Give Mark</button></th>
    </tr>
    );
};

export default SubmittedAssignmentsRow;