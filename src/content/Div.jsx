import React from 'react'

const Div = ({ name,children }) => {
  return (
    <div className='bg-[#A2BE95] rounded-bl-[20px] rounded-br-[20px]' style={{padding:"20px" ,marginTop:"20px"}}>
        <div className='flex items-center justify-between  gap-5 flex-wrap'  >
      {children}
        </div>
     <p className='text-center w-84 text-white' style={{marginTop:"10px"}}>{name}</p>
    </div>
  )
}

export default Div
