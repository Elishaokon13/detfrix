import React from 'react'

export const Image = ({className, src, alt, }) => {
  return (
    <div>
        <img className={className} src={src} alt={alt}/>
    </div>
  )
}
