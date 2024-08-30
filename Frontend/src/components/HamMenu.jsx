import React from 'react'
import { useToggleNav } from './ToggleNav';
import menu from "../assets/list.png";
import { useAuth } from '../storage/Auth';

const HamMenu = () => {

    const { handleToggleNav } = useToggleNav();
    const { isLoggedIn, night } = useAuth();

    return (
        <div className={isLoggedIn ? "" : `md:mb-0 ${!night ? "bg-[#312e3d]" : ''}`}>
            <img onClick={handleToggleNav} className={`w-16 p-5 block md:hidden opacity-75 ${!night ? "invert" : ''}`} src={menu} alt="" />
        </div>
    )
}

export default HamMenu
