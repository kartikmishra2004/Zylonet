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
            const response = await fetch("https://zylonet-server.vercel.app/api/v1/auth/userauth", {
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
    }, [token, user]);


    // Calling api for updating user
    const updateProfile = async ({ updatedUser, id }) => {
        try {
            const response = await fetch(`https://zylonet-server.vercel.app/api/v1/auth/update/${id}`, {
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

    // Calling API for deleting user's post
    const handleDeletePost = async (id) => {
        const response = await fetch(`https://zylonet-server.vercel.app/api/v1/post/deletepost/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const res_data = await response.json();
        if (response.ok) {
            toast.success("Post deleted successfully!!");
        } else {
            toast.error("Failed to delete post!!")
        }
    }

    const [ranPosts, setRanPosts] = useState([]);
    // Calling API for fetching random posts
    const randomPosts = async () => {
        try {
            const response = await fetch("https://zylonet-server.vercel.app/api/v1/randomposts/", {
                method: "GET",
            });
            const res_data = await response.json();
            setRanPosts(res_data);
        } catch (error) {
            console.log("Failed to get posts!!")
        }
    }
    useEffect(() => {
        randomPosts()
    }, []);

    // Calling API to follow
    const handleFollow = async ({ id, setFollowersCount, setFollowingCount }) => {
        try {
            const body_data = {
                userId: user._id,
                targetUserId: id,
            }
            const response = await fetch("https://zylonet-server.vercel.app/api/v1/follow", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body_data),
            });
            const res_data = await response.json();
            if (response.ok) {
                setFollowersCount(res_data.updatedFollowers.length);
                setFollowingCount(res_data.updatedFollowing.length);
                toast.success("Followed successfully!!");
            } else {
                toast.error("Failed to follow!!");
            }
        } catch (error) {
            toast.error("Failed to follow!!");
        }
    }

    // Calling API to unfollow
    const handleUnfollow = async ({ id, setFollowersCount, setFollowingCount }) => {
        try {
            const body_data = {
                userId: user._id,
                targetUserId: id,
            }
            const response = await fetch("https://zylonet-server.vercel.app/api/v1/unfollow", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body_data),
            });
            const res_data = await response.json();
            if (response.ok) {
                setFollowersCount(res_data.updatedFollowers.length);
                setFollowingCount(res_data.updatedFollowing.length);
                toast.success("Unfollowed successfully!!");
            }
        } catch (error) {
            toast.error("Failed to unfollow!!");
        }
    }

    // Initialize night mode state from localStorage
    const [night, setNight] = useState(() => {
        const savedNightMode = localStorage.getItem('night');
        return savedNightMode ? JSON.parse(savedNightMode) : true; // Default to true (light mode off)
    });

    // Update localStorage whenever night mode changes
    useEffect(() => {
        localStorage.setItem('night', JSON.stringify(night));
    }, [night]);

    return <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, token, updateProfile, handleDeletePost, ranPosts, handleFollow, handleUnfollow, night, setNight }}>
        {children}
    </AuthContext.Provider>

}

// Consumer
export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);
    return AuthContextValue;
}