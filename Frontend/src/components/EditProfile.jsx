import React, { useState } from 'react'
import { useAuth } from '../storage/Auth'

const EditProfile = ({ setShowModal }) => {

    const { user } = useAuth();

    const [updatedUser, setUpdatedUser] = useState({
        fullName: user.fullName,
        username: user.username,
    });
    const [imageSrc, setImageSrc] = useState(null);
    const [selectFile, setSelectFile] = useState(false);

    const handleImageChange = (e) => {
        setSelectFile(true);
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    }

    const handleEditProfile = (e) => {
        e.preventDefault();
        closeModal();
    }

    const handleEditProfileChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUpdatedUser({
            ...updatedUser,
            [name]: value,
        });
    }

    return (
        <div>
            <div id="crud-modal" tabindex="-1" aria-hidden="true" class={`overflow-y-auto backdrop-brightness-50 flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}>
                <div class="relative p-4 w-full max-w-[40rem] max-h-full">
                    <div class="relative bg-white rounded-lg shadow">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 class="text-lg font-semibold text-gray-900">
                                Edit your profile
                            </h3>
                            <button onClick={closeModal} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form onSubmit={handleEditProfile} class="p-4 md:p-5">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <div className="profile mb-4 flex gap-3 flex-col justify-center items-center">
                                        <div className='flex justify-center items-center gap-6'>
                                            <label title='Upload profile' for="uploadFile1">
                                                <div className='cursor-pointer'>
                                                    <div class="mx-auto max-w-xs">
                                                        <label for="example1" class="mb-1 block text-sm font-medium text-gray-700">Upload profile</label>
                                                        <input onChange={handleImageChange} id="example1" type="file" class="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-[#00B855] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-[#22a45e] focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
                                                    </div>
                                                </div>
                                            </label>
                                            <div className="profileImage relative flex items-center justify-center">
                                                <span className='h-[13rem] flex justify-center items-center overflow-hidden rounded-full'>
                                                    <img className={`w-[13rem] ${selectFile ? "" : "border-2"} border-[#dbdbdb] rounded-full`} src={selectFile ? imageSrc : user.profile} />
                                                </span>
                                            </div>
                                            <input type="file" id='uploadFile1' class="hidden" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-2">
                                    <label for="fullName" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                    <input value={updatedUser.fullName} onChange={handleEditProfileChange} type="text" name="fullName" id="fullName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your name" required={true} />
                                </div>
                                <div class="col-span-2">
                                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                    <input value={updatedUser.username} onChange={handleEditProfileChange} type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your username" required={true} />
                                </div>
                            </div>
                            <button type="submit" class="text-white inline-flex items-center bg-[#00B855] hover:bg-[#22a45e] transition-all duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
