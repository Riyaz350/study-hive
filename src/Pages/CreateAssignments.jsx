import swal from "sweetalert";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import './pages.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CreateAssignments = () => {

    const {user} =useContext(AuthContext)
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const [difficultyValue, setDifficultyValue] = useState('easy')
    const [subjectValue, setSubjectValue] = useState('Math')
    const day = startDate.getDate()
    const month = startDate.getMonth()
    const year = startDate.getFullYear()

    const handleAddPhone = e =>{
        e.preventDefault()
        const form = e.target
        const email = user.email
        const title = form.title.value
        const difficulty = difficultyValue
        const photo = form.photo.value
        const subject = subjectValue
        const mark = form.mark.value
        const date = day+'/'+month+'/'+year
        const description = form.description.value
        const addAssignment = {title,email, difficulty, photo, mark,subject, date, description}

        axios.post(`http://localhost:5000/assignments?email=${user?.email}`, addAssignment, {withCredentials:true})
        .then(data =>{
                swal("Assignment Created", "You've created an Assignment", "success");
                navigate('/assignments')
                console.log(data)
        })



    }

    const handleDifficulty = e =>{
        const difficulty = e.target.value
        setDifficultyValue(difficulty)
    }
    const handleSubject = e =>{
        const difficulty = e.target.value
        setSubjectValue(difficulty)
    }

    return (
        <div className={` ${"light-home"}`}>
            <Navbar></Navbar>
            <div className="min-h-screen p-10 lg:px-20 lg:py-20 ">
            <h1 className="text-3xl lg:text-5xl text-[#FFDDB6] p-3 rounded-lg bg-[#92140c] w-fit ">Create an Assignment</h1>
            <form  onSubmit={handleAddPhone} className="lg:space-y-10 form my-10">
                    <div className=" md:gap-6 ">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="title"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Title" required />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Thumbnail Photo URL" required />
                    </div>
                        <div className="lg:flex justify-around items-end gap-20 space-y-10 lg:space-y-0 mb-10">
                            <div className="relative text-xl lg:text-3xl lg:w-[500px] mr-auto">
                                <select className="bg-[#92140c] text-[#FFDDB6] " onChange={handleDifficulty}>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                                {/* <input type="text" name="difficulty"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Difficulty" required /> */}
                            </div>
                            <div className="relative text-xl lg:text-3xl lg:w-[500px] mr-auto">
                                <select className="bg-[#92140c] text-[#FFDDB6] " onChange={handleSubject}>
                                    <option value="math">Math</option>
                                    <option value="cse">CSE</option>
                                    <option value="finance">Finance</option>
                                </select>
                                {/* <input type="text" name="difficulty"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Difficulty" required /> */}
                            </div>
                        
                            <div className="lg:w-[500px] mx-auto  text-[#FFDDB6]">
                            <DatePicker className="lg:text-3xl bg-[#92140c] text-center text-xl" selected={startDate} onChange={(date)  => setStartDate(date)} />
                            </div>

                            
                            <div className="relative z-0 lg:w-[500px] ml-auto mb-6 group">
                                <input type="number" name="mark" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Mark" required />
                            </div>
                        
                        </div>
                    </div>
                    <div>
                    <textarea name="description" placeholder="Description"  className="textarea textarea-bordered h-[200px] textarea-lg w-full " ></textarea>
                    </div>
            <button type="submit" className="text-black hover:text-white bg-white hover:bg-red-700 border-2 border-black hover:border-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Assignment</button>
            </form>
        </div>
            <Footer></Footer>
        </div>                                                                                       
    );
};

export default CreateAssignments;