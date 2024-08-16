import React, { useState } from 'react'
import dog from "../assets/dog.png"
import { Link, useNavigate } from "react-router-dom";
import loginIcon from "../assets/loginIcon.png"
import { useAuth } from "../storage/Auth.jsx"

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const { storeTokenInLS } = useAuth();

    const handleChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const res_data = await response.json();
            if (response.ok) {
                storeTokenInLS(res_data.token);
                setUser({
                    username: "",
                    password: "",
                });
                navigate("/");
            } else {
                alert("Failed to login!!");
            }
        } catch (error) {
            console.log("Failed to login!!");
        }
    }

    return (
        <div>
            <div className="min-h-screen bg-gray-50 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:ml-[18rem] sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex-col gap-6 flex justify-center items-center">
                        <div>
                            <a className="flex items-center text-[#00B855] w-full px-3 mt-3" href="#">
                                <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                </svg>
                                <span className="ml-2 text-gray-800 text-2xl font-bold">Zylonet</span>
                            </a>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl xl:text-lg text-gray-500 font-normal">
                                Wellcome back! Login to continue.
                            </h1>
                            <div className="w-full flex-1 mt-8">


                                <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text" placeholder="Username" name='username' onChange={handleChangeInput} />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" name='password' onChange={handleChangeInput} />
                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-[#00B855] text-gray-100 w-full py-4 rounded-lg hover:bg-[#22a45e] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <img className='w-[25px] invert' src={loginIcon} alt="" />
                                        <span className="ml-3">
                                            Login
                                        </span>
                                    </button>
                                    <p className="mt-6 text-sm text-gray-600 text-center">
                                        Don't have an account?&nbsp;
                                        <Link to='/signup' className="border-b border-gray-500 border-dotted">
                                            Signup here
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-[#e1ffef] text-center hidden lg:flex">
                        <div className="w-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${dog})`, mixBlendMode: "darken" }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
