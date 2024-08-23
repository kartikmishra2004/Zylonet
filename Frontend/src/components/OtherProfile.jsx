import React from 'react';
import NavShadow from './NavShadow';
import HamMenu from './HamMenu';
import heart from "../assets/heart.png";
import { useParams, useLocation } from 'react-router-dom';

const OtherProfile = () => {

    const location = useLocation();
    const { id } = useParams();
    const { fullName, username, profile, aboutme, likes, followers } = location.state;

    return (
        <div className='md:ml-[15rem] transition-all duration-500 ease-in-out'>
            <NavShadow />
            <div
                className="mx-auto w-full bg-white shadow-xl text-gray-900">
                <div className="rounded-t-lg h-32">
                    <HamMenu />
                </div>
                <div className="mx-auto flex justify-center items-center w-32 h-32 relative -mt-16 border-2 border-[#dbdbdb] rounded-full overflow-hidden">
                    <img className="object-cover object-center h-32" src={profile} />
                </div>
                <div className="text-center mt-2">
                    <h2 className="font-semibold">{fullName}</h2>
                    <p className="text-gray-500">{username}</p>
                </div>
                <ul className="py-4 mt-5 text-gray-700 flex items-center justify-evenly">
                    <li className="flex flex-col items-center justify-around">
                        <button className='text-sm flex flex-col items-center justify-around'>
                            <img className='md:w-5 w-4' src={heart} alt="" />
                            <div>Hearts: {likes}</div>
                        </button>
                    </li>
                    <li className="flex flex-col items-center justify-between">
                        <button className='text-sm flex flex-col items-center justify-around'>
                            <svg className="md:w-5 w-4 fill-current text-[#00B855]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                            </svg>
                            <span>Followers: {followers}</span>
                        </button>
                    </li>
                </ul>
                <div className="md:px-10 w-full px-6 py-5 mt-2">
                    <div className="flex justify-center items-center w-full">
                        <div className="flex flex-col justify-center items-center md:w-[50vw] w-[90vw]">
                            <h2 className="font-semibold text-xl w-full">About me</h2>
                            <pre className="text-gray-500 w-full whitespace-pre-wrap mt-1 text-left font-sans">{aboutme}</pre>
                        </div>
                    </div>
                    <div className="line md:my-[3rem] my-[1.5rem] md:w-[70vw] w-[85vw] mx-auto border-t-2 border-gray-200"></div>
                    <div className="p-4 columns-1 md:columns-2 xl:columns-3 gap-7">
                        Posts
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherProfile
