import React, { useEffect, useState } from 'react'
import HamMenu from "./HamMenu"
import NavShadow from "./NavShadow"
import { useAuth } from '../storage/Auth'
import { Link } from "react-router-dom"

const Message = () => {

  const { night, token, user } = useAuth();
  const [chats, setChats] = useState([]);
  const [isloadingChats, setIsLoadingChats] = useState(false)

  useEffect(() => {
    const chatList = async () => {
      setIsLoadingChats(true);
      try {
        const response = await fetch("https://zylonet-server.onrender.com/api/v1/chatlist", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        const res_data = await response.json();
        setChats(res_data);
        if (response.ok) {
          setIsLoadingChats(false);
        }
      } catch (error) {
        console.log("Faild to fetch chats!!");
        setIsLoadingChats(false);
      }
    }
    chatList();
  }, []);

  const filterChats = chats.filter(item => item._id !== user._id)

  return (
    <div className={`md:ml-[15rem] md:pl-[1rem] h-screen ${!night ? "bg-[#2a2834] text-[#bababa]" : "bg-white"}`}>
      <NavShadow />
      <HamMenu />
      <ul role="list" className="divide-y divide-gray-100">
        {isloadingChats ? (<div className='flex w-full justify-center items-center h-[10rem] text-2xl text-gray-700'>Loading chats...</div>) : filterChats.map((item) => (<Link to={`/messageuser/${item._id}`} state={{ username: item.username, fullName: item.fullName, profile: item.profile, aboutme: item.aboutme, following: item.following, followers: item.followers }} key={item._id} className="flex justify-between gap-x-6 py-5 px-5 hover:bg-gray-100">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={item.profile} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{item.fullName}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.username}</p>
            </div>
          </div>
        </Link>))}
      </ul>
    </div>
  )
}

export default Message
