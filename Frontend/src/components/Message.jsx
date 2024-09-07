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
      <ul role="list" class="divide-y divide-gray-100">
        <li class="flex justify-between gap-x-6 py-5 px-5 border-b ">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">leslie.alexander@example.com</p>
              </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Message
