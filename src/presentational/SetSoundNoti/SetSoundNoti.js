import React from 'react'
import './SetSoundNoti.css'
import { setSoundNoti } from '../../actions/actionMaker'
import store from '../../store/store'

const SetSoundNoti = () => {

    const onToggle = () => {
        const action = setSoundNoti()
        store.dispatch(action)
    }

    return (
        <div id="set-sound">
            <label className="label" onChange={ onToggle }>
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