import { useLoaderData } from "react-router-dom";
import AssignmentCards from "./AssignmentCards";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"




import  '../../../src/App.css'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Assignments = () => {
    const {user} =useContext(AuthContext)
    const [assignmentsPerPage, setAssignmentsPerPage] = useState(6)
    const [current, setCurrent] =useState(0)
    const [count, setCount] = useState(0)
    const [diff, setDiff] =useState('')

    const numberOfPages = Math.ceil(count / assignmentsPerPage);

    const pages = [...Array(numberOfPages).keys()];



    const assignments = useLoaderData()
    const [filteredAssignments, setFilteredAssignments] =useState(assignments)

    useEffect(()=>{
        axios.get(`https://assignment-server-sand.vercel.app/assignmentsCount`)
        .then(data => setCount(data.data.count))
        axios.get(`https://assignment-server-sand.vercel.app/pagination?page=${current}&size=${assignmentsPerPage}`)
        .then(data => setFilteredAssignments(data.data))
    },[current, assignmentsPerPage])

    const handleDifficulty = e =>{
        setDiff(e.target.value)
        fetch(`https://assignment-server-sand.vercel.app/assignments?difficulty=${e.target.value}`)
        .then(res=>res.json())
        .then(data=> {
            setFilteredAssignments(data)
        })

    }

    // PAGINATION FUNCTIONS
    const handleAssignmentsPerPage = e => {
        const val = parseInt(e.target.value);
        setAssignmentsPerPage(val);
        setCurrent(0);
    }


    const handlePrev = () =>{
        if(current>0){
            setCurrent(current -1)
        }
    }
    const handleNext = () =>{
        if(current < pages.length-1){
            
            setCurrent(current +1)
        }
    }






    return (
        <div className="">
            
            <Navbar></Navbar>
            {count?
            <div>
            <div className=" max-w-7xl space-y-5 items-center mx-auto mt-10">
                <div className=" text-center ">
                    <h1 className="text-[#FFF5EB] p-3 rounded-lg bg-[#92140c] w-fit mx-auto text-xl lg:text-4xl  ">Available Assignments </h1>
                <div
                 className="mt-10 lg:mt-0 flex lg:justify-end justify-center h-2/3 items-center ">
                    <select  
                    onChange={handleDifficulty} className="bg-[#92140c] p-2 text-[#FFF5EB] text-xl rounded-lg"
          
          >
                        <option value="">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        </select>
                </div>
                    

                </div>
            </div>

            
                  
                <div  className="lg:grid grid-cols-3 gap-10 max-w-7xl mx-auto my-10">
                    
                {
                    filteredAssignments.map(assignment => <AssignmentCards key={assignment._id} filteredAssignment={filteredAssignments} assignment={assignment} setFilteredAssignments={setFilteredAssignments}></AssignmentCards>)
                }
            
                </div>
           

            {/* Pagination */}
            {diff? <div></div> :
            
            <motion.div  whileHover={{ scale: 1.1 }} >
                <div className="  page "></div>
            <div className='flex flex-col max-w-fit px-10 py-2 rounded-full mx-auto mb-10 justify-center items-center text-xs lg:text-base  text-[#92140c] font-bold border-4 border-[#92140c]'>
                <div className="flex max-w-fit items-center justify-center gap-5 lg:gap-20">
                <button className="bg-[#92140c] text-[#FFDDB6] rounded-full p-2" onClick={handlePrev}>Prev</button>
                <div className="flex gap-5 lg:gap-20">
                {
                    pages.map(page => <button
                        className={current === page ? 'activePage' : undefined}
                        onClick={() => setCurrent(page)}
                        key={page}
                    >{page}</button>)
                }
                </div>
                <button onClick={handleNext} className="bg-[#92140c] text-[#FFDDB6] rounded-full p-2">Next</button>
                <select value={assignmentsPerPage} onChange={handleAssignmentsPerPage} name="" id="">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                </select>
                </div>
            </div>
            </motion.div>
            }
            </div>: 
            <div className="max-w-1/2"> 
                <span className="loading loading-infinity block mx-auto w-1/4 "></span>
            </div>
}
        <Footer></Footer>
        </div>
    );
};

export default Assignments;