import { useEffect } from "react"
import { Navigate } from "react-router-dom";
import { useAuth } from "../storage/Auth.jsx";

const Logout = () => {
    const { LogoutUser } = useAuth();

    useEffect(() => {
        LogoutUser();
    }, [LogoutUser]);

    return <Navigate to='/login' />
}

export default Logout
