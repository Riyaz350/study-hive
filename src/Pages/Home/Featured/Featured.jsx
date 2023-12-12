import { useContext, useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Featured = () => {
    const [featuredAssignments, setFeaturedAssignments] = useState([])

    useEffect(()=>{
    
        fetch('https://assignment-server-sand.vercel.app/assignments')
        .then(res => res.json())
        .then(data => setFeaturedAssignments(data))
    
      },[])

      

      const filter = (array)=>{
        const random =array.sort(() => 0.5 - Math.random())
      const sliced = random.slice(0,3)
      return(sliced)
      }
      const randomAssignments = filter(featuredAssignments)
    return (
      
        <div className="max-w-7xl mx-auto my-10 border-[#92140c] border-8 rounded-xl p-10">
                    <h1 className="text-xl lg:text-4xl text-[#FFF5EB] p-3 rounded-lg bg-[#92140c] w-fit mx-auto">Featured Assignments</h1>
        <div className="lg:grid grid-cols-3 mt-10 gap-6">
        {
          randomAssignments.map(assignment => <FeaturedCard key={assignment._id} assignment={assignment}></FeaturedCard> )
        }
      </div> 
        </div>

    );
};

export default Featured;