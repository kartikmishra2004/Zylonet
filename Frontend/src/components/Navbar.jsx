import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logoutIcon from "../assets/power-off.png";
import { useAuth } from "../storage/Auth";
import { useToggleNav } from './ToggleNav';
import closeIcon from "../assets/close.png";

const Navbar = () => {

    const { isLoggedIn, night } = useAuth();
    const { nav, handleToggleNav } = useToggleNav();

    return (
        <div className={`z-50 flex ${nav} md:left-0 transition-all jus duration-500 ease-in-out fixed flex-col items-center w-60 h-full overflow-hidden ${!night ? "bg-[#312e3d] text-white" : "bg-gray-100 text-gray-700"}`}>
            <div className='w-full flex'>
                <div onClick={handleToggleNav} className='w-full'>
                    <Link className="flex text-[#00B855] justify-between items-center w-full px-3 mt-3" to="/">
                        <div className='flex justify-center items-center'>
                            <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                            <span className={`ml-2 ${!night ? " text-[#dadada]" : "text-gray-800 "} text-sm font-bold`}>Zylonet</span>
                        </div>
                    </Link>
                </div>
                <div onClick={handleToggleNav} className="sm:hidden mt-4 mr-4 rounded-full closeNav text-black w-7 h-7 flex justify-center items-center opacity-45"><img className={`w-3 ${!night ? "invert": ''}`} src={closeIcon} alt="" />
                </div>
            </div>
            <div className="w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
                    <div onClick={handleToggleNav} className='w-full'>
                        <Link className={`flex items-center w-full h-12 px-3 mt-2 rounded ${!night ? "hover:bg-[#3b3847] text-[#dadada] " : "hover:bg-gray-300"}`} to="/">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Home</span>
                        </Link>
                    </div>
                    <div onClick={handleToggleNav} className='w-full'>
                        <Link className={`flex items-center w-full h-12 px-3 mt-2 rounded ${!night ? "hover:bg-[#3b3847] text-[#dadada] " : "hover:bg-gray-300"}`} to="/createpost">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Create post</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
                    <div onClick={handleToggleNav} className='w-full'>
                        <Link className={`flex items-center w-full h-12 px-3 mt-2 rounded ${!night ? "hover:bg-[#3b3847] text-[#dadada] " : "hover:bg-gray-300"}`} to="/settings">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Settings</span>
                        </Link>
                    </div>
                    <div onClick={handleToggleNav} className='w-full'>
                        <Link className={`relative flex items-center w-full h-12 px-3 mt-2 rounded ${!night ? "hover:bg-[#3b3847] text-[#dadada] " : "hover:bg-gray-300"}`} to="/message">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Messages</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`flex transition-all duration-500 ease-in-out mt-auto items-center pl-[4.5rem] w-full h-16 ${!night ? "bg-[#3b3847] text-[#dadada] " : "bg-gray-200 hover:bg-gray-300"}`} onClick={handleToggleNav}>
                <Link className="flex" to="/profile">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium">Profile</span>
                </Link>
            </div>
            <div onClick={handleToggleNav} className='w-full'>
                <Link to='/logout' className={`${isLoggedIn ? "flex" : "hidden"} items-center pl-[4.5rem] w-full h-16 ${!night ? "bg-[#3b3847] text-[#dadada] " : "bg-gray-200 hover:bg-gray-300"} transition-all duration-500 ease-in-out`}>
                    <img className='mt-[0.2rem]' src={logoutIcon} alt="" />
                    <span className="ml-2 text-[#FF3D3D] text-sm font-medium">Logout</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
