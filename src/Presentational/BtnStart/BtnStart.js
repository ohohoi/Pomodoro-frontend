import React, { useEffect, useState } from 'react'
import './BtnStart.css'
import defSrc from '../../img/start-r.svg'
import hovSrc from '../../img/start-w.svg'

const StartBtn = ({ onClick }) => {
    let [src, setSrc] = useState()

    useEffect(() => setSrc(defSrc), [])

    const onMouseOver = () => {
        setSrc(hovSrc)
    }

    const onMouseOut = () => {
        setSrc(defSrc)
    }

    return (
        <div id="start-btn" className="btn" onClick={ onClick }>
            <img src={ src } 
                className="start" 
                alt="start button"
                onMouseOver={ onMouseOver }
                onMouseOut= { onMouseOut }/>
        </div>
    )
}

export default StartBtn