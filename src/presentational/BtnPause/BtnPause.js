import React, { useEffect, useState } from 'react'
import './BtnPause.css'
import defSrc from '../../resources/img/pause-r.svg'
import hovSrc from '../../resources/img/pause-w.svg'

const PauseBtn = ({ onClick }) => {
    let [src, setSrc] = useState()

    useEffect(() => setSrc(defSrc), [])

    const onMouseOver = () => {
        setSrc(hovSrc)
    }

    const onMouseOut = () => {
        setSrc(defSrc)
    }

    return (
        <div id="pause-btn" className="btn" onClick={ onClick }>
            <img src={ src } 
            className="pause" 
            alt="pause button"
            onMouseOver={ onMouseOver }
            onMouseOut= { onMouseOut }/>
        </div>
    )
}

export default PauseBtn