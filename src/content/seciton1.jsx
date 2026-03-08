    import React from 'react'

    const Section1 = ({ children }) => {
    return (
        <section className=' flex items-center justify-center lg:h-100'>
        <div className='max-w-350 w-[90%] flex items-center justify-between flex-wrap gap-10'>
            {children}
        </div>
        </section>
    )
    }

    export default Section1
