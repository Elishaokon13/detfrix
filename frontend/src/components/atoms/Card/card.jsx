import React from 'react'

export const Card = ({className,children,variant}) => {
  return (
    <div className={`${variant === 'bg-black'?'bg-blue':'bg-white'} ${className}`}>
        {children}
    </div>
  )
}
