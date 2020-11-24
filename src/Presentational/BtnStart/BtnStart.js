import React from 'react'
import './BtnStart.css'
import src from '../../img/start.svg'

const StartBtn = ({ onClick }) => {
    return (
        <div id="start-btn" className="btn" onClick={ onClick }>
            <img src={ src } className="start" alt="start button"/>
        </div>
    )
}

export default StartBtn