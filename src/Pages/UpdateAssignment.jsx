import swal from "sweetalert";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import './pages.css'
import { useLoaderData } from "react-router-dom";

const UpdateAssignment = () => {
    const assignment = useLoaderData()
    console.log(assignment)

    const {_id, title, photo, mark, difficulty, description } = assignment
    
    const {user} =useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const [difficultyValue, setDifficultyValue] = useState('easy')
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
        const mark = form.mark.value
        const date = day+'/'+month+'/'+year
        const description = form.description.value
        const addAssignment = {title,email, difficulty, photo, mark, date, description}
        console.log(addAssignment)

        fetch(`http://localhost:5000/assignments/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addAssignment)
        })
        .then(res => res.json())
        .then(data =>{
            swal("Assignment Updated", "The Assignment has been added to the Assignments", "success");
                form.reset()
            console.log(data)
        })

    }

    const handleDifficulty = e =>{
        const difficulty = e.target.value
        setDifficultyValue(difficulty)
    }

    return (
        <div className={` ${"light-home"}`}>
            <Navbar></Navbar>
            <div className="p-10 lg:px-20 lg:py-20 ">
            <h1 className={"text-3xl lg:text-5xl mb-10 text-black"}>Update Assignment {title}</h1>
            <form  onSubmit={handleAddPhone} className="lg:space-y-10 form">
                    <div className=" md:gap-6 ">
                    <div className="relative z-0 w-full mb-6 group">
                        <input defaultValue={title} type="text" name="title"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Title" required />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input defaultValue={photo} type="text" name="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Thumbnail Photo URL" required />
                    </div>
                        <div className="lg:flex justify-around">
                            <div className="relative text-xl lg:text-3xl w-[500px] mr-auto">
                                <select defaultValue={difficulty} onChange={handleDifficulty}>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                                {/* <input type="text" name="difficulty"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Difficulty" required /> */}
                            </div>
                        
                            <div className="w-[500px] mx-auto ">
                            <DatePicker className="lg:text-3xl text-center text-xl" selected={startDate} onChange={(date)  => setStartDate(date)} />
                            </div>
                            
                            <div className="relative z-0 w-[500px] ml-auto mb-6 group">
                                <input defaultValue={mark} type="number" name="mark" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Mark" required />
                            </div>
                        
                        </div>
                    </div>
                    <div>
                    <textarea defaultValue={description} name="description" placeholder="Description"  className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>
            <button type="submit" className="text-black hover:text-white bg-white hover:bg-red-700 border-2 border-black hover:border-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Assignment</button>
            </form>
        </div>
            <Footer></Footer>
        </div>                                                                                       
    );
};

export default UpdateAssignment;