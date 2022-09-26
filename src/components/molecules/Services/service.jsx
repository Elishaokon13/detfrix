import React from "react";
import Heading from "../../atoms/Heading";
import { Links } from "../../atoms/Links/links";
import { Image } from "../../atoms/ReactImage/image";
import Slider from "react-slick";
import { MediaQuerys } from '../../../base/mobile/mediaQuery'
export const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const isMobile = MediaQuerys("(max-width:720px)");
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Heading level={2} className='font-bold'>Services</Heading>
     {isMobile === true ? 
     ( 
      <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center w-full gap-3">
        <Image
          src={`https://res.cloudinary.com/freecodingboy/image/upload/v1663673859/Detfrix/Home/services1_1_ueuqji.png`}
          className='w-[30rem]'
        />
        <Heading level={4} className='font-bold'>Crypto Currency Investment</Heading>
        <p className="w-[25rem]">
          Bitcoin trading is a unique platform for trading bitcoin against
          other cryptocurrencies just like one would do for forex trading…
        </p>
        <Links href={``} className='font-bold'>Read More</Links>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-3">
        <Image
          src={`https://res.cloudinary.com/freecodingboy/image/upload/v1663673859/Detfrix/Home/slider1_1_xovzsm.png`}
          className='w-[30rem]'
        />
        <Heading level={4} className='font-bold'>Forex Trading </Heading>
        <p className="w-[25rem]">
        The Foreign Exchange market, also called FOREX or FX, is the global market for currency trading. With a daily volume of more than $5.3 trillion.…
        </p>
        <Links href={``} className='font-bold'>Read More</Links>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-3">
        <Image
          src={`https://res.cloudinary.com/freecodingboy/image/upload/v1663673859/Detfrix/Home/services6_1_nnvfbn.png`}
          className='w-[30rem]'
        />
        <Heading level={4} className='font-bold'>Banking Investment</Heading>
        <p className="w-[25rem]">
        Here at Zito Capital we provide online brokerage services for over 1000 customer accounts and processes over 3,000 trades per day.…
        </p>
        <Links href={``} className='font-bold'>Read More</Links>
      </div>
    </div>)
     :
     ( <div className="flex justify-center items-center gap-5">
     <div className="flex flex-col justify-center w-[15rem] gap-3">
       <Image
         src={`https://res.cloudinary.com/freecodingboy/image/upload/v1663673859/Detfrix/Home/services1_1_ueuqji.png`}
         className='w-[20rem]'
       />
       <Heading level={4} className='font-bold'>Crypto Currency Investment</Heading>
       <p>
         Bitcoin trading is a unique platform for trading bitcoin against
         other cryptocurrencies just like one would do for forex trading…
       </p>
       <Links href={``} className='font-bold'>Read More</Links>
     </div>
     <div className="flex flex-col justify-center w-[15rem] gap-3">
       <Image
         src={`https://res.cloudinary.com/freecodingboy/image/upload/v1663673859/Detfrix/Home/slider1_1_xovzsm.png`}
         className='w-[20rem]'
       />
       <Heading level={4} className='font-bold'>Forex Trading </Heading>
       <p>
       The Foreign Exchange market, also called FOREX or FX, is the global market for currency trading. With a daily volume of more than $5.3 trillion.…
       </p>
       <Links href={``} className='font-bold'>Read More</Links>
     </div>
     <div className="flex flex-col justify-center w-[15rem] gap-3">
       <Image
         src={`https://res.cloudinary.com/freecodingboy/image/upload/v1663673859/Detfrix/Home/services6_1_nnvfbn.png`}
         className='w-[20rem]'
       />
       <Heading level={4} className='font-bold'>Banking Investment</Heading>
       <p>
       Here at Zito Capital we provide online brokerage services for over 1000 customer accounts and processes over 3,000 trades per day.…
       </p>
       <Links href={``} className='font-bold'>Read More</Links>
     </div>
   </div>)}
    </div>
  );
};
