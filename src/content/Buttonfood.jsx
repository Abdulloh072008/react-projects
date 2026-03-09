import React from 'react'

const Buttonfood = ({name}) => {
    return (
        <div>
            <button className='border-2 border-[#DFCCB7] text-[black] hover:bg-[#DFCCB7] hover:text-[black] rounded-[30px]' style={{ padding: "5px 20px", marginTop: "20px" }}>{name}</button>
        </div>
    )
}

export default Buttonfood
