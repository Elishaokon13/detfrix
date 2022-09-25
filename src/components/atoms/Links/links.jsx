import React from 'react'
import { Link } from 'react-router-dom'
export const Links = ({href,children,className}) => {
  return (
    <div>
        <Link to={href} className={className}>{children}</Link>
    </div>
  )
}
