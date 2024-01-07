import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()
    console.log(location.pathname)

    //! for loading
    if(loading){
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-infinity loading-lg"></span></div>
    }
    //! to navigate in login page
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;