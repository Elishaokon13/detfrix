import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    button: 'flex items-center justify-between shadow shadow-[#800080] bg-[#800080] text-white rounded-tr-xl rounded-bl-xl hover:bg-opacity-60 cursor-pointer',
    icon: 'bg-[#fff] text-[20px] p-2 text-[#800080] h-full rounded-tr-xl rounded-bl-xl'
}

const Button = ({ name, Icon, right, type }) => {
    return (
        <div className='flex justify-center'>
            <button className={right ? `flex-row-reverse ${styles.button}`: styles.button} type={type}>
                <div className={styles.icon}>
                    {Icon}
                </div>
                <p className='py-2 px-6 text-center'>{name}</p>
            </button>
        </div>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    Icon: PropTypes.node,
    right: PropTypes.bool,
    type: PropTypes.string
}

export default Button