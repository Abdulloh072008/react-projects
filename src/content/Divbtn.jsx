import React from 'react'

const Divbtn = ({ name, children, about }) => {
    return (
        <div style={{ marginTop: "20px" ,padding:"20px"}}>
            {name}
            <p className='text-[13px] text-[#DFCCB7]'>{about}</p>
            <div className='flex items-center  overflow-auto gap-5'>
                {children}
            </div>
        </div>
    )
}

export default Divbtn
