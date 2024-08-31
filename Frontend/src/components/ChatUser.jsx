import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../storage/Auth';
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080");

const ChatUser = () => {

    const location = useLocation();
    const { id } = useParams();
    const { fullName, profile } = location.state;
    const { user } = useAuth();

    const [message, setMessage] = useState("");
    const [recivedMessage, setRecivedMessage] = useState("");
    const roomName = [user._id, id].sort().join('_');
    const [senderId, setSenderId] = useState("");
    constt [chat, setChat] = useState([]);

    useEffect(() => {
        joinRoom(roomName)
    });

    useEffect(() => {
        socket.on("receive_message", ({ senderId, message }) => {
            setRecivedMessage(message);
            setSenderId(senderId);
        })
    }, [socket]);

    const joinRoom = () => {
        if (roomName.trim()) {
            socket.emit("join_room", roomName)
        }
    }

    const handleSendMessage = () => {
        if (message.trim()) {
            socket.emit("private_message", {
                senderId: user._id,
                roomName: roomName,
                message: message,
            });
        }
    }

    return (
        <div className='md:ml-[15rem] md:pl-[3rem] transition-all duration-500 ease-in-out'>
            <div className="w-full md:py-14">
                <h1 className='md:text-5xl pl-3 text-[1.8rem] leading-8 md:leading-none font-extrabold text-gray-700'>
                    Chat with {fullName}
                </h1>
            </div>
            <div className="h-[70vh] w-full pr-40 flex flex-col">
                <div className="bg-[#f3f4f6] flex-1 overflow-y-scroll">
                    <div className="px-4 py-2">
                        <div className="flex items-center mb-2">
                            <img className="w-8 h-8 rounded-full mr-2" src={profile} alt="User Avatar" />
                            <div className="font-medium">{fullName}</div>
                        </div>
                        <div className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
                            {senderId === user._id ? "" : recivedMessage}
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
                                {message}
                            </div>
                            <img className="w-8 h-8 rounded-full" src={user.profile} alt="User Avatar" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-2">
                    <div className="flex items-center">
                        <input onChange={(e) => setMessage(e.target.value)} className="w-full border rounded-full py-2 px-4 mr-2" type="text" placeholder="Type your message..." />
                        <button onClick={handleSendMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatUser
