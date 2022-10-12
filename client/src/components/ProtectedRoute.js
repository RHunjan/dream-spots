import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
    const navigate  = useNavigate()
    useEffect(() => {
      if (!isAuth) {
        navigate("/")
      }
    })
    
  
    return children;
  };
export default ProtectedRoute;
  