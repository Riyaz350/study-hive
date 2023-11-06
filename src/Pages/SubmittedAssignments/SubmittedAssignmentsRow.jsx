
const SubmittedAssignmentsRow = ({assignment, assignments, setAssignments}) => {
    const {_id, link, note, name, title, mark, submissionTime } = assignment

    const handleSubmit = e =>{
        const Mark = e.target.mark.value
        const Feedback = e.target.feedback.value
        console.log(Mark, Feedback)
        fetch(`http://localhost:5000/submitted/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Completed', 
            marks: Mark, 
            feedback:Feedback })
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                const filtered = assignments.filter(assignment=> assignment._id !== _id)
                setAssignments(filtered)
            }
        })
    }
    
    return (
        <tr className="border-2 border-black  rounded-lg ">
        <th>{name}</th>
        <th>{title}</th>
        <th>{mark}</th>
        <th>{submissionTime}</th>

        <th>
            <button className="btn font-bold bg-[#1e1e24] border-2 border-[#FFEAD2] text-[#FFEAD2] rounded-lg hover:bg-[#FFECD6] hover:text-[#92140c] hover:border-[#92140c]" onClick={()=>document.getElementById(_id).showModal()}>Give Mark</button>
            <dialog id={_id} className="modal">
            <div className="modal-box bg-[#FFEAD2]">
                <form onSubmit={handleSubmit} className=" space-y-2" method="dialog">
                <h3 className="font-bold text-lg">{link}</h3>
                <p className=" text-xl">{note}</p>
                <input required className="p-2 border-2 border-gray-200 rounded-lg" name="mark" type="number" placeholder='Obtained marks' />
                <textarea required name="feedback" placeholder="Feedback"  className="textarea textarea-bordered textarea-lg w-full " ></textarea>                                
                <button className="btn font-bold bg-[#1e1e24] border-2 border-[#FFEAD2] text-[#FFEAD2] rounded-lg hover:bg-[#FFECD6] hover:text-[#92140c] hover:border-[#92140c]">Submit</button>
                </form>
           </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </th>
    </tr>
    );
};

export default SubmittedAssignmentsRow;