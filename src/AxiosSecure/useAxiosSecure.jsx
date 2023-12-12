import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const axiosSecureUrl = axios.create({
    baseURL: 'https://assignment-server-sand.vercel.app',
    withCredentials:true 
})
const useAxiosSecure = () => {
    const {logOut} =useContext(AuthContext)
    useEffect(()=>{
        axiosSecureUrl.interceptors.response.use(res =>{
            return res;
        },error=>{
            console.log('error interceptor', error.response)
            if(error.response.status === 401 || error.response.status === 403){
                logOut()
                .then()
                .catch()
            }
        })
    },[logOut])
    return axiosSecureUrl
};

export default useAxiosSecure;