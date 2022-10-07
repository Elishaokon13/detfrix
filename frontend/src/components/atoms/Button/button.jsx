import React from 'react'

export const Button = ({variant,children,className}) => {
  return (

    <div>
        <button className={`${variant === 'bg-black'?'bg-blue' :'bg-white'} ${className}`}>{children}</button>
    </div>
  )
}
