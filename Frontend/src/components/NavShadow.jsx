import React from 'react'
import { useToggleNav } from './ToggleNav';

const NavShadow = () => {

  const { navShadow } = useToggleNav();
  const { handleToggleNav } = useToggleNav();

  return (
    <div onClick={handleToggleNav} className={`w-full h-screen fixed bg-[#0000007e] z-40 ${navShadow} md:hidden`}></div>
  )
}

export default NavShadow
