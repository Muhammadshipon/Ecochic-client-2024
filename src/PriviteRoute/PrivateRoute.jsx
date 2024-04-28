import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const location = useLocation();
 
  if(user){
    return children
  }
  if(loading){
    return <div className="flex items-center justify-center min-h-screen"><span className="loading loading-bars  text-white loading-xs"></span>
    <span className="loading loading-bars loading-sm text-white"></span>
    <span className="loading loading-bars  text-white loading-md"></span>
    <span className="loading loading-bars loading-lg  text-white"></span></div>
  }
  return <Navigate to={"/log-in"} state={location.pathname}></Navigate>
};

export default PrivateRoute;