import React from 'react'
import user from '../assets/image.png'

const Image = () => {
    return (
        <div>
        <img style={{ width: "100px", height: "100px" ,display:"block"}} src={user} alt="" />
        </div>
  )
}

export default Image
