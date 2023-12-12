import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase.config'
import axios from 'axios';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [loading, setLoading] =useState(true)
    const [user, setUser] =useState(null)


    const createUser = ( email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInPop = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            const userEmail = currentUser?.email || user?.email 
            const loggedUser = {email: userEmail}
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                axios.post('https://assignment-server-sand.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then()
            }
            else{
                // console.log('logged out')
                axios.post('https://assignment-server-sand.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }


        })
        return()=>{
          unSubscribe()  
        }
    },[])


    const authInfo = { user,loading, createUser, signInUser,signInPop, logOut }

return(
<AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
)
}

export default AuthProvider;