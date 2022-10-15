import React from 'react'


function Deposit() {
  return (
    <div className='flex flex-col bg-blue-100 h-screen items-center justify-center'>
      <div className='text-[45px] md:text-[60px] font-[grotesk] font-[700]'>Deposit</div>
      <div className='mt-[20px] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-[15px] font-[grotesk] font-[700]'>Deposit Amount</div>
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
            <div className='bg-[#F5F5F5] h-[40px] w-[130px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>2361074768</div>
            </div>
            <div className='bg-[#F5F5F5] h-[40px] w-[100px] flex items-center  justify-center ml-8'>
              <div className='text-[20px] font-[grotesk] font-[700] '>PAGA MFB</div>
            </div>
          </div>
        </div>
        <div className='mt-[20px] flex flex-col items-center mt-12 justify-center'>
          <div className='text-[15px] font-[grotesk] font-[700]'>Upload Your Proof Of Payment</div>
          
        </div>
      </div>

      <> 
        <div class="flex justify-center mt-10  h-screen items-center w-60 md:w-80">
            <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-blue-300 rounded-lg border-2 border-blue-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-blue-700 hover:bg-blue-100 dark:border-blue-600 dark:hover:border-blue-500 dark:hover:bg-blue-600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-blue-500 dark:text-blue-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-blue-500 dark:text-blue-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden"/>
    </label>
</div>
</>

    </div>




  )
}

export default Deposit
