import React from 'react'

const Buttonnav = () => {
    return (
        <div>
            <button className='lg:flex hidden items-center gap-2 text-white text-[20px] '>Заказать<span><svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            </span></button>
        </div>
    )
}

export default Buttonnav
