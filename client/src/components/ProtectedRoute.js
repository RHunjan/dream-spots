import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
    const navigate  = useNavigate()
    if (!isAuth) {
      navigate("/")
    }
  
    return children;
  };
export default ProtectedRoute;
  