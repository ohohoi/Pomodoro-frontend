import React from 'react'
import './ClockRed.css'
import clockSrc from '../../img/clock.png'

const ClockRed = () => {
    return (
        <div className="clock-red">
            <img src={ clockSrc } className="clock-red"/>
        </div>
    )
}

export default ClockRed