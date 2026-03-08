import React from 'react'

const Nav = ({ children }) => {
  return (
    <div className='bg-[#A98C64] flex items-center justify-center h-16'>
        <div className='max-w-350 w-[90%] mx-auto flex items-center justify-center lg:gap-35 '>
        {children}
        </div>
    </div>
  )
}

export default Nav
