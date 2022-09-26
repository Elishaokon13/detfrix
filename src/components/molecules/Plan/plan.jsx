import React from 'react'
import { Button } from '../../atoms/Button/button'
import { Card } from '../../atoms/Card/card'
import Heading from '../../atoms/Heading'
import { MediaQuerys } from '../../../base/mobile/mediaQuery'
import Slider from "react-slick";
export const Plan = () => {
    const isMobile = MediaQuerys("(max-width:720px)");
    
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
  return (
    <div>
        {isMobile === true ? (
        <div className='flex flex-col justify-center items-center gap-5'>
        <div className='flex flex-col justify-center items-center gap-5'>
        <Card className={`bg-white w-[20rem] h-[20rem] flex flex-col 
            justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                <Heading level={2} className='font-extrabold'>
                    VIP 1
                </Heading>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-black'>Daily Profit</span>
                    <span className='text-blue font-semibold'>$0.50USDT</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-black'>Minimum Investment</span>
                    <span className='text-blue font-semibold'>$5USDT</span>
                </div>
                
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-black'>Duration</span>
                    <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                </div>
                <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
            </Card>
            <Card className={`bg-black w-[20rem] h-[20rem] flex flex-col 
            justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                <Heading level={2} className='font-extrabold text-white'>
                    VIP 2
                </Heading>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-white'>Daily Profit</span>
                    <span className='text-blue font-bold'>$1USDT</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-white'>Minimum Investment</span>
                    <span className='text-blue font-bold'>$20USDT</span>
                </div>
                
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-white'>Duration</span>
                    <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                </div>
                <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
            </Card>
            <Card className={`bg-white w-[20rem] h-[20rem] flex flex-col 
            justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                <Heading level={2} className='font-extrabold'>
                    VIP 3
                </Heading>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-black'>Daily Profit</span>
                    <span className='text-blue font-semibold'>$3USDT</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-black'>Minimum Investment</span>
                    <span className='text-blue font-semibold'>$50USDT</span>
                </div>
                
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-black'>Duration</span>
                    <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                </div>
                <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
            </Card>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
        <Card className={`bg-black w-[20rem] h-[20rem] flex flex-col 
            justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                <Heading level={2} className='font-extrabold text-white'>
                    VIP 4
                </Heading>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-white'>Daily Profit</span>
                    <span className='text-blue font-bold'>$5USDT</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-white'>Minimum Investment</span>
                    <span className='text-blue font-bold'>$100USDT</span>
                </div>
                
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-white'>Duration</span>
                    <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                </div>
                <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
            </Card>
            <Card className={`bg-white w-[20rem] h-[20rem] flex flex-col 
            justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                <Heading level={2} className='font-extrabold'>
                    VIP 5
                </Heading>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-black'>Daily Profit</span>
                    <span className='text-blue font-semibold'>$15USDT</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-black'>Minimum Investment</span>
                    <span className='text-blue font-semibold'>$500USDT</span>
                </div>
                
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-black'>Duration</span>
                    <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                </div>
                <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
            </Card>
            <Card className={`bg-black w-[20rem] h-[20rem] flex flex-col 
            justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                <Heading level={2} className='font-extrabold text-white'>
                    VIP 6
                </Heading>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-white'>Daily Profit</span>
                    <span className='text-blue font-bold'>$25USDT</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-white'>Minimum Investment</span>
                    <span className='text-blue font-bold'>$1000USDT</span>
                </div>
                
                <div className='flex flex-col text-center'>
                    <span className='font-medium text-white'>Duration</span>
                    <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                </div>
                <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
            </Card>
        </div>
</div>
    ):(
    <div className='flex flex-col justify-center items-center gap-5'>
            <div className='flex justify-center items-center gap-5'>
            <Card className={`bg-white w-[13rem] h-[20rem] flex flex-col 
                justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                    <Heading level={2} className='font-extrabold'>
                        VIP 1
                    </Heading>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-black'>Daily Profit</span>
                        <span className='text-blue font-semibold'>$0.50USDT</span>
                    </div>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-black'>Minimum Investment</span>
                        <span className='text-blue font-semibold'>$5USDT</span>
                    </div>
                    
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-black'>Duration</span>
                        <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                    </div>
                    <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
                </Card>
                <Card className={`bg-black w-[13rem] h-[20rem] flex flex-col 
                justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                    <Heading level={2} className='font-extrabold text-white'>
                        VIP 2
                    </Heading>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-white'>Daily Profit</span>
                        <span className='text-blue font-bold'>$1USDT</span>
                    </div>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-white'>Minimum Investment</span>
                        <span className='text-blue font-bold'>$20USDT</span>
                    </div>
                    
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-white'>Duration</span>
                        <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                    </div>
                    <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
                </Card>
                <Card className={`bg-white w-[13rem] h-[20rem] flex flex-col 
                justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                    <Heading level={2} className='font-extrabold'>
                        VIP 3
                    </Heading>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-black'>Daily Profit</span>
                        <span className='text-blue font-semibold'>$3USDT</span>
                    </div>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-black'>Minimum Investment</span>
                        <span className='text-blue font-semibold'>$50USDT</span>
                    </div>
                    
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-black'>Duration</span>
                        <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                    </div>
                    <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
                </Card>
            </div>
            <div className='flex justify-center items-center gap-5'>
            <Card className={`bg-black w-[13rem] h-[20rem] flex flex-col 
                justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                    <Heading level={2} className='font-extrabold text-white'>
                        VIP 4
                    </Heading>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-white'>Daily Profit</span>
                        <span className='text-blue font-bold'>$5USDT</span>
                    </div>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-white'>Minimum Investment</span>
                        <span className='text-blue font-bold'>$100USDT</span>
                    </div>
                    
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-white'>Duration</span>
                        <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                    </div>
                    <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
                </Card>
                <Card className={`bg-white w-[13rem] h-[20rem] flex flex-col 
                justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                    <Heading level={2} className='font-extrabold'>
                        VIP 5
                    </Heading>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-black'>Daily Profit</span>
                        <span className='text-blue font-semibold'>$15USDT</span>
                    </div>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-black'>Minimum Investment</span>
                        <span className='text-blue font-semibold'>$500USDT</span>
                    </div>
                    
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-black'>Duration</span>
                        <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                    </div>
                    <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
                </Card>
                <Card className={`bg-black w-[13rem] h-[20rem] flex flex-col 
                justify-center items-center shadow-lg shadow-slate-50 gap-5 rounded-lg`}>
                    <Heading level={2} className='font-extrabold text-white'>
                        VIP 6
                    </Heading>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-white'>Daily Profit</span>
                        <span className='text-blue font-bold'>$25USDT</span>
                    </div>
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-white'>Minimum Investment</span>
                        <span className='text-blue font-bold'>$1000USDT</span>
                    </div>
                    
                    <div className='flex flex-col text-center'>
                        <span className='font-medium text-white'>Duration</span>
                        <span className='text-blue font-bold'>60/<span className=''>days</span></span>
                    </div>
                    <Button className={`bg-blue text-white rounded-md p-2`}>Get Started</Button>
                </Card>
            </div>
    </div>)}
    </div>
  )
}
