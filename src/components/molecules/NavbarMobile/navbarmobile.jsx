import React from 'react'
import { Image } from "../../atoms/ReactImage/image";
import { FaBars } from 'react-icons/fa'
import Tabs from '../../atoms/Tabs';
import { Links } from '../../atoms/Links/links';

export const NavbarMobile = ({handleNav}) => {
  return (
    <div className='flex justify-around gap-[20rem] items-center fixed w-full h-[4rem] backdrop-brightness-50 z-10'>
       <div className='flex'>
          <Image src={``} className=''></Image>
          <span className='font-bold text-lg text-white'>DEFTRIX</span>
       </div>   
       <div onClick={handleNav}>
            <FaBars className='text-white w-11'/>
       </div>   
       {
              Tabs.map((item,index)=>(
                <div className=' justify-center items-center text-white hidden'>
                  <ul>
                    <li key={index}>
                        <Links href={item.url} onClick={handleNav}>{item.name}</Links>
                    </li>
                    
                  </ul>
                </div>
              ))
            }
    </div>
  )
}
