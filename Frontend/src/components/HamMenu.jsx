import React from 'react'
import { useToggleNav } from './ToggleNav';
import menu from "../assets/list.png";

const HamMenu = () => {

    const { handleToggleNav } = useToggleNav();

    return (
        <div>
            <img onClick={handleToggleNav} className='w-16 p-5 block md:hidden opacity-75' src={menu} alt="" />
        </div>
    )
}

export default HamMenu
