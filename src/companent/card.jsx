import React from 'react'

const Card = ({ name, children, about, img, color }) => {
    return (
        <div style={{ boxShadow: "0px 0px 10px green", borderRadius: "20px", padding: "20px", width: "300px" }}>
            <img  src={img} alt="" />
            <h1 style={{color:color}}>
                {name}
            </h1>
            <h2>
                {about}
            </h2>
            {children}
        </div>
    )
}

export default Card

