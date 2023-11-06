import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { dateTime } from "../../utilities/utilities";

const AssignmentDetails = () => {
    const toDate = new Date()
    const  assignment = useLoaderData()
    const {user} =useContext(AuthContext)
    const { title, photo, mark, difficulty, date, description } = assignment

    // Assignment Submission
    const handleSubmit = e =>{
        const form = e.target
        const name = user.displayName
        const email = user.email
        const link = form.link.value
        const note = form.note.value
        const submissionTime = dateTime(toDate)
        const submitAssignment = {name, email, link, note, title, mark, status:'pending', obtained_marks:'Pending', feedback:'Pending', submissionTime}
        if(!link){
            swal('The link field can not be empty', 'Please provide a link', 'error')
        }else{
            fetch('http://localhost:5000/submitted',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(submitAssignment)
            })
            .then(res=>res.json())
            .then(data => {
                if(data.acknowledged){
                    swal('Assignment Submitted','You will be notified when your results are published', 'success')
                    e.target.reset()
                }
            })
        }
    }
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


                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
                            <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form onSubmit={handleSubmit} method="dialog">
                                <h3 className="font-bold text-lg">Submission Form</h3>
                                <p className="py-4 text-xl">Put your PDF Google Drove link here & click submit</p>
                                <input className="p-2 border-2 border-gray-200 rounded-lg" name="link" type="text" placeholder='Provide your PDF link ' />
                                <textarea name="note" placeholder="Quick Notes"  className="textarea textarea-bordered textarea-lg w-full " ></textarea>                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <button>Submit</button>
                                </form>
                            </div>
                            </dialog>
                                
                                
                          
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AssignmentDetails;