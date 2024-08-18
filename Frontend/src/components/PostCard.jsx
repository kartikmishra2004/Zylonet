import React from 'react'

const PostCard = () => {
    return (
        <div>
            <div class="flex flex-col justify-center items-center bg-gray-100">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                    <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="Mountain" class="w-full h-64 object-cover" />
                    <div class="p-6">
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">Title</h2>
                        <p class="text-gray-700 leading-tight mb-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam amet ut cum alias incidunt veniam?
                        </p>
                        <div class="flex justify-between items-center">
                            <div>
                                <a href="#" class="text-gray-500 hover:text-gray-700 mr-4"><i class="far fa-thumbs-up"></i> Like</a>
                                <a href="#" class="text-gray-500 hover:text-gray-700 mr-4"><i class="far fa-comment-alt"></i> Reply</a>
                                <a href="#" class="text-gray-500 hover:text-gray-700"><i class="far fa-share-square"></i> Share</a>
                            </div>
                            <span class="text-gray-600">2 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
