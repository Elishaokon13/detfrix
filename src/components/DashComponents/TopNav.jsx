import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";


function TopNav({ toggle, isToggled }) {
  return (
    <div className=' h-[70px] bg-white text-black text-3xl flex items-center border-b-2 border-gray-400 justify-between px-[20px] font-[roboto]'>

      <div className='py-5 w-full'>
        <ul className='flex justify-between'>
          <li>Dashboard</li>
          <li className='lg:block hidden'><FaRegUserCircle/></li>
          <li className='lg:hidden block'><BiMenu onClick={() => isToggled(!toggle)}/></li>
        </ul>
      </div>
      
    </div>
  )
}

export default TopNav
