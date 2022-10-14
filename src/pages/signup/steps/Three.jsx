import { Checkbox, TextField } from '@mui/material';
import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Button from '../../../components/Button';
import { GiCheckMark } from 'react-icons/gi'

// CUSTOM COMPONENTS

// input components
const FormInput = ({ name, type, value, onChange }) => (
    <TextField
        variant="outlined"
        name={name.toLowerCase()}
        type={type}
        label={name}
        color="secondary"
        size="small"
        sx={{ boxShadow: 5 }}
        required
        onChange={onChange}
        value={value}
    />
);

// Show Password component
const ShowPassword = ({type}) => (
    <div className={styles.viewContainer}>
        {type === 'password' ? (
            <div className={styles.viewPassword}>
                <AiFillEye />
                <p className={styles.viewPasswordText}>Show</p>
            </div>
        ): (
            <div className={styles.viewPassword}>
                <AiFillEyeInvisible />
                <p className={styles.viewPasswordText}>Hide</p>
            </div>
        )}
    </div>
)

const styles = {
    form: "grid gap-6",
    flexBetween: "flex justify-between space-x-5 items-center",
    viewPassword: 'flex space-x-2 text-right cursor-pointer justify-end items-center',
    viewContainer: "w-full",
    viewPasswordText: "text-xs text-right",
    formButton: "bg-blue-500 rounded w-40 text-white p-2 hover:bg-opacity-60",
    proceedButton: "bg-blue-500 w-40 text-white p-2 hover:bg-opacity-60 rounded-xl"
}

const Three = ({nextStep, values, onChange}) => {
    const [ passwordType, setPasswordType ] = useState(new Array(2).fill('password'))
    const { confirmPassword, firstName, lastName, password, username } = values;


    // show or hide password
    const handlePassword = (idx) => {
        setPasswordType([...passwordType.map((type, index) => {
            if(index === idx) {
                if(type === 'password') {
                    return 'text'
                } else {
                    return 'password'
                }
            } else {
                return type
            }
        })])
    }

    // handle submit form
    const submit = (e) => {
        e.preventDefault();
        nextStep()
    };

    return (
        <div>
            <form onSubmit={submit} className={styles.form}>
                <div className={styles.flexBetween}>
                    <FormInput 
                        name="FirstName" 
                        type='text' 
                        value={firstName}
                        onChange={onChange}
                    />
                    <FormInput 
                        name="LastName" 
                        type='text' 
                        value={lastName}
                        onChange={onChange}
                    />
                </div>

                <FormInput 
                    name="Username" 
                    type='text' 
                    value={username}
                    onChange={onChange}
                />

                <div className="grid gap-2">
                    <div className={styles.viewPassword} onClick={() => handlePassword(0)}>
                        <ShowPassword type={passwordType[0]} />
                    </div>
                    <FormInput 
                        name="Password" 
                        type={passwordType[0]}
                        value={password}
                        onChange={onChange}
                    />
                </div>

                <div className="grid gap-2">
                    <div className={styles.viewPassword} onClick={() => handlePassword(1)}>
                        <ShowPassword type={passwordType[1]} />
                    </div>
                    <FormInput 
                        name="confirmPasssword" 
                        type={passwordType[1]} 
                        value={confirmPassword}
                        onChange={onChange}
                    />
                </div>

                <div className="flex text-xs items-center">
                    <Checkbox size="small" color="secondary" />
                    <p>I Agree to the Terms and Conditions applied to Enquire</p>
                </div>

                <div className="px-5 text-center">
                <Button 
                    name='Create Account'
                    Icon={<GiCheckMark />}
                    type='submit'
                />
                </div>

                <p className="text-center text-sm text-slate-400">
                    I have an account.{" "}
                    <span className="text-[#800080] underline cursor-pointer">
                        Log me in
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Three