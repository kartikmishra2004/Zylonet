import React, { useState } from 'react'
import ReactMarkdown from "react-markdown"
import loading from "../assets/loading.gif"

const ChatWithAI = () => {

    const [showAI, setShowAI] = useState("hidden");

    const handleShowAI = () => {
        if (showAI === "hidden") {
            setShowAI("block");
        } else {
            setShowAI("hidden")
        }
    }

    const [chat, setChat] = useState({
        prompt: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const [resData, setResData] = useState([]);

    const handleChange = (e) => {
        setChat({
            prompt: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear the input after submission
        setChat({ prompt: "" });

        // Display user input in the chat window
        setResData(prevRes => [...prevRes, { type: 'user', content: chat.prompt }]);
        setIsLoading(true);
        try {
            const response = await fetch("https://verbi-genie-server.vercel.app/api/v1/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(chat),
            });
            const data = await response.json();
            setResData(prevRes => [...prevRes, { type: 'response', content: data }]);
            setIsLoading(false);
        } catch (error) {
            console.log("Failed to get response!!", error);
        }
    }

    return (
        <div>
            <div className={`${showAI} md:w-[30vw] mt-20 bg-white dark:bg-zinc-800 shadow-2xl border border-zinc-200 rounded-lg overflow-hidden fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 z-50`}>
                <div className="flex flex-col h-[400px]">
                    <div className="px-4 py-3 border-b dark:border-zinc-700">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                                Ask ZyloAI
                            </h2>
                            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                Online
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
                        id="chatDisplay">
                        <div className="chat-message self-end bg-blue-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
                            Hello! How can I assist you today?
                        </div>

                        {resData.map((resData, index) => (
                            <div key={index} className={`chat-message self-${resData.type === 'user' ? 'start bg-gray-300 text-black w-max' : 'end bg-blue-500 text-white'} max-w-xs rounded-lg px-3 py-1.5 text-sm`}>
                                <ReactMarkdown>{resData.content}</ReactMarkdown>
                            </div>
                        ))}

                    </div>
                    <div className="px-3 py-2 border-t dark:border-zinc-700">
                        <form onSubmit={handleSubmit}>
                            <div className="flex gap-2">
                                <input
                                    name="prompt"
                                    value={chat.prompt}
                                    onChange={handleChange}
                                    placeholder="Type your message..."
                                    className="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
                                    id="chatInput"
                                    type="text" />
                                <button
                                    type="submit"
                                    className="bg-blue-500 flex justify-center items-center hover:bg-blue-700 text-white w-[5rem] h-[2.5rem] font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
                                    id="sendButton">
                                    {isLoading ? (<span><img className="w-[32px] brightness-200" src={loading} /></span>) : "Send"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div title='Ask ZyloAI' className='fixed z-50'>
                <button
                    onClick={handleShowAI}
                    class="fixed md:bottom-4 md:right-4 bottom-2 right-2 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border-2 rounded-full md:w-16 md:h-16 h-12 w-12 bg-[#00B855] hover:bg-[#22a45e] transition-all duration-300 ease-in-out m-0 cursor-pointer bg-none p-0 normal-case leading-5 border-white"
                    type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
                    <svg xmlns=" http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="text-white block align-middle">
                        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ChatWithAI
