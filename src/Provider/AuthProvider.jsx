import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext ()

//! google provide
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ( {children}) => {

    // ! google login
    const googleLogin = () =>{
       return signInWithPopup(auth, googleProvider)
    }
    //! value
    const authInfo = {
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;