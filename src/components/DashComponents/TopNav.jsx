import React from 'react'

function TopNav({ toggle, isToggled }) {
  return (
    <div className='shadow h-[60px] flex items-center justify-between px-[20px] font-[grotesk]'>
      <div>TopBar</div>
      
      <div className=' md:hidden cursor-pointer h-[30px] w-[30px] bg-blue-500' onClick={() => isToggled(!toggle)}></div>
    </div>
  )
}

export default TopNav