import React from 'react'
import './ClockRed.css'
import clockSrc from '../../resources/img/clock.png'
import labelSrc from '../../resources/img/min.png'

const ClockRed = () => {
    return (
        <div className="clock-red">
            <img src={ clockSrc } className="clock-red"/>
            <img src={ labelSrc } className="clock-label"/>
        </div>
    )
}

export default ClockRed