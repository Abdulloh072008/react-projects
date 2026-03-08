import React from 'react'

const Nav2 = ({ children }) => {
    return (
        <div className='flex items-center justify-center h-30'>
            <div  className='max-w-350 w-[90%] flex items-center justify-between'>
                {children}
            </div>
        </div>
    )
}

export default Nav2
