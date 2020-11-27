import React, { useEffect, useState } from 'react'
import './BtnReset.css'
import defSrc from '../../img/reset-r.svg'
import hovSrc from '../../img/reset-w.svg'

const BtnStop = ({ onClick }) => {
    let [src, setSrc] = useState()

    useEffect(() => setSrc(defSrc), [])

    const onMouseOver = () => {
        setSrc(hovSrc)
    }

    const onMouseOut = () => {
        setSrc(defSrc)
    }

    return (
        <div id="reset-btn" className="btn" onClick={ onClick }>
            <img src={ src } 
            className="reset" 
            alt="reset button"
            onMouseOver={ onMouseOver }
            onMouseOut= { onMouseOut }/>
        </div>
    )
}

export default BtnStop