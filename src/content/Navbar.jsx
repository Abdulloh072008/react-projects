import React from 'react'
import vector from '../assets/Vector (36).png'

const Navbar = () => {
  return (
    <div className='flex items-center gap-2 text-white'>
      <img src={vector} alt="Vector" />
      <h1 className='lg:text-[20px]'>Скидка 10% при заказе от 2х недель</h1>
    </div>
  )
}

export default Navbar
