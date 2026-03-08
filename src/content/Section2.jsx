import React from 'react'

const Section2 = ({ children }) => {
  return (
    <section className='flex items-center justify-center lg:h-30' style={{margin:"50px 0px"}}>
      <div className='max-w-350 w-[90%] bg-[#E2DDC0] rounded-[20px]' style={{ padding: "20px" }}>
        {children}
      </div>
    </section>
  )
}

export default Section2
