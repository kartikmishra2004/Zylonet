import React from 'react'
import HamMenu from "./HamMenu"
import NavShadow from "./NavShadow"
import { useAuth } from '../storage/Auth'

const Settings = () => {

  const { setNight, night } = useAuth();

  const handleNightMode = () => {
    setNight(!night);  // Toggle the night mode
  }

  return (
    <div className={`md:ml-[15rem] pl-[3rem] h-screen ${!night ? 'bg-[#2a2834] text-[#dadada]' : ''} transition-all duration-500 ease-in-out`}>
      <NavShadow />
      <HamMenu />
      <div className="container mx-auto p-4">
        <div className="w-full md:py-14">
          <h1 className={`${!night ? 'text-[#dadada]' : 'text-gray-700'} md:text-5xl pl-3 text-[1.8rem] leading-8 md:leading-none font-extrabold mb-6`}>Settings<span className='text-[#00B855]'></span></h1>

          <div className="md:w-[40vw] py-4 flex items-center gap-3">
            <p className="py-2 text-xl font-semibold">Dark mode</p>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                onClick={handleNightMode} 
                type="checkbox" 
                className="sr-only peer" 
                checked={!night} 
                readOnly 
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00B855]"></div>
            </label>
          </div>
          <div className="mb-10 md:w-[40vw] pt-4 border-t-2 border-gray-200">
            <p className="py-2 text-xl font-semibold">Delete Account</p>
            <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Proceed with caution
            </p>
            <p className="mt-2">No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently.</p>
            <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">Continue with deletion</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;
