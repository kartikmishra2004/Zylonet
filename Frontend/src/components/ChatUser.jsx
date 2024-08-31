import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../storage/Auth';

const ChatUser = () => {

    const location = useLocation();
    const { id } = useParams();
    const { fullName, profile } = location.state;
    const { user } = useAuth();

    return (
        <div className='md:ml-[15rem] md:pl-[3rem] transition-all duration-500 ease-in-out'>
            <div className="w-full md:py-14">
                <h1 className='md:text-5xl pl-3 text-[1.8rem] leading-8 md:leading-none font-extrabold text-gray-700'>
                    Chat with {fullName}
                </h1>
            </div>
            <div class="h-[70vh] w-full pr-40 flex flex-col">
                <div class="bg-[#f3f4f6] flex-1 overflow-y-scroll">
                    <div class="px-4 py-2">
                        <div class="flex items-center mb-2">
                            <img class="w-8 h-8 rounded-full mr-2" src={profile} alt="User Avatar"/>
                                <div class="font-medium">{fullName}</div>
                        </div>
                        <div class="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
                            Hi, how can I help you?
                        </div>
                        <div class="flex items-center justify-end">
                            <div class="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
                                Sure, I can help with that.
                            </div>
                            <img class="w-8 h-8 rounded-full" src={user.profile} alt="User Avatar"/>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 px-4 py-2">
                    <div class="flex items-center">
                        <input class="w-full border rounded-full py-2 px-4 mr-2" type="text" placeholder="Type your message..."/>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                                Send
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatUser
