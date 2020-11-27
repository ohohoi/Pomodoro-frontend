import React from 'react'
import './BtnContainer.css'
import BtnStart from '../../presentational/BtnStart/BtnStart'
import BtnPause from '../../presentational/BtnPause/BtnPause'
import BtnReset from '../../presentational/BtnReset/BtnReset'
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

    const onResetClick = () => {
        const resetAction = updateTimerState(timerStates.RESET)
        store.dispatch(resetAction)
    }

    return (
        <div id="btn-container">
            <BtnStart onClick={ onStartClick }/>
            <BtnPause onClick={ onPauseClick }/>
            <BtnReset onClick={ onResetClick }/>
        </div>
    )
}

export default BtnContainer