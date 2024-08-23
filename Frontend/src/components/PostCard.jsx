import React, { useState } from 'react';
import timeAgo from "../utils/TimeFormatter";
import bin from "../assets/bin.png";
import DeletePost from './DeletePost';

const PostCard = ({ title, caption, image, createdAt, id, likes, comments }) => {

    const [timeStamp, setTimeStamp] = useState(timeAgo(createdAt));

    if (timeStamp === "less than a minute ago") {
        setTimeStamp("just now");
    }

    const [deleteModal, setDeleteModal] = useState(false);

    const handleDeleteConfirm = () => {
        setDeleteModal(true);
        document.body.style.overflow = 'hidden';
    }

    return (
        <div
            key={id}
            className="border-r rounded-lg border-b border-l border-zinc-300 lg:border-t bg-white break-inside-avoid mb-8 relative flex flex-col justify-between leading-normal">
            <img src={image} className="w-full mb-3 rounded-t-lg cursor-pointer" />
            <div className="p-4 pt-2">
                <div>
                    <a href="#" className="text-gray-700 font-bold text-lg mb-2 hover:text-[#00B855] inline-block">{title}</a>
                    <p className="text-gray-700 text-sm">{caption}</p>
                </div>
                <div className="flex items-center w-full text-xs justify-between text-gray-500 py-5 mb-8">
                    <div className="flex items-center space-x-2">
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                            <svg className="w-5 h-5 fill-current hover:fill-[#ff2f2f]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span>{likes} Likes</span>
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
                        <span>{comments ? comments.length : 0} Comment</span>
                    </button>
                </div>
                <div className="flex items-center">
                    <div className="text-sm flex justify-between items-center w-full">
                        <p className="text-gray-600">{timeAgo(createdAt)}</p>
                        <span onClick={handleDeleteConfirm} title='Delete post' className='cursor-pointer'><img className='md:w-6 w-5' src={bin} alt="" /></span>
                    </div>

                </div>
            </div>
            {deleteModal && <DeletePost setDeleteModal={setDeleteModal} id={id} />}
        </div>
    )
}

export default PostCard
