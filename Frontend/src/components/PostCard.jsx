import React from 'react'

const PostCard = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-gray-100">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                    <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="Mountain" className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Title</h2>
                        <p className="text-gray-700 leading-tight mb-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam amet ut cum alias incidunt veniam?
                        </p>
                        <div className="flex justify-between items-center">
                            <div>
                                <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-thumbs-up"></i> Like</a>
                                <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-comment-alt"></i> Reply</a>
                                <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-share-square"></i> Share</a>
                            </div>
                            <span className="text-gray-600">2 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
