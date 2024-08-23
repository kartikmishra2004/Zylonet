import React, { useEffect, useState } from 'react';
import editIcon from "../assets/editIcon.png";
import { useAuth } from '../storage/Auth';
import EditProfile from './EditProfile';
import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
import HamMenu from "./HamMenu";
import NavShadow from "./NavShadow";

const Profile = () => {

  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const { user, token } = useAuth();

  const handleShowModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:8080/api/v1/post/readpost", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    const res_data = await response.json();
    setPosts(res_data);
  }

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  return (
    <div className='md:ml-[15rem] transition-all duration-500 ease-in-out'>
      <NavShadow />
      <div
        className="mx-auto w-full bg-white shadow-xl text-gray-900">
        <div className="rounded-t-lg h-32">
          <HamMenu />
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
            <button className='text-sm flex flex-col items-center justify-around'>
              <img className='md:w-5 w-4' src={heart} alt="" />
              <div>Hearts: 1k</div>
            </button>
          </li>
          <li className="flex flex-col items-center justify-between">
            <button className='text-sm flex flex-col items-center justify-around'>
              <svg className="md:w-5 w-4 fill-current text-[#00B855]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
              </svg>
              <span>Followers: 877</span>
            </button>
          </li>
          <li onClick={handleShowModal} className="flex flex-col items-center justify-around">
            <button className="text-sm tracking-wide flex-col rounded-lg flex items-center justify-center focus:shadow-outline focus:outline-none">
              <img className='md:w-5 w-4 mr-2' src={editIcon} alt="" />
              <span>Edit profile</span>
            </button>
          </li>
        </ul>
        <div className="md:px-[4.1rem] w-full px-6 py-5 mt-2">
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center md:w-[50vw] w-[90vw]">
            <h2 className="font-semibold text-xl w-full">About me</h2>
            <pre className="text-gray-500 whitespace-pre-wrap mt-1 text-left font-sans">{user.aboutme}</pre>
            </div>
          </div>
          <div className="line md:my-[3rem] my-[1.5rem] md:w-[70vw] w-[85vw] mx-auto border-t-2 border-gray-200"></div>
          <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
            {posts.length > 0 ? posts.map(item => (<PostCard key={item._id} title={item.title} caption={item.caption} image={item.image} createdAt={item.createdAt} id={item._id} profile={item.author.profile} likes={item.likes} comments={item.comments} />)) : (<div className='py-12 flex md:flex-row flex-col gap-6 w-full items-center'><p className='text-gray-500'>No posts yet. Start sharing your thoughts!</p><Link to='/createpost' className='tracking-wide font-semibold bg-[#00B855] text-gray-100 w-max px-5 py-2.5 rounded-lg hover:bg-[#22a45e] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>Create Post</Link></div>)}
          </div>
        </div>
      </div>
      {showModal && <EditProfile setShowModal={setShowModal} user={user} />}
    </div>
  )
}

export default Profile
