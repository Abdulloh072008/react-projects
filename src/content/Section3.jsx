import React from 'react'

const Section3 = ({ children }) => {
  return (
    <section className=' flex items-center justify-center'>
      <div className='max-w-350px w-[90%] bg-white rounded-[20px]'>
        {children}
      </div>
    </section>
  )
}

export default Section3
