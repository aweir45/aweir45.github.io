import React from 'react'
import image from './assets/comingSoon.jpg'

export const App = () => {
    return (
        <div>
            <img className="landingImage" style={{height: "100%", width: "100%" }} alt="Missing Image" src={image}/>
        </div>
    )
}