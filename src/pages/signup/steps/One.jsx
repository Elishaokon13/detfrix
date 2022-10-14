import { Slider, Step, StepLabel, Stepper, TextField } from '@mui/material'
import React from 'react'
import facebook from '../../../assets/image/facebook.png'
import linkedin from '../../../assets/image/linkedin.png'
import google from '../../../assets/image/google.png'
import Button from '../../../components/Button'
import { MdOutlineNavigateNext } from 'react-icons/md'
import HorizontalLinearStepper from '../../../components/Stepper'

const styles = {
    form: 'sm:px-10 px-6 py-3 space-y-6',
    formInput: 'w-full border-[1px] border-blue-500 focus:outline-none rounded',
    social: 'flex cursor-pointer text-[13px] hover:bg-[#f1eaf1] border-2 p-2 rounded-full border-blue-500 bg-[#faf4f9] justify-center space-x-5 items-center',
    text: 'text-blue-500 underline cursor-pointer',
}

// Custom components
const Social = ({name, logo}) => (
    <div className={styles.social}>
        <images src={logo} alt='' className='w-5' />
        <p>Continue with {name}</p>
    </div>
)

const One = ({nextStep, email, setEmail}) => {

    const submitStage1 = (e) => {
        e.preventDefault()
        nextStep()
    }

    return (
        <div className='space-y-3'>
            <div>
                <form onSubmit={submitStage1} className={styles.form}>
                    <div className='grid w-full'>
                        <TextField
                            variant="outlined"
                            type='email'
                            name='email'
                            label='Email ID'
                            color="secondary"
                            size="small"
                            sx={{ boxShadow: 5 }}
                            required
                            onChange={setEmail}
                            value={email}
                            className={styles.formInput}
                        />
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
                <p className='text-center text-sm text-slate-400'>
                    I don't have an account. <span className={styles.text}>Sign in</span>
                </p>
            </div>
            <div className='pt-10 space-y-3'>
                <Social name='Google' logo={google} />
                <Social name='Linkedin' logo={linkedin} />
                <Social name='Facebook' logo={facebook} />
                <p className='text-center text-[10px] text-slate-800'>
                    By signing up, you agree to the <span className={styles.text}>Terms of Service</span> and <span className={styles.text}>Privacy Policy</span>, including <span className={styles.text}>cookie use</span>.
                </p>
            </div>
        </div>
    )
}

export default One