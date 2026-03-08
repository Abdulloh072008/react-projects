import React from 'react'

const Borderbutton = ({name}) => {
    return (
        <div>
            <button className='btn border border-[#4D8F76]  rounded-[20px] text-[#4D8F76]' style={{ padding: "7px 20px" }}>{name}</button>
        </div>
    )
}

export default Borderbutton
