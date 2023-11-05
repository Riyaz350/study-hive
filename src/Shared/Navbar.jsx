import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../AuthProvider/AuthProvider";
// import {BsLightbulbFill, BsLightbulbOff } from 'react-icons/bs';



  const Navbar = () => {

  const [photo, setPhoto] =useState('')
  const [userName, setUserName] =useState('')
//   const [light, setLight] =useState(true)
  const { user, logOut} =useContext(AuthContext)

  // NavLink classes
  const active = 'btn text-[#FFF5EB] font-bold bg-[#1e1e24] border-2 border-[#FFF5EB] text-[#FFF5EB] rounded-lg hover:bg-[#FFECD6] hover:text-[#92140c] hover:border-[#FFF5EB]'
  const inActive = 'btn bg-[#FFF5EB] text-black border-2 rounded-lg hover:bg-[#92140c] hover:border-[#FFF5EB] hover:text-[#FFF5EB]'

    // const handleTheme = ()=>{
    //   setLight(!light)
    //   dark(light)

    // }


 //LogOut button handler 
  const handleLogOut = e =>{
    e.preventDefault()
    logOut()
    .then(()=>{swal("Logged Out","Successfully","success");  })
    .catch(()=>{console.log("error")})
  }

  useEffect(()=>{
    if(user){
        if(user.photoURL && user.displayName){
          setPhoto(user.photoURL)   
        setUserName(user.displayName) 
        }  
      }
    
  },[user])



  // reused
  const navLinks = <>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/">Home</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/assignments">Assignments</NavLink>
      {user? <><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/createAssignments">Create Assignments</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/myAssignments">My Assignments</NavLink>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/submittedAssignments">Submitted Assignments</NavLink>
     </>: <div></div>}
       </>
      

      
    return (
      
      
        <div className="lg:p-10 navbar bg-[#92140c] lg:px-10 flex flex-col lg:flex-row justify-center items-center ">
          <div className="lg:navbar-start flex flex-row py-10 lg:py-0 lg:flex-row justify-between">
              <div className="dropdown  overflow-visible">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
                </ul>
              </div>
              <img className="overflow-hidden w-1/2 lg:w-2/5" src="" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className=" px-1 text-xl text-white space-x-6">
                {navLinks}
              </ul>
            </div>
            <div className="lg:navbar-end justify-center ">
              {!user ?<div>

                <NavLink to="/login" className={  ({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive}>Log In</NavLink>

                {/* {theme? <IconButton className="bg-white ml-10 lg:ml-4 text-black border-2 border-black" onClick={handleTheme} size="sm"><BsLightbulbFill/></IconButton>:
                    <IconButton className="bg-black ml-10 lg:ml-4 text-white border-2 border-white" onClick={handleTheme} size="sm"><BsLightbulbOff/></IconButton>}
                     */}

              </div> :
                 
                  <div className="flex  lg:flex-row  justify-center lg:justify-end items-center gap-4  lg:w-full">
                    <div className="flex flex-row justify-center items-center gap-4">
                      {/* <h1 className="text-white  ">{userName}</h1> */}
                      <div className="flex  gap-6 justify-center">
                      <div className="relative group w-[100px]">
                      <img src={photo}  alt="" className="w-[50px] mx-auto rounded-lg"/>
                        <div className="absolute top-[50px] rounded-lg inset-0 hidden group-hover:block  text-white text-center">
                            <p className="text-sm bg-[#92140c] rounded-lg w-full  font-semibold">{userName}</p>
                        </div>
                        </div>
                      <Link onClick={handleLogOut} className='btn text-black bg-[#FFF5EB] font-bold border-2 rounded-2xl hover:bg-[#1e1e24] hover:border-[#FFF5EB] hover:text-[#FFF5EB]'>Log out</Link>
                    
                    </div>

                    </div>
                   {/* {!theme? <IconButton className="bg-white  text-black border-2 border-white" onClick={handleTheme} size="sm"><BsLightbulbFill/></IconButton>:
                    <IconButton className="bg-black text-white border-2 border-white" onClick={handleTheme} size="sm"><BsLightbulbOff/></IconButton>} */}

                    </div>
                  }
          </div>
        </div>
          );
                
};

export default Navbar;