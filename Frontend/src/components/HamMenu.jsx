import React from 'react'
import { useToggleNav } from './ToggleNav';
import menu from "../assets/list.png";
import { useAuth } from '../storage/Auth';

const HamMenu = () => {

    const { handleToggleNav } = useToggleNav();
    const { isLoggedIn } = useAuth();

    return (
        <div className={isLoggedIn ? "" : "mb-8"}>
            <img onClick={handleToggleNav} className='w-16 p-5 block md:hidden opacity-75' src={menu} alt="" />
        </div>
    )
}

export default HamMenu
