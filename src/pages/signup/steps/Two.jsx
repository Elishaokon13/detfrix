import React, { useState } from 'react'
import Countdown from 'react-countdown'
import { AiFillLock } from 'react-icons/ai'
import { MdOutlineNavigateNext } from 'react-icons/md'
import Button from '../../../components/Button'

// styles
const styles = {
    form: 'sm:px-10 px-6 pt-6 space-y-10',
    formInput: 'w-full border-[1px] border-[#800080] focus:outline-none rounded',
    formButton: 'bg-[#800080] rounded w-40 text-white p-2 hover:bg-opacity-60',
    social: 'flex cursor-pointer text-[13px] hover:bg-[#9b119b] hover:text-[#faf4f9] border-2 p-2 rounded-full border-[#800080] bg-[#faf4f9] justify-center space-x-5 items-center',
    text: 'text-[#800080] underline cursor-pointer',
    otp: 'm-[10px] h-[45px] w-[45px] border-none text-center rounded shadow bg-[#fffded] focus:outline-none',
    textRed: 'text-red-400 cursor-pointer'
}


const Two = ({email, nextStep, prevStep}) => {
    const [otp, setOtp] = useState(new Array(4).fill(""))

    const otpChange = (element, index) => {
        if(isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index) ? element.value: d)])
        if(element.nextSibling) {
            element.nextSibling.focus()
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        nextStep()
    }

    return (
        <div className='space-y-5'>
            <div className='space-y-3'>
                <AiFillLock 
                    className='text-center text-[90px] w-full text-[#e483e4]' 
                />
                <p className='text-center'>
                    A 4 digit number was sent to your Email
                    (<span className='text-black'>{email}</span>) 
                    Check Your Email OR Spam Folder
                </p>
            </div>
            <form onSubmit={onSubmit} className='space-y-8'>
                <div className='flex justify-center'>
                    {otp.map((data, index) => (
                        <input 
                            key={index}
                            type='text'
                            name='otp'
                            maxLength={1}
                            value={data}
                            onChange={(e) => otpChange(e.target, index)}
                            onFocus={e => e.target.select()}
                            className={styles.otp}
                            required
                        />
                    ))}
                </div>
                <div className='px-5 text-center'>
                    <Button 
                        name='Next'
                        Icon={<MdOutlineNavigateNext />}
                        right
                        type='submit'
                    />
                </div>
            </form>
            <div className='text-xs text-center space-y-1'>
                <p>Resend Code in <Countdown date={Date.now() + 50000} /></p>
                <p className={styles.textRed}>Resend OTP</p>
                <p className={styles.textRed} onClick={prevStep}>
                    Re-enter Email
                </p>
            </div>
        </div>
    )
}

export default Two