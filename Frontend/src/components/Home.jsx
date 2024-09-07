import React, { useEffect, useState } from 'react'
import HamMenu from "./HamMenu"
import NavShadow from "./NavShadow"
import { useAuth } from "../storage/Auth"
import { Link } from "react-router-dom"
import timeAgo from '../utils/TimeFormatter';
import ChatWithAI from './ChatWithAI'

const Home = () => {

  const { isLoggedIn, ranPosts, user, night, loadingPost } = useAuth();

  return (
    <div className={`md:ml-[15rem] ${!night ? "bg-[#2a2834]" : ""}`}>
      <NavShadow />
      <HamMenu />
      <ChatWithAI />
      <div className="flex h-[50vh] justify-center items-center">
        <div className="mx-auto w-full md:mt-10 flex justify-center px-4 lg:px-8">
          <div className="md:text-center w-full">
            <h1
              className={`md:text-5xl text-[1.8rem] leading-8 md:leading-none font-extrabold tracking-tight ${!night ? "text-[#bababa]" : "text-gray-700"}`}>
              <span className="block"><span className="mb-1">
                Explore the World with
              </span>
                <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent"> Zylonet
                </span>
              </span>
              <div className="mt-2">Your Social Hub
                <span className="relative mt-3 whitespace-nowrap text-[#00B855]"><svg aria-hidden="true" viewBox="0 0 418 42"
                  className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                  preserveAspectRatio="none">
                  <path
                    d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                  </path>
                </svg>
                  <span className="relative"> with 24/7 AI Support.</span>
                </span>
              </div>
            </h1>
            <p className="md:mx-auto mt-3 max-w-xl md:text-lg text-base text-gray-500">
              Zylonet brings you closer to what matters. Connect with friends, share your moments, and explore new ideas, all while getting instant assistance from our AI SupportBot – here to help you 24/7.
            </p>
            <div className={`mt-5 sm:mt-8 ${isLoggedIn ? "hidden" : "flex"} justify-center`}>
              <div className="rounded-md shadow"><Link
                className="flex w-full items-center justify-center rounded-lg border border-transparent bg-[#00B855] px-8 py-3 text-base font-medium text-white hover:bg-[#22a45e] md:py-4 md:px-10 md:text-lg"
                to="/signup">Get started
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`relative my-8 w-full md:max-w-4xl max-w-[18rem] mx-auto ${!night ? "bg-[#2a2834]" : "bg-white"} rounded-full`}>
        <input placeholder="e.g. Blog" className={`rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 ${!night ? "border-[#bababa]" : "border-gray-100"} shadow-md hover:outline-none focus:ring-[#00B855] focus:border-[#00B855]`} type="text" name="query" id="query" />
        <button type="submit" className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-[#00B855] sm:px-6 sm:text-base sm:font-medium hover:bg-[#22a45e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B855]">
          <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          Search
        </button>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
          {loadingPost ? (<div className='flex w-full justify-center items-center h-[10rem] text-2xl text-gray-700'>Loading posts...</div>) : ranPosts.map((item) => (
            <div
              key={item._id}
              className={`border-r rounded-lg border-b border-l ${!night ? "border-[#bababa]" : "border-zinc-300"}  lg:border-t ${!night ? "bg-[#3b3847]" : "bg-white"}  break-inside-avoid mb-8 relative flex flex-col justify-between leading-normal`}>
              <img src={item.image} className="w-full mb-3 rounded-t-lg cursor-pointer" />
              <div className="p-4 pt-2">
                <div>
                  <Link to="#" className={`${!night ? "text-[#bababa]" : "text-gray-700"} font-bold text-lg mb-2 hover:text-[#00B855] inline-block`}>{item.title}</Link>
                  <p className={`${!night ? "text-[#bababa]" : "text-gray-700"} text-sm`}>{item.caption}</p>
                </div>
                <div className={`flex items-center mt-5`}>
                  <Link
                    to={user._id === item.author._id ? `/profile` : `/viewprofile/${item.author._id}`}
                    state={{ username: item.author.username, fullName: item.author.fullName, profile: item.author.profile, aboutme: item.author.aboutme, following: item.author.following, followers: item.author.followers }}><img className="w-10 h-10 rounded-full mr-4 object-cover" src={item.author.profile} /></Link>
                  <div className="text-sm">
                    <Link
                      to={user._id === item.author._id ? `/profile` : `/viewprofile/${item.author._id}`}
                      state={{ username: item.author.username, fullName: item.author.fullName, profile: item.author.profile, aboutme: item.author.aboutme, following: item.author.following, followers: item.author.followers }} className={`${!night ? "text-[#bababa]" : "text-gray-700"} font-semibold leading-none hover:text-[#00B855]`}>{item.author.username}</Link>
                    <p className={` ${!night ? "text-[#bababa]" : "text-gray-600"}`}>{timeAgo(item.createdAt)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
