import { useAppSelector } from "../app/hooks";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute: React.FC<{ children: JSX.Element }>  = ({children}) => {
    const auth = useAppSelector((state) => state.auth);
    const location = useLocation();

    if(auth.accessToken && auth.user.email) return <Navigate to={location.state?.from?.pathname ?? '/'} />;
    
    return children;
} 


export default PublicRoute;