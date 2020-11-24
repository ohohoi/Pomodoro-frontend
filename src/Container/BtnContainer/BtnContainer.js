import React from 'react'
import './BtnContainer.css'
import BtnStart from '../../Presentational/BtnStart/BtnStart'
import BtnPause from '../../Presentational/BtnPause/BtnPause'
import BtnStop from '../../Presentational/BtnStop/BtnStop'
import { updateTimerState } from '../../actions/actionMaker'
import store from '../../store/store'
import * as timerStates from '../../store/timerStates'

const BtnCarrier = () => {
    const onStartClick = () => {
        console.log('start click')
        const startAction = updateTimerState(timerStates.START);
        store.dispatch(startAction);
    }

    return (
        <div id="btn-container">
            <BtnStart onClick={ onStartClick }/>
            <BtnPause/>
            <BtnStop/>
        </div>
    )
}

export default BtnCarrier