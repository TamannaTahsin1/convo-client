import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext (null)

//! google provide
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ( {children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //! google login
    const googleLogin = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    //! create user with email and password
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    //! login user with email and password 
    const logIn= (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //! logOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    //! keep login user
    useEffect(() =>{
        const unsubscribe= onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)  
            setLoading(false)          
        });
        return() =>{
            return unsubscribe();
         }
    })

    //! value
    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;