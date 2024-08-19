import React, { useState } from 'react'
import timeAgo from "../utils/TimeFormatter";

const PostCard = ({ title, caption, image, createdAt }) => {

    const [timeStamp, setTimeStamp] = useState(timeAgo(createdAt));

    if (timeStamp === "less than a minute ago") {
        setTimeStamp("just now");
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-gray-100 mb-6">
                <div className="bg-white rounded shadow-md overflow-hidden max-w-lg w-[23rem]">
                    <img src={image} alt="Mountain" className="w-full h-max object-contain bg-[#ebebeb]" />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                        <p className="text-gray-700 leading-tight mb-4">
                            {caption}
                        </p>
                        <div className="flex justify-between items-center">
                            <div>
                                <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-thumbs-up"></i> Like</a>
                                <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-comment-alt"></i> Reply</a>
                                <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-share-square"></i> Share</a>
                            </div>
                            <span className="text-gray-600">{timeStamp}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
