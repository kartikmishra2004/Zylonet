import React from 'react'
import HamMenu from "./HamMenu"
import NavShadow from "./NavShadow"
import { useAuth } from '../storage/Auth'

const Message = () => {

  const { night } = useAuth()
 
  return (
    <div className={`md:ml-[15rem] md:pl-[3rem] h-screen ${!night ? "bg-[#2a2834] text-[#bababa]" : "bg-white"}`}>
      <NavShadow />
      <HamMenu />
      <div className='w-full flex justify-center items-center text-2xl'>
      Comming Soon...
      </div>
    </div>
  )
}

export default Message
