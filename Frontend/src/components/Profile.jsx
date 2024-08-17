import React, { useState } from 'react'
import editIcon from "../assets/editIcon.png"
import { useAuth } from '../storage/Auth';
import EditProfile from './EditProfile';

const Profile = () => {

  const [showModal, setShowModal] = useState(false);

  const { user } = useAuth();

  const handleShowModal = () => {
    setShowModal(true);
  }

  return (
    <div className='ml-[18rem]'>
      <div
        className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-[50rem] sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">

        </div>
        <div className="mx-auto flex justify-center items-center w-32 h-32 relative -mt-16 border-2 border-[#dbdbdb] rounded-full overflow-hidden">
          <img className="object-cover object-center h-32" src={user.profile} />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">{user.fullName}</h2>
          <p className="text-gray-500">{user.username}</p>
        </div>
        <ul className="py-4 mt-5 text-gray-700 flex items-center justify-evenly">
          <li className="flex flex-col items-center justify-around">
            <svg className="w-4 fill-current text-[#00B855]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div>Stars: 2k</div>
          </li>
          <li className="flex flex-col items-center justify-between">
            <svg className="w-4 fill-current text-[#00B855]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
            </svg>
            <span>Followers: 10k</span>
          </li>
          <li onClick={handleShowModal} className="flex flex-col items-center justify-around">
            <button className="tracking-wide flex-col rounded-lg flex items-center justify-center focus:shadow-outline focus:outline-none">
              <img className='w-[20px] mr-2' src={editIcon} alt="" />
              <span>Edit profile</span>
            </button>
          </li>
        </ul>
        <div className="p-4 flex flex-col justify-evenly items-center border-t mx-8 mt-2">
          <div class="columns-1 md:columns-2 xl:columns-3 gap-7 ">
            <div class=" break-inside-avoid mb-8">
              <img class="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="Gallery image" />
            </div>
            <div class=" break-inside-avoid  mb-8">
              <img class="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031232.jpg" alt="Gallery image" />
            </div>
            <div class=" break-inside-avoid  mb-8">
              <img class="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031357.jpg" alt="Gallery image" />
            </div>
            <div class=" break-inside-avoid  mb-8">
              <img class="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031375.jpg" alt="Gallery image" />
            </div>
            <div class=" break-inside-avoid  mb-8">
              <img class="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031396.jpg" alt="Gallery image" />
            </div>
            <div class=" break-inside-avoid  mb-8">
              <img class="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688031414.png" alt="Gallery image" />
            </div>
          </div>
        </div>
      </div>
      {showModal && <EditProfile setShowModal={setShowModal} user={user} />}
    </div>
  )
}

export default Profile
