import React from 'react'
import './BtnStop.css'
import src from '../../img/stop.svg'

const BtnStop = () => {
    return (
        <div id="stop-btn" className="btn">
            <img src={ src } className="stop" alt="stop button"/>
        </div>
    )
}

export default BtnStop