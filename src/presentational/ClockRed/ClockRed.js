import React from 'react'
import './ClockRed.css'
import clockSrc from '../../resources/img/clock.png'

const ClockRed = () => {
    return (
        <div className="clock-red">
            <img src={ clockSrc } className="clock-red" alt="clock"/>
        </div>
    )
}

export default ClockRed