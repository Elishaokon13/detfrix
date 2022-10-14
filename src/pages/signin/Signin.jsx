import React from 'react'
import logo from '../../assets/image/DETFRIX.png'
import { MdAccountCircle } from 'react-icons/md'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { BiLogInCircle } from 'react-icons/bi'
import Button from '../../components/Button'
import { useEffect } from 'react'

const styles = {
    signinContainer: 'flex justify-center items-center sm:h-screen',
    container: 'sm:flex sm:h-[550px] w-screen sm:w-[800px] shadow-2xl',
    bgGradient: 'w-full px-10 h-full absolute opacity-[70%] top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-[#800080] via-[#EDEDED] to-[#fff] bg-opacity-8',
    leftSection: 'hidden sm:block bg-signIn bg-cover h-auto sm:w-[50%] text-white bg-no-repeat relative',
    rightSection: 'w-full sm:w-[50%] bg-signIn sm:bg-protection space-y-1 bg-cover sm:bg-contain h-[90vh] sm:h-[90%] bg-no-repeat sm:py-5 sm:px-10 text-[#800080] flex items-center justify-center relative',
    imgContainer: 'flex flex-col items-center justify-center relative -space-y-5 h-[90%]',
    slideContainer: 'px-2 text-sm uppercase absolute bottom-5 left-0 leading-7 font-semibold text-center',
    footer: 'text-slate-50 md:text-[#800080] text-[10px] text-center bottom-0 md:-bottom-12 right-5 left-5 absolute',
    forgotText: 'text-[#800080] cursor-pointer hover:text-slate-100 sm:hover:text-slate-500',
    signupLink: 'text-[#800080] underline cursor-pointer hover:text-slate-100 sm:hover:text-slate-500'
}

const Signin = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ invisible, setInvisible ] = useState(true)
    const [slides] = useState([
        'Instant result on inquiries made from millions of users all over the world',
        'Validate interaction with a corporate business or body',
        'Connect with accessible business-related request'
    ])
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            let nextSlide = slides.length - 1 > currentSlide ? currentSlide + 1 : 0
            setInvisible(false)
            setCurrentSlide(nextSlide)
            setTimeout(() => {
                setInvisible(true)
            }, 500)
        }, 5000)

        return () => clearInterval(interval)
    }, [currentSlide, slides])

    return (
        <div className={styles.signinContainer}>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <div className={styles.bgGradient}></div>
                    <div className={styles.imgContainer}>
                        <img alt='' src={logo} className='w-[250px]' />
                    </div>
                    {invisible && (
                        <div className={styles.slideContainer}>
                            <p className='animate-in zoom-in duration-1000'>{slides[currentSlide]}</p>
                        </div>
                    )}
                </div>
                <div className={styles.rightSection}>
                    <div className='py-10 md:py-0 space-y-5'>
                        <div className={`sm:hidden ${styles.bgGradient}`}></div>
                        <div className='relative'>
                            <div className='flex justify-center'>
                                <MdAccountCircle size='100px' />
                            </div>
                            <div className='w-full capitalize text-[25px] text-center font-extrabold'>
                                <p>Login to access your account</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center h-full relative'>
                            <form className='space-y-8'>
                                <div className='space-y-4 text-center'>
                                    <TextField 
                                        type='email'
                                        name='email'
                                        label='Email ID'
                                        color="secondary"
                                        size="small"
                                        sx={{ boxShadow: 5 }}
                                        required
                                        onChange={e => setEmail(e.target.value)}
                                        inputMode='email'
                                        value={email}
                                    />

                                    <TextField 
                                        type='password'
                                        label='Password'
                                        color="secondary"
                                        size="small"
                                        sx={{ boxShadow: 5 }}
                                        required
                                        inputMode='text'
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>

                                <div>
                                    <Button 
                                        name='Login'
                                        Icon={<BiLogInCircle />}
                                        type='submit'
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='space-y-1 text-xs text-center relative'>
                            <p className={styles.forgotText}>Forgot Password?</p>
                            <p className='text-[#000] md:text-slate-500'>Don't have an account yet? <span className={styles.signupLink}>Sign Up</span></p>
                        </div>
                        <div className={styles.footer}>
                            <p>&copy; 2022. The Enquirer Software</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin