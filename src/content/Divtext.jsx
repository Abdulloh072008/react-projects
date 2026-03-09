import React from 'react'
import group from '../assets/Group 62.png'

const Divtext = () => {
    return (
        <div className='flex items-center gap-5 flex-wrap text-white lg:justify-start lg:text-start justify-center text-center' style={{marginTop:"20px"}}>
            <img src={group} alt="" />
            <div>
                <p>Будем доставлять наборы каждый день.</p>
                <p className='lg:w-190' style={{marginTop:"15px"}}>Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа.
                    Заявки принимаются не позднее, чем за день до предполагаемой доставки.</p>
            </div>
        </div>
    )
}

export default Divtext
