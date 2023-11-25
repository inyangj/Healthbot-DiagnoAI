import React from 'react'

const Button = ({children, className}) => {
  return (
    <button type="submit" className={` bg-secondary text-white font-Nohemi_Bold text-[0.875rem] py-2 rounded-[0.27rem] font-bold ${className}`}>{children}</button>
  )
}

export default Button