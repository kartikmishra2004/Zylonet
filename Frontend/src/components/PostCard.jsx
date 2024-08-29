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
                <div className="flex items-center mt-5">
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
