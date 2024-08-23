import React, { useEffect, useState } from 'react';
import NavShadow from './NavShadow';
import HamMenu from './HamMenu';
import heart from "../assets/heart.png";
import { useParams, useLocation } from 'react-router-dom';
import timeAgo from "../utils/TimeFormatter";
import addFriend from "../assets/add-friend.png"

const OtherProfile = () => {

    const location = useLocation();
    const { id } = useParams();
    const { fullName, username, profile, aboutme, likes, followers } = location.state;
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/post/readpost/${id}`, {
                method: "GET",
            });
            const res_data = await response.json();
            setPosts(res_data);
        } catch (error) {
            console.log("Failed to get notes!!")
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

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
                    <li className="flex flex-col items-center justify-between">
                        <button className='text-sm flex flex-col items-center justify-around'>
                            <img className='md:w-5 w-4' src={addFriend} alt="" />
                            <span>Add friend</span>
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
                    <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
                        {posts.length > 0 ? posts.map((item) => (<div
                            key={item._id}
                            className="border-r rounded-lg border-b border-l border-zinc-300 lg:border-t bg-white break-inside-avoid mb-8 relative flex flex-col justify-between leading-normal">
                            <img src={item.image} className="w-full mb-3 rounded-t-lg cursor-pointer" />
                            <div className="p-4 pt-2">
                                <div>
                                    <a href="#" className="text-gray-700 font-bold text-lg mb-2 hover:text-[#00B855] inline-block">{item.title}</a>
                                    <p className="text-gray-700 text-sm">{item.caption}</p>
                                </div>
                                <div className="flex items-center w-full text-xs justify-between text-gray-500 py-5">
                                    <div className="flex items-center space-x-2">
                                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                                            <svg className="w-5 h-5 fill-current hover:fill-[#ff2f2f]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                            <span>{item.likes} Likes</span>
                                        </button>
                                    </div>
                                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                                        <svg width="22px" height="22px" viewBox="0 0 24 24" className="w-5 h-5 fill-current hover:fill-[#00B855]" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                                            </g>
                                        </svg>
                                        <span>{item.comments ? item.comments.length : 0} Comment</span>
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm">
                                        <p className="text-gray-600">{timeAgo(item.createdAt)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)) : (<div>No posts!!</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherProfile
