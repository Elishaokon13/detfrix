import React from 'react'
import { Links } from '../../atoms/Links/links';
import { Image } from "../../atoms/ReactImage/image";
import Tabs from '../../atoms/Tabs';
export const Navbar = () => {
  return (
    <div className='flex justify-around items-center fixed w-full h-[4rem] backdrop-brightness-50 z-10'>
        <div className='flex'>
            <Image src={``} className=''></Image>
            <span className='font-bold text-lg text-white'>DEFTRIX</span>
        </div>
        
            {
              Tabs.map((item,index)=>(
                <div className='flex justify-center items-center text-white'>
                  <ul>
                    <li>
                        <Links href={item.url}>{item.name}</Links>
                    </li>
                    
                  </ul>
                </div>
              ))
            }
        
    </div>
  )
}
