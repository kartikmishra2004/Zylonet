import React, { useEffect, useState } from 'react';
import NavShadow from './NavShadow';
import HamMenu from './HamMenu';
import heart from "../assets/heart.png";
import { useParams, useLocation, Link } from 'react-router-dom';
import timeAgo from "../utils/TimeFormatter";
import addFriend from "../assets/add-friend.png";
import unfollow from "../assets/unfollow.png";
import { useAuth } from '../storage/Auth';
import { useNavigate } from 'react-router-dom';
import chatIcon from "../assets/chat.png"

const OtherProfile = () => {

    const { handleFollow, handleUnfollow, user, isLoggedIn, night } = useAuth();
    const location = useLocation();
    const { id } = useParams();
    const { fullName, username, profile, aboutme, following, followers } = location.state;
    const [posts, setPosts] = useState([]);
    const [followersCount, setFollowersCount] = useState([]);
    const [followingCount, setFollowingCount] = useState([]);
    const [isFollowed, setIsFollowed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (followers.some(id => id === user._id)) {
            setIsFollowed(true);
        } else {
            setIsFollowed(false);
        }
    }, []);

    // Calling API for fetching posts of clicked user
    const fetchPosts = async () => {
        try {
            const response = await fetch(`https://zylonet-server.onrender.com/api/v1/post/readpost/${id}`, {
                method: "GET",
            });
            const res_data = await response.json();
            setPosts(res_data);
        } catch (error) {
            console.log("Failed to get posts!!")
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [id]);

    useEffect(() => {
        setFollowersCount(followers ? followers.length : 0);
        setFollowingCount(following ? following.length : 0);
    }, [])

    const handleFollowUser = async () => {
        if (isLoggedIn) {
            await handleFollow({ id, setFollowersCount, setFollowingCount });
            setIsFollowed(true);
        } else {
            navigate('/login')
        }
    }

    const handleUnfollowUser = async () => {
        await handleUnfollow({ id, setFollowersCount, setFollowingCount });
        setIsFollowed(false);
    }

    return (
        <div className='md:ml-[15rem] transition-all duration-500 ease-in-out'>
            <NavShadow />
            <div
                className={`mx-auto w-full ${!night ? "bg-[#2a2834]" : "bg-white"} shadow-xl text-gray-900`}>
                <div className="rounded-t-lg h-32">
                    <HamMenu />
                </div>
                <div className="mx-auto flex justify-center items-center w-32 h-32 relative -mt-16 border-2 border-[#dbdbdb] rounded-full overflow-hidden">
                    <img className="object-cover object-center h-32" src={profile} />
                </div>
                <div className="text-center mt-2">
                    <h2 className={`font-semibold ${!night ? "text-[#bababa]" : ""}`}>{fullName}</h2>
                    <p className={`${!night ? "text-[#999999]" : "text-gray-500"}`}>{username}</p>
                </div>
                <ul className={`py-4 mt-5 ${!night ? "text-[#bababa]" : "text-gray-700"} flex items-center justify-evenly`}>
                    <li className="flex flex-col items-center justify-around">
                        <button className='text-sm flex flex-col items-center justify-around'>
                            <img className='md:w-6 w-5' src={heart} alt="" />
                            <div>Following: {followingCount}</div>
                        </button>
                    </li>
                    <li className="flex flex-col items-center justify-between">
                        <button className='text-sm flex flex-col items-center justify-around'>
                            <svg className="md:w-5 w-4 fill-current text-[#00B855]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                            </svg>
                            <span>Followers: {followersCount}</span>
                        </button>
                    </li>
                    {!isFollowed ? (<li className="flex flex-col items-center justify-between">
                        <button onClick={handleFollowUser} className='text-sm flex flex-col items-center justify-around'>
                            <img className='md:w-5 w-4' src={addFriend} alt="" />
                            <span>Follow</span>
                        </button>
                    </li>) : (<li className="flex flex-col items-center justify-between">
                        <button onClick={handleUnfollowUser} className='text-sm flex flex-col items-center justify-around'>
                            <img className='md:w-5 w-4' src={unfollow} alt="" />
                            <span>Unfollow</span>
                        </button>
                    </li>)}
                    <li className="flex flex-col items-center justify-between">
                        <Link to={`/messageuser/${id}`} state={{ fullName: fullName, profile: profile }} className='text-sm flex flex-col items-center justify-around'>
                            <img className='md:w-5 w-4' src={chatIcon} alt="" />
                            <span>Message</span>
                        </Link>
                    </li>
                </ul>
                <div className="md:px-10 w-full px-6 py-5 mt-2">
                    <div className="flex justify-center items-center w-full">
                        <div className="flex flex-col justify-center items-center md:w-[50vw] w-[90vw]">
                            <h2 className={`font-semibold ${!night ? "text-[#bababa]" : ""} text-xl w-full`}>About me</h2>
                            <pre className={` w-full ${!night ? "text-[#999999]" : "text-gray-500"} whitespace-pre-wrap mt-1 text-left font-sans`}>{aboutme}</pre>
                        </div>
                    </div>
                    <div className={`line md:my-[3rem] my-[1.5rem] md:w-[70vw] w-[85vw] mx-auto border-t-2 ${!night ? "border-[#bababa]" : "border-gray-200"}`}></div>
                    <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
                        {posts.length > 0 ? posts.map((item) => (<div
                            key={item._id}
                            className={`border-r rounded-lg border-b border-l border-zinc-300 lg:border-t ${!night ? "bg-[#3b3847]" : "bg-white"} break-inside-avoid mb-8 relative flex flex-col justify-between leading-normal`}>
                            <img src={item.image} className="w-full mb-3 rounded-t-lg cursor-pointer" />
                            <div className="p-4 pt-2">
                                <div>
                                    <a href="#" className={`font-bold text-lg mb-2 hover:text-[#00B855] inline-block ${!night ? "text-[#bababa]" : "text-gray-700"}`}>{item.title}</a>
                                    <p className={`text-sm ${!night ? "text-[#bababa]" : "text-gray-700"}`}>{item.caption}</p>
                                </div>
                                <div className="flex items-center w-full text-xs justify-between text-gray-500 py-5">
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm">
                                        <p className={`${!night ? "text-[#bababa]" : "text-gray-600 "}`}>{timeAgo(item.createdAt)}</p>
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