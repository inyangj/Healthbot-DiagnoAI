import React from 'react'

const Li = ({src, alt, children}) => {
  return (
    <li className='flex gap-2 items-center'><img src={src} alt={alt} />{children}</li>
  )
}

export default Li