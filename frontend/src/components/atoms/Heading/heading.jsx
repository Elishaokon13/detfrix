import React from 'react'

export const Heading = ({children, className,level}) => {
 switch (level) {
    case 1:
        return <h1 className={`text-2xl ${className}`}>{children}</h1>
    case 2:
        return <h2 className={`text-xl ${className}`}>{children}</h2>
    case 3:
        return <h3 className={`text-lg ${className}`}>{children}</h3>
    case 4:
        return <h4 className={`text-md ${className}`}>{children}</h4>
    case 5:
        return <h5 className={`text-sm ${className}`}>{children}</h5>
    case 6:
        return <h6 className={`text-xs ${className}`}>{children}</h6>
    default:
        break;
 }
}
