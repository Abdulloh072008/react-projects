import React from 'react'
import group from '../assets/Group 76.png'

const Section3text = () => {
  return (
    <div className='flex items-center justify-between flex-wrap gap-5' style={{marginBottom:"20px",padding:"20px"}}>
      <h1 className='lg:text-[45px] text-[30px]'>Программа питания</h1>
      <div className='flex items-center gap-2'>
        <img src={group} alt="" />
        <p className=' text-[green]'>Каждый день новое меню</p>
      </div>
    </div>
  )
}

export default Section3text
