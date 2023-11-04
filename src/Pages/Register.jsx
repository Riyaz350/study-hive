import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext,  useState } from "react";
import swal from 'sweetalert';
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";
import auth from "../../firebase.config";


const Register = () => {



    const [name, setName] =useState("")
    const [photo, setPhoto] =useState('')
    const [email, setEmail] =useState("")
    const [password, setPassword] = useState("")
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation()



    const { createUser, signInPop, logOut} = useContext(AuthContext)
    

 



    // email register handler
    const handleEmailRegister = e=>{
        e.preventDefault()
        if(password.length<6){
            swal("Hold On","Password must be at lease 6 characters","error");

        }else if(!/[A-Z]/.test(password)){
            swal("Hold On","Password must have a capital letter","error");

        }
        else if(!/[^a-zA-Z0-9]/.test(password)){
            swal("Hold On","Password must have a special character","error");

        }else{
            createUser( email, password)
        .then(()=>{
            e.target.reset()
            swal("Welcome","Please Sign In again","success");
            
            logOut()
            .then(result=>console.log(result))
            .catch(error => console.log(error.message))
            updateProfile(auth.currentUser, { displayName: name, photoURL:photo }).catch(
                (err) => console.log(err))
                navigate('/login')
            
            
        })
        .catch(e =>{
            if(e.message == 'Firebase: Error (auth/email-already-in-use).'){
                swal('Hold On', 'This Email is already in use', 'error')
            } 
        })
         
        }
    }

    // Google register handler

    const handleGoogleSignIn = () =>{
        signInPop(provider)
        .then(()=>{
            swal("Welcome", "Google sign up successful", "success")
            navigate(location?.state? location.state :'/')
        })
        .catch()
    }

    return (
        <div className="">
            
    
            <div data-aos='fade-up' className={"bg-white py-20 lg:p-20"}>
                <div className={" max-w-xl rounded-3xl mx-auto my-20 py-10 px-5 lg:p-20 bg-white border-2 border-black"}>
                    <div className="text-center ">
                    <h1 className={"text-3xl lg:text-5xl font-bold text-black mb-8"}>Sign Up For Free</h1>
                    </div>
                    <div className="bg-white  p-10 rounded-xl">
                    <form onSubmit={handleEmailRegister} className=" ">



                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#0d3454]">Full Name</span>
                        </label>
                        <input onChange={e=>setName(e.target.value)} type="text"  placeholder="Full Name" className="input input-bordered border-[#0d3454] text-[#0d3454]" required />
                        </div>


                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#0d3454]">Photo Url</span>
                        </label>
                        <input onChange={e=>setPhoto(e.target.value)} type="text"  placeholder="Photo Url" className="input input-bordered border-[#0d3454] text-[#0d3454]" required />
                        </div>



                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#0d3454]">Email</span>
                        </label>
                        <input onChange={e=> setEmail(e.target.value)} type="email"  placeholder="Email" className="input input-bordered border-[#0d3454] text-[#0d3454]" required />
                        </div>



                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#0d3454] ">Password</span>
                        </label>
                        <input onChange={e=> setPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered border-[#0d3454]" required />
                        <div>
                        </div>

                        <label className="label">
                            <a href="#" className="label-text-alt text-base text-[#0d3454] link link-hover">Forgot password?</a>
                        </label>
                        </div>



                        <div className="form-control mt-4">
                        <input type="submit"  className="btn  bg-white text-black border-black  hover:bg-red-700 hover:text-white" value="Sign Up"/>
                        </div>
                            <div className="space-y-5">
                            <p className="text-center mt-5">Already have an account?? <Link to="/login" className="text-blue-500 hover:underline">Log In Here</Link></p>
                            <div className="flex items-center gap-4"><hr className="w-full h-2 t" /><p>OR</p><hr className="w-full" /></div>
                            </div>
                    </form>
                    <div className="flex justify-center items-center">
                            <button onClick={handleGoogleSignIn} className="btn  sm:btn-sm md:btn-md lg:btn-lg my-4 hover:bg-red-700 hover:text-white"><FcGoogle/> Sign Up With Google</button>
                            </div>
                    </div>
                </div>
                </div>

            </div>
    );
};

export default Register;