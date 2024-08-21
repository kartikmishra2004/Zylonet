import React, { useState } from 'react';
import timeAgo from "../utils/TimeFormatter";
import bin from "../assets/bin.png";
import DeletePost from './DeletePost';

const PostCard = ({ title, caption, image, createdAt, id }) => {

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
        <div>
            <div className="flex flex-col justify-center items-center mb-6">
                <div className="bg-white rounded shadow-md overflow-hidden max-w-lg w-[18rem] md:w-[100%]">
                    <img src={image} alt="Mountain" className="w-full h-max object-contain bg-[#ebebeb]" />
                    <div className="p-6">
                        <div className='flex w-full justify-between items-center'>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                            <span onClick={handleDeleteConfirm} title='Delete post' className='cursor-pointer'><img className='md:w-8 w-6' src={bin} alt="" /></span>
                        </div>
                        <p className="text-gray-700 leading-tight mb-4">
                            {caption}
                        </p>
                        <div className="flex flex-col md:flex-row justify-between md:gap-0 gap-4 md:items-center">
                            <div className='md:text-base text-sm'>
                                <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-thumbs-up"></i> Like</a>
                                <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-comment-alt"></i> Reply</a>
                                <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-share-square"></i> Share</a>
                            </div>
                            <span className="text-gray-600 text-end md:text-base text-xs">{timeStamp}</span>
                        </div>
                    </div>
                </div>
            </div>
            {deleteModal && <DeletePost setDeleteModal={setDeleteModal} id={id} />}
        </div>
    )
}

export default PostCard
