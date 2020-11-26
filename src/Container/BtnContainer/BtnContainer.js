import React from 'react'
import './BtnContainer.css'
import BtnStart from '../../presentational/BtnStart/BtnStart'
import BtnPause from '../../presentational/BtnPause/BtnPause'
import BtnStop from '../../presentational/BtnStop/BtnStop'
import { updateTimerState } from '../../actions/actionMaker'
import store from '../../store/store'
import * as timerStates from '../../store/TimerStates'

const BtnContainer = () => {
    const onStartClick = () => {
        const startAction = updateTimerState(timerStates.START)
        store.dispatch(startAction)
    }

    const onPauseClick = () => {
        const pauseAction = updateTimerState(timerStates.PAUSE)
        store.dispatch(pauseAction)
    }

    const onStopClick = () => {
        const stopAction = updateTimerState(timerStates.STOP)
        store.dispatch(stopAction)
    }

    return (
        <div id="btn-container">
            <BtnStart onClick={ onStartClick }/>
            <BtnPause onClick={ onPauseClick }/>
            <BtnStop onClick={ onStopClick }/>
        </div>
    )
}

export default BtnContainer