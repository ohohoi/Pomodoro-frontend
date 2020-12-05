import React from 'react'
import './SetSoundNoti.css'

const SetSoundNoti = () => {
    return (
        <div id="set-sound">
            <label className="label">
                sound alarm
                <div className="toggle">
                    <input className="toggle-state" type="checkbox"/>
                    <div className="indicator"></div>
                </div>
            </label>
        </div>
    )
}

export default SetSoundNoti