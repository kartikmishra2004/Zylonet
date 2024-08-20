import React from 'react'
import HamMenu from "./HamMenu"
import NavShadow from "./NavShadow"

const Message = () => {
  return (
    <div className='md:ml-[18rem] text-5xl'>
      <NavShadow />
      <HamMenu />
      Message
    </div>
  )
}

export default Message
