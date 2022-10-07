import React from "react";
import Heading from "../../atoms/Heading";
import { Links } from "../../atoms/Links/links";
import Tabs from "../../atoms/Tabs";
export const Footer = ({handleNav}) => {
  return (
    <div className="flex w-full justify-between items-center bg-[#1E2125] p-5">
      <div className="flex flex-col">
        <Heading level={2} className='text-white'>Detfrix</Heading>
        <p className="text-white w-[20rem]">
          Detfrix is committed to making your financial dreams a reality with
          the help of our professional staff and years of experience
        </p>
      </div>
      <div className="flex flex-col">
          <Heading level={2} className='text-white'>Support</Heading>
          {
              Tabs.map((item,index)=>(
                <div className='flex flex-col justify-center items-center text-white'>
                  <ul>
                    <li key={index}>
                        <Links  href={item.url} onClick={handleNav}>{item.name}</Links>
                    </li>
                    
                  </ul>
                </div>
              ))
            }
      </div>
      <div className="flex col">
          <Heading>Contact</Heading>
          <div className="flex">

          </div>
      </div>

    </div>
  );
};
