import React, { useState } from 'react';
import { useAuth } from '../storage/Auth';

const EditProfile = ({ setShowModal }) => {
    const { user, night } = useAuth();
    const { token } = useAuth();
    const { updateProfile } = useAuth();

    const [updatedUser, setUpdatedUser] = useState({
        fullName: user.fullName,
        aboutme: user.aboutme,
    });
    const [imageSrc, setImageSrc] = useState(null);
    const [selectFile, setSelectFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const upload = async (file) => {
        // Calling API to upload image
        try {
            const formData = new FormData();
            formData.append('avatar', file);
            const response = await fetch("https://zylonet-server.onrender.com/api/v1/profile/upload", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
        } catch (error) {
            console.log("Failed to upload image!!", error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto';
    };


    const handleEditProfileChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUpdatedUser({
            ...updatedUser,
            [name]: value,
        });
    };

    const updateTheProfile = () => {
        updateProfile({ updatedUser, id: user._id });
    }

    const handleEditProfile = async (e) => {
        e.preventDefault();
        if (!updatedUser.fullName || !updatedUser.aboutme) { }
        else {
            closeModal();
        }
        if (selectFile) {
            await upload(selectFile);
        }
        updateTheProfile();
    };
    return (
        <div>
            <div id="crud-modal" tabIndex="-1" className={`overflow-y-auto backdrop-brightness-50 flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}>
                <div className="relative md:p-4 w-full max-w-[40rem] max-h-full">
                    <div className={`relative md:rounded-lg shadow ${!night ? "bg-[#2a2834] text-[#bababa]" : "bg-white"}`}>
                        <div className="flex mt-[5.8rem] md:mt-0 items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className={`text-lg ${!night ? "text-[#bababa]" : "text-gray-900"} font-semibold`}>
                                Edit your profile
                            </h3>
                            <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form onSubmit={handleEditProfile} className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <div className="profile mb-4 flex gap-3 flex-col justify-center items-center">
                                        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-6'>
                                            <label title='Upload profile' htmlFor="uploadFile1">
                                                <div className='cursor-pointer'>
                                                    <div className="mx-auto max-w-xs">
                                                        <label htmlFor="example1" className={`mb-1 block text-sm font-medium ${!night ? "text-[#bababa]" : "text-gray-700"}`}>Upload profile</label>
                                                        <input accept=".jpg, .jpeg, .png, .gif" onChange={handleImageChange} id="example1" type="file" className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-[#00B855] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-[#22a45e] focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
                                                    </div>
                                                </div>
                                            </label>
                                            <div className="mx-auto flex justify-center items-center w-[13rem] h-[13rem] border-2 border-[#dbdbdb] rounded-full overflow-hidden">
                                                <img className={`object-cover object-center h-[13rem]`} src={selectFile ? imageSrc : user.profile} />

                                            </div>
                                            <input type="file" id='uploadFile1' className="hidden" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="fullName" className={`${!night ? "text-[#bababa]" : "text-gray-900"} block mb-2 text-sm font-medium`}>Name</label>
                                    <input value={updatedUser.fullName} onChange={handleEditProfileChange} type="text" name="fullName" id="fullName" className={` ${!night ? "bg-[#3b3847] text-[#bababa]" : "bg-gray-50 text-gray-900"} border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`} placeholder="Enter your name" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="aboutme" className={`block mb-2 text-sm font-medium ${!night ? "text-[#bababa]" : "text-gray-900"}`}>About me</label>
                                    <textarea maxLength='300' value={updatedUser.aboutme} onChange={handleEditProfileChange} rows='5' type="text" name="aboutme" id="aboutme" className={`${!night ? "bg-[#3b3847] text-[#bababa]" : 'bg-gray-50 text-gray-900'} resize-none border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`} placeholder="Enter something about yourself" />
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-[#00B855] hover:bg-[#22a45e] transition-all duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;
