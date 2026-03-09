import React from 'react'

const Divbutton = ({ name, children, about}) => {
    return (
        <div  style={{marginTop:"20px",padding:"20px"}}>
            {name}
            <p className='text-[13px] text-[#DFCCB7]'>{about}</p>
            <div className='flex items-center justify-between overflow-auto gap-5'>
                {children}
            </div>
        </div>
    )
}

export default Divbutton
