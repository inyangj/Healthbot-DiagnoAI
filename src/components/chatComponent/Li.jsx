import React from 'react'

const Li = ({src, alt, children, onclick}) => {
  return (
    <li className='flex gap-2 items-center' onClick={onclick}><img src={src} alt={alt} />{children}</li>
  )
}

export default Li