import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../storage/Auth';
import io from "socket.io-client";
import sentSound from "../../public/sounds/pop.mp3";

const socket = io.connect("http://localhost:8080");

const ChatUser = () => {
    const location = useLocation();
    const { id } = useParams();
    const { fullName, profile } = location.state;
    const { user } = useAuth();

    // Current input message
    const [message, setMessage] = useState("");

    // List of chat messages
    const [chat, setChat] = useState([]);

    const roomName = [user._id, id].sort().join('_');

    useEffect(() => {
        // Handler function for incoming messages
        const handleReceiveMessage = ({ senderId, message }) => {
            setChat((prevChat) => [...prevChat, { message, senderId }]);
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

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = { message, senderId: user._id };

            // Send message to the server
            socket.emit("private_message", {
                senderId: user._id,
                roomName: roomName,
                message: message,
            });

            // Update the chat with the new message
            setChat((prevChat) => [...prevChat]);

            // Clear the input field
            setMessage("");
            // Play sound
            const audio = new Audio(sentSound);
            audio.play();
        }
    };

    return (
        <div className='md:ml-[15rem] md:pl-[3rem] transition-all duration-500 ease-in-out'>
            <div className="w-full md:py-14">
                <h1 className='md:text-5xl pl-3 text-[1.8rem] leading-8 md:leading-none font-extrabold text-gray-700'>
                    Chat with {fullName}
                </h1>
            </div>
            <div className="h-[70vh] w-full pr-40 flex flex-col">
                <div className="bg-[#f3f4f6] flex-1 overflow-y-scroll flex flex-col-reverse">
                    <div className="px-4 py-2">
                        {chat.map((msg, index) => (
                            <div key={index} className={`flex ${msg.senderId === user._id ? "justify-end" : "justify-start"} mb-2 items-start`}>
                                <div className={`flex items-center ${msg.senderId === user._id ? "flex-row-reverse" : ""}`}>
                                    <img
                                        src={msg.senderId === user._id ? user.profile : profile}
                                        alt="User Avatar"
                                        className={`w-8 h-8 rounded-full mr-2 ${msg.senderId === user._id ? "ml-2" : "mr-2"}`}
                                    />
                                    <div className={`bg-${msg.senderId === user._id ? "[#00b855]" : "white"} ${msg.senderId === user._id ? "text-white" : "text-black"} rounded-lg p-2 shadow max-w-sm`}>
                                        {msg.message}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-2">
                    <div className="flex items-center">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full border rounded-full py-2 px-4 mr-2"
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
