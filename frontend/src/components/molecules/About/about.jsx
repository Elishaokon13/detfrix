import React from "react";
import { Button } from "../../atoms/Button/button";
import Heading from "../../atoms/Heading";
import { Image } from "../../atoms/ReactImage/image";
import { MediaQuerys } from '../../../base/mobile/mediaQuery'
export const About = () => {
  const isMobile = MediaQuerys("(max-width:720px)");
  return (
    <div>
      {isMobile === true ? (<div className="flex flex-col-reverse justify-center items-center gap-10">
      <div className=" w-full justify-center items-center hidden">
        <Image
          src="https://res.cloudinary.com/freecodingboy/image/upload/v1663673860/Detfrix/Home/intro_1_aad3gq.png"
          alt=""
          className="w-[25rem]"
        />
      </div>
      <div className="flex flex-col justify-start w-full p-3 gap-3">
        <Heading level={1} className="text-black font-bold text-center">
          About Us
        </Heading>
        <p className="text-justify">
          DETFRIX LTD company was created from the passion of a group of people
          with similar interests, who have developed a passive income guarantee
          system for people who are looking for a quick way to multiply their
          assets. The plan developed by us allows everyone, even basic
          investors, to achieve a guaranteed profit. Our diversification of
          funds allows for rational investments in at least 3 industries in
          which we can invest the investor funds entrusted to us.
        </p>
        <Button className='p-3 rounded-md text-white bg-black'>Read More</Button>
      </div>
    </div>)
      :
      (<div className="flex justify-center items-center gap-10">
      <div className="flex">
        <Image
          src="https://res.cloudinary.com/freecodingboy/image/upload/v1663673860/Detfrix/Home/intro_1_aad3gq.png"
          alt=""
          className="w-[25rem]"
        />
      </div>
      <div className="flex flex-col justify-start w-[30rem] gap-3">
        <Heading level={1} className="text-black font-bold">
          About Us
        </Heading>
        <p>
          DETFRIX LTD company was created from the passion of a group of people
          with similar interests, who have developed a passive income guarantee
          system for people who are looking for a quick way to multiply their
          assets. The plan developed by us allows everyone, even basic
          investors, to achieve a guaranteed profit. Our diversification of
          funds allows for rational investments in at least 3 industries in
          which we can invest the investor funds entrusted to us.
        </p>
        <Button className='p-3 rounded-md text-white bg-black'>Read More</Button>
      </div>
    </div>)}
    </div>
    
  );
};
