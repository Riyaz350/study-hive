import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        <span className="loading loading-ring loading-lg"></span>

    }
    else if(user){
        return children;
    }else{
        swal("Please", "Log In First", "error")

        return<Navigate state={location.pathname} to='/logIn'></Navigate>
        
        }
    
};

export default PrivateRoutes;