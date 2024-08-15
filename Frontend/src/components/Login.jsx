import React from 'react'
import dog from "../assets/dog.png"
import { Link } from "react-router-dom";
import loginIcon from "../assets/loginIcon.png"

const Login = () => {
    return (
        <div>
            <div class="min-h-screen bg-gray-50 text-gray-900 flex justify-center">
                <div class="max-w-screen-xl m-0 sm:ml-[18rem] sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex-col gap-6 flex justify-center items-center">
                        <div>
                            <a class="flex items-center text-[#00B855] w-full px-3 mt-3" href="#">
                                <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                </svg>
                                <span class="ml-2 text-gray-800 text-2xl font-bold">Zylonet</span>
                            </a>
                        </div>
                        <div class="flex flex-col items-center">
                            <h1 class="text-2xl xl:text-lg text-gray-500 font-normal">
                                Wellcome back! Login to continue.
                            </h1>
                            <div class="w-full flex-1 mt-8">


                                <div class="mx-auto max-w-xs">
                                    <input
                                        class="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text" placeholder="Username" />
                                    <input
                                        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" />
                                    <button
                                        class="mt-5 tracking-wide font-semibold bg-[#00B855] text-gray-100 w-full py-4 rounded-lg hover:bg-[#22a45e] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <img className='w-[25px] invert' src={loginIcon} alt="" />
                                        <span class="ml-3">
                                            Login
                                        </span>
                                    </button>
                                    <p class="mt-6 text-sm text-gray-600 text-center">
                                        Don't have an account?&nbsp;
                                        <Link to='/signup' class="border-b border-gray-500 border-dotted">
                                            Signup here
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 bg-[#e1ffef] text-center hidden lg:flex">
                        <div class="w-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${dog})`, mixBlendMode: "darken" }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
