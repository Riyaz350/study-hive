import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import swal from "sweetalert";
import { useContext} from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { dateTime } from "../../utilities.js/utilities";
import { upperFirstChar } from "../../utilities.js/utilities";
import axios from "axios";

const AssignmentDetails = () => {
    const toDate = new Date()
    const assignment = useLoaderData()
    const {user} =useContext(AuthContext)
    const { title, photo, mark, difficulty, date, description } = assignment
    const Difficulty = upperFirstChar(difficulty)


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


            axios.post(`https://assignment-server-sand.vercel.app/submitted?email=${user?.email}`, submitAssignment, {withCredentials:true})
            .then(data => {
                if(data.status == 200){
                    swal('Assignment Submitted','You will be notified when your results are published', 'success')
                    console.log(data)
                }

            })
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
                <div className="card card-compact max-w-7xl mx-auto lg:p-20 bg-base-100 shadow-xl my-20">
                    <figure><img src={photo} alt="Shoes" /></figure>
                    <div className="card-body space-y-5">
                        <h2 className="text-2xl lg:text-5xl font-bold">{title}</h2>
                        <p className="text-xl lg:text-3xl font-semibold">Marks: {mark}</p>
                        <p className="text-xl font-bold">Difficulty: {Difficulty}</p>
                        <p className="text-lg font-bold">Due date: {date}</p>
                        <p className="text-lg font-bold">Description:</p>
                        <p className="text-xl">{description}</p>
                        <div className="card-actions justify-center">


                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn font-bold bg-[#1e1e24] border-2 border-[#1e1e24] text-[#FFDDB6] rounded-lg hover:bg-[#FFDDB6] hover:text-[#92140c] hover:border-[#92140c]" onClick={()=>document.getElementById('my_modal_3').showModal()}>Take Assignment</button>
                            <dialog id="my_modal_3" className="modal">
                            <div className="modal-box bg-[#FFDDB6]">
                                <form onSubmit={handleSubmit} className="space-y-2" method="dialog">
                                <h3 className="font-bold text-lg">Submission Form</h3>
                                <p className=" text-xl">Put your PDF Google Drove link here & click submit</p>
                                <input required className="p-2 border-2 border-gray-200 rounded-lg" name="link" type="text" placeholder='Provide your PDF link ' />
                                <textarea  name="note" placeholder="Quick Notes"  className="textarea textarea-bordered textarea-lg w-full " ></textarea>                             
                                <button className="btn font-bold bg-[#1e1e24] border-2 border-[#FFDDB6] text-[#FFDDB6] rounded-lg hover:bg-[#FFDDB6] hover:text-[#92140c] hover:border-[#92140c]">Submit</button>
                                </form>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                            </dialog>
                                
                                
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full bottom-0">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default AssignmentDetails;