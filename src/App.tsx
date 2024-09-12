import React from 'react'
import image from './assets/comingSoon.jpg'
import { Map } from './common/Map'
import { parser } from './common/Parser'

export const App = () => {

    const handleClick = () => {
        parser()
    }

    return(
        <div>
            {/* <img className="landingImage" style={{height: "100%", width: "100%" }} alt="Missing Image" src={image}/>
            */}
            <button style={{height: 90, border: 100, color: 'red'}} onClick={handleClick}>Click Me</button>
            <Map />
        </div>
    )

}