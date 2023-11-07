import { useContext, useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import axios from 'axios';


const LogIn = () => {
    const navigate = useNavigate()

    const { signInUser, signInPop} =useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")
    const provider = new GoogleAuthProvider();


    const location = useLocation()
    
    // Email password sign in
    const handleSignIn = e =>{
        e.preventDefault()
        signInUser(email, password)
        .then(res=>{            
            const userEmail = {email}
            console.log(res.user.email)
                    swal("Signed In","Successfully","success");
                    // e.target.reset()
                    // navigate(location?.state? location.state :'/')

                    // passing Email to JWT
                    axios.post('http://localhost:5000/jwt', userEmail, {withCredentials:true})
                    .then(res=>{
                    console.log(res.data)
                })

            })
        .catch((error)=>{
            if(error.code === 'auth/user-not-found'){
                swal("ERROR","Invalid Email", "error")
            }else if(error.code  === 'auth/wrong-password'){
                swal("ERROR","Wrong Password", "error")
            }
        })
    }

    // Google Sign in 
    const handleGoogleSignIn = () =>{
        signInPop(provider)
        .then(()=>{
            swal("Welcome", "Google sign up successful", "success")
            navigate(location?.state? location.state :'/')

        }).catch(()=>{
        })
    }

    return (
        
        <div  >
            <Navbar></Navbar>
            <div  className="py-20 lg:p-20">
                <div className={` "text-black light-home max-w-xl bg-[#92140c] text-[#FFDDB6] rounded-3xl mx-auto my-20 py-10 px-5 lg:p-20 border-2 border-black"}`}>
                    <div className="text-center bg-[#92140c] text-[#FFDDB6]">
                    <h1 className="text-3xl mb-10 lg:text-5xl font-bold ">Sign in </h1>
                    </div>
                    <div className={" p-10 rounded-xl bg-[#FFDDB6]"}>
                    <form onSubmit={handleSignIn} className={"text-[#92140c] text-base lg:text-lg bg-[#FFDDB6]"}>
                        <div className="form-control">
                        <label className="label">
                            <span className={" "}>Email</span>
                        </label>
                        <input onChange={e=> setEmail(e.target.value)} type="email"  placeholder="email" className="input input-bordered border-[#0d3454] text-[#0d3454]" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className={""}>Password</span>
                        </label>
                        <input onChange={e=> setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered border-[#0d3454]" required />
                        <div>
                        </div>

                        <label className="label">
                            <a href="#" className= {"  link link-hover"}>Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-4">
                        <button className="btn  bg-white text-black font-bold border-black hover:shadow-white hover:bg-red-700 hover:text-white   ">Login</button>
                        </div>
                            

                            <div className="space-y-5 mt-5">
                            <p className="text-center ">Do not have an account?? <Link to="/register" className="text-blue-500 hover:underline">Register Here</Link></p>
                            <div className="flex items-center gap-4"><hr className="w-full h-2 " /><p>OR</p><hr className="w-full" /></div>
                            </div>
                    </form>
                    <div className="flex justify-center items-center">
                            <button onClick={handleGoogleSignIn} className="btn  sm:btn-sm md:btn-md lg:btn-lg my-4 hover:bg-red-700 hover:text-white"><FcGoogle/> Sign In With Google</button>
                            </div>
                    </div>
                </div>
                </div>
                <Footer></Footer>
            </div>

    );
};

export default LogIn;