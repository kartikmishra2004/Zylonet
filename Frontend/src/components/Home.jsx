import React from 'react'
import HamMenu from "./HamMenu"
import NavShadow from "./NavShadow"

const Home = () => {
  return (
    <div className='md:ml-[18rem] text-5xl'>
      <NavShadow />
      <HamMenu />
      <div className="p-4 flex flex-col justify-evenly items-center md:mx-8">
        <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
          <div className=" break-inside-avoid mb-8">
            <img className="h-auto max-w-full" src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="Gallery image" />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img className="h-auto max-w-full" src="https://pagedone.io/asset/uploads/1688031232.jpg" alt="Gallery image" />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img className="h-auto max-w-full" src="https://pagedone.io/asset/uploads/1688031357.jpg" alt="Gallery image" />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img className="h-auto max-w-full" src="https://pagedone.io/asset/uploads/1688031375.jpg" alt="Gallery image" />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img className="h-auto max-w-full" src="https://pagedone.io/asset/uploads/1688031396.jpg" alt="Gallery image" />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img className="h-auto max-w-full" src="https://pagedone.io/asset/uploads/1688031414.png" alt="Gallery image" />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img className="h-auto max-w-full" src="https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery image" />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img className="h-auto max-w-full" src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery image" />
          </div>
          <div className=" break-inside-avoid  mb-8">
            <img className="h-auto max-w-full" src="https://images.unsplash.com/photo-1723883973654-474fd909d3b7?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
