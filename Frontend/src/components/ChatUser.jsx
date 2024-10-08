import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../storage/Auth';
import io from "socket.io-client";
import sentSound from "../../sounds/pop.mp3";
import receiveSound from "../../sounds/notification.wav";
import HamMenu from "./HamMenu"
import NavShadow from "./NavShadow"

const socket = io.connect("https://zylonet-server.onrender.com");

const ChatUser = () => {
    const location = useLocation();
    const { id } = useParams();
    const { fullName, profile } = location.state;
    const { user, night } = useAuth();

    // Current input message
    const [message, setMessage] = useState("");

    // List of chat messages
    const [chat, setChat] = useState([]);

    const roomName = [user._id, id].sort().join('_');


    useEffect(() => {
        // Handler function for incoming messages
        const handleReceiveMessage = ({ senderId, message }) => {
            setChat((prevChat) => [...prevChat, { message, senderId }]);

            if (senderId !== user._id) {
                const audio = new Audio(receiveSound);
                audio.play();
            }
        };

        // Join room
        socket.emit("join_room", roomName);

        // Listen for incoming messages
        socket.on("receive_message", handleReceiveMessage);

        // Cleanup function to remove the event listener
        return () => {
            socket.off("receive_message", handleReceiveMessage);
        };
    }, [roomName]);

    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const response = await fetch(`https://zylonet-server.onrender.com/api/v1/chat/${roomName}`, {
                    method: "GET",
                });
                const res_data = await response.json();
                setChat(res_data.messages);
            } catch (error) {
                console.error("Error fetching chat history:", error);
            }
        };
        fetchChatHistory();
    }, [roomName, chat]);

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = { content: message, sender_id: user._id };

            // Send message to the server
            socket.emit("private_message", {
                senderId: user._id,
                roomName: roomName,
                message: message,
            });

            // Update the chat with the new message and mark it as sent by the current user
            setChat((prevChat) => [...prevChat, newMessage]);

            // Clear the input field
            setMessage("");

            // Play sound
            const audio = new Audio(sentSound);
            audio.play();
        }
    };


    return (
        <div className={`${!night ? "bg-[#2a2834] text-[#bababa]" : ""} md:ml-[15rem] md:h-screen md:pl-[3rem] transition-all duration-500 ease-in-out`}>
            <NavShadow />
            <HamMenu />
            <div className="w-full md:py-14">
                <h1 className={`md:text-5xl pl-3 text-[1.8rem] leading-8 md:leading-none font-extrabold ${!night ? "text-[#bababa]" : "text-gray-700"}`}>
                    Chat with {fullName}
                </h1>
            </div>
            <div className="md:h-[70vh] h-[80vh] w-full md:pr-40 flex flex-col">
                <div className={`${!night ? "bg-[#312e3d]" : "bg-[#f3f4f6]"} flex-1 overflow-y-auto flex flex-col-reverse`}>
                    <div className="px-4 py-2">
                        {chat.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender_id === user._id ? "justify-end" : "justify-start"} mb-2 items-start`}>
                                <div className={`flex items-center ${msg.sender_id === user._id ? "flex-row-reverse" : ""}`}>
                                    <img
                                        src={msg.sender_id === user._id ? user.profile : profile}
                                        alt="User Avatar"
                                        className={`w-8 h-8 rounded-full ${msg.sender_id === user._id ? "ml-2" : "mr-2"}`}
                                    />
                                    <div className={`bg-${msg.sender_id === user._id ? "[#00b855]" : `${!night ? '[#bababa]' : 'white'}`} ${msg.sender_id === user._id ? "text-white" : "text-black"} rounded-lg p-2 shadow max-w-sm`}>
                                        {msg.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${!night ? "bg-[#312e3d]" : "bg-gray-100"} px-4 py-2`}>
                    <div className="flex items-center">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={` ${!night ? "bg-[#3b3847]" : ""} w-full border rounded-full py-2 px-4 mr-2`}
                            type="text"
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSendMessage} className="bg-[#00b855] transition-all duration-300 ease-in-out hover:bg-[#22a45e] text-white font-medium py-2 px-4 rounded-full">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatUser;
