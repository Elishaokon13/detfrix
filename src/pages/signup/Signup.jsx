import React, { useState } from 'react'
import logo from '../../assets/image/DETFRIX.png'
import Four from './steps/Four'
import Three from './steps/Three'
import Two from './steps/Two'
import One from './steps/One'
import HorizontalLinearStepper from '../../components/Stepper'

const styles = {
    signupContainer: 'flex mx-auto p-2 justify-center items-center sm:h-screen',
    container: 'sm:flex sm:h-[600px] w-screen md:w-[800px] shadow-2xl',
    leftSection: 'bg-signIn bg-cover h-auto md:w-[50%] text-white bg-no-repeat relative',
    rightSection: 'md:w-[50%] space-y-1 h-[100%] px-10 text-blue-500 flex justify-center items-center'
}

const Signup = () => {
    const [steps, setSteps] = useState(1)
    const [email, setEmail] = useState('')
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        confirmpassword: ''
    })
    const { confirmPassword, firstname, lastname, password, username } = formData;
    const values = { confirmPassword, firstname, lastname, password, username }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const nextStep = () => {
        setSteps(steps + 1)
    }

    const prevStep = () => {
        setSteps(steps - 1)
    }
    
    return (
        <div className={styles.signupContainer}>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <div className='w-full h-full absolute opacity-[70%] top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-blue-500 via-[#EDEDED] to-[#fff] bg-opacity-75'></div>
                    <div className='flex px-10 flex-col items-center justify-center relative -space-y-5 h-[90%]'>
                        <img alt='' src={logo} className='w-[250px]' />
                    </div>
                    <div className='px-2 text-sm uppercase absolute bottom-5 leading-7 font-semibold text-center left-[10%]'>
                        <p>Sign Up today and enjoy our benefits</p>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div className='space-y-10'>
                        <HorizontalLinearStepper activeStep={steps - 1} />
                        {(() => {
                            switch(steps) {
                                case 1:
                                    return (
                                        <One 
                                            nextStep={nextStep}
                                            email={email}
                                            setEmail={(e) => setEmail(e.target.value)}
                                        />
                                    )
                                case 2:
                                    return (
                                        <Two 
                                            nextStep={nextStep} 
                                            email={email}
                                            prevStep={prevStep}
                                        />
                                    )
                                case 3:
                                    return (
                                        <Three 
                                            onChange={onChange}
                                            values={values}
                                            nextStep={nextStep}
                                        />)
                                case 4:
                                    return <Four />
                                default:
                                    return null
                            }
                        })()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup