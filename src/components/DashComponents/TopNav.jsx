import React from 'react';
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";


function TopNav({ toggle, isToggled }) {
  return (
    <div className=' h-[70px] bg-white text-black text-3xl flex items-center border-b-2 border-gray-400 justify-between px-[20px] font-[roboto]'>

      <div className='py-5 w-full'>
        <ul className='flex justify-between'>
          <li>Dashboard</li>
          <Link to="profile">
            <li><FaRegUserCircle/></li>
          </Link>
        </ul>
      </div>
      
    </div>
  )
}

export default TopNav
