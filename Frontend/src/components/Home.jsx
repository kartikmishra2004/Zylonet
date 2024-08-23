import React, { useEffect, useState } from 'react'
import HamMenu from "./HamMenu"
import NavShadow from "./NavShadow"
import { useAuth } from "../storage/Auth"
import { Link } from "react-router-dom"
import timeAgo from '../utils/TimeFormatter';

const Home = () => {

  const { isLoggedIn, ranPosts } = useAuth();

  return (
    <div className='md:ml-[15rem]'>
      <NavShadow />
      <HamMenu />
      <div className="flex h-[50vh] justify-center items-center">
        <div className="mx-auto w-full md:mt-10 flex justify-center px-4 lg:px-8">
          <div className="md:text-center w-full">
            <h1
              className="md:text-5xl text-[1.8rem] leading-8 md:leading-none font-extrabold tracking-tight text-gray-700">
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

      <div className="relative my-8 w-full md:max-w-4xl max-w-[18rem] mx-auto bg-white rounded-full">
        <input placeholder="e.g. Blog" className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-[#00B855] focus:border-[#00B855]" type="text" name="query" id="query" />
        <button type="submit" className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-[#00B855] sm:px-6 sm:text-base sm:font-medium hover:bg-[#22a45e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B855]">
          <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          Search
        </button>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
          {ranPosts.map((item) => (
            <div
              key={item._id}
              className="border-r rounded-lg border-b border-l border-zinc-300 lg:border-t bg-white break-inside-avoid mb-8 relative flex flex-col justify-between leading-normal">
              <img src={item.image} className="w-full mb-3 rounded-t-lg cursor-pointer" />
              <div className="p-4 pt-2">
                <div>
                  <Link to="#" className="text-gray-700 font-bold text-lg mb-2 hover:text-[#00B855] inline-block">{item.title}</Link>
                  <p className="text-gray-700 text-sm">{item.caption}</p>
                </div>
                <div className="flex items-center w-full text-xs justify-between text-gray-500 py-5 mb-8">
                  <div className="flex items-center space-x-2">
                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                      <svg className="w-5 h-5 fill-current hover:fill-[#ff2f2f]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span>{item.likes} Likes</span>
                    </button>
                  </div>
                  <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                    <svg width="22px" height="22px" viewBox="0 0 24 24" className="w-5 h-5 fill-current hover:fill-[#00B855]" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                      </g>
                    </svg>
                    <span>{item.comments ? item.comments.length : 0} Comment</span>
                  </button>
                </div>
                <div className="flex items-center">
                  <Link
                    to={`/viewprofile/${item.author._id}`}
                    state={{ username: item.author.username, fullName: item.author.fullName, profile: item.author.profile, aboutme: item.author.aboutme, likes: item.author.likes, followers: item.author.followers }}><img className="w-10 h-10 rounded-full mr-4 object-cover" src={item.author.profile} /></Link>
                  <div className="text-sm">
                    <Link
                      to={`/viewprofile/${item.author._id}`}
                      state={{ username: item.author.username, fullName: item.author.fullName, profile: item.author.profile, aboutme: item.author.aboutme, likes: item.author.likes, followers: item.author.followers }} className="text-gray-700 font-semibold leading-none hover:text-[#00B855]">{item.author.username}</Link>
                    <p className="text-gray-600">{timeAgo(item.createdAt)}</p>
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
