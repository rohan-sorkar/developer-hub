import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks"
import { AuthState } from "../types";
import { loggedIn } from "../features/auth/authSlice";

const useAuthCheck = () => {
    const [isAuth, setIsAuth] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const result: AuthState = JSON.parse(localStorage.getItem('auth') as string);
        if(result?.accessToken && result?.user?.email) {
            dispatch(loggedIn({
                accessToken: result?.accessToken,
                user: result?.user
            }));
        }
        setTimeout(() => {
            setIsAuth(true);
        }, 500);
    }, []);

    return isAuth;
}

export default useAuthCheck;