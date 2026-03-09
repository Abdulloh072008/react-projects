import React from 'react'

const Button3 = ({ name }) => {
  return (
    <div>
      <button className='border-2 border-[#DFCCB7] text-[black] hover:bg-[#DFCCB7] hover:text-[black] rounded-[20px] w-60' style={{padding:"20px 0px" , marginTop:"20px"}}>{name}</button>
    </div>
  )
}

export default Button3
