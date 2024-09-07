import React, { useEffect, useState } from 'react'
import HamMenu from "./HamMenu"
import NavShadow from "./NavShadow"
import { useAuth } from '../storage/Auth'

const Message = () => {

  const { night, token } = useAuth();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const chatList = async () => {
      try {
        const response = await fetch("https://zylonet-server.onrender.com/api/v1/chatlist", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        const res_data = await response.json();
        console.log(res_data);
        setChats(res_data);
      } catch (error) {
        console.log("Faild to fetch chats!!");
      }
    }
    chatList();
  }, []);

  return (
    <div className={`md:ml-[15rem] md:pl-[3rem] h-screen ${!night ? "bg-[#2a2834] text-[#bababa]" : "bg-white"}`}>
      <NavShadow />
      <HamMenu />
      <ul role="list" className="divide-y divide-gray-100">
        {chats.map((item, key) => (<li key={item._id} className="flex justify-between gap-x-6 py-5 px-5 border-b ">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{item.user.fullName}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.user.username}</p>
            </div>
          </div>
        </li>))}
      </ul>
    </div>
  )
}

export default Message
