import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// Context
export const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [user, setUser] = useState({});

    // Storing JWT in local storage
    const storeTokenInLS = (serverToken) => {
        localStorage.setItem('token', serverToken);
        setToken(serverToken);
    }

    let isLoggedIn = !!token;

    // Logout logic
    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem('token');
        setUser({});
    }

    // JWT Authentication - to get currently logged in user data
    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/userauth", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            } else {
                LogoutUser();
            }
        } catch (error) {
            console.log("Error fetching user data!!");
        }
    }

    useEffect(() => {
        if (token) {
            userAuthentication();
        }
    }, [token]);


    // Calling api for updating user
    const updateProfile = async ({ updatedUser, id }) => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/auth/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedUser),
            });
            const updateRes_data = await response.json();
            if (response.ok) {
                toast.success("Profile updated successfully!!");
                setUser({
                    ...user,
                    fullName: updateRes_data.user.fullName,
                    aboutme: updateRes_data.user.aboutme,
                });
            } else {
                toast.error(updateRes_data.extraDetails ? updateRes_data.extraDetails : updateRes_data.message);
            }
        } catch (error) {
            console.log("Failed to update user", error);
        }
    }

    return <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, token, updateProfile }}>
        {children}
    </AuthContext.Provider>

}

// Consumer
export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);
    return AuthContextValue;
}