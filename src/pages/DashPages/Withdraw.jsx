import React from 'react'

function Withdraw() {
  return (
    <div className='flex bg-blue-100 flex-col h-screen items-center justify-center'>
      <div className='text-[20px] font-[grotesk] font-[700]'>Withdraw</div>
      <div className='mt-[20px] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-[15px] font-[grotesk] font-[700]'>Withdraw Amount</div>
          <div className='mt-[10px] flex items-center justify-center'>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>-</div>
            </div>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>+</div>
            </div>
          </div>
        </div>
        <div className='mt-[20px] flex flex-col items-center justify-center'>
          <div className='text-[15px] font-[grotesk] font-[700]'>Payment Method</div>
          <div className='mt-[10px] flex items-center justify-center'>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>-</div>
            </div>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>+</div>
            </div>
          </div>
        </div>
        <div className='mt-[20px] flex flex-col items-center justify-center'>
          <div className='text-[15px] font-[grotesk] font-[700]'>Total</div>
          <div className='mt-[10px] flex items-center justify-center'>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>-</div>
            </div>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>

            
  )
}

export default Withdraw