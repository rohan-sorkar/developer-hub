import { useAppSelector } from "../app/hooks";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({children}) => {
    const auth = useAppSelector((state) => state.auth);
    const location = useLocation();

    if(auth.accessToken && auth.user.email) return children;
    
    return <Navigate to={'/login'} state={{from: location}}/>;
} 


export default PrivateRoute;