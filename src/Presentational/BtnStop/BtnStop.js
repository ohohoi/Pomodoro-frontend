import React from 'react'
import './BtnStop.css'
import src from '../../img/stop.svg'

const BtnStop = ({ onClick }) => {
    return (
        <div id="stop-btn" className="btn" onClick={ onClick }>
            <img src={ src } className="stop" alt="stop button"/>
        </div>
    )
}

export default BtnStop