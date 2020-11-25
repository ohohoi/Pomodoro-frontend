import React, { useEffect } from 'react'
import './ClockContainer.css'
import ClockRed from '../../presentational/ClockRed/ClockRed'
import ClockWhite from '../../presentational/ClockWhite/ClockWhite'
import store from '../../store/store'
import * as timerStates from '../../store/TimerStates'

const ClockCarrier = () => {
    let currTimerState = timerStates.STOP

    const startTimer = () => {
        console.log('start');
    }

    const pauseTimer = () => {
        console.log('pause');
    }

    const stopTimer = () => {
        console.log('stop');
    }

    const controlTimer = () => {
        const newTimerState = store.getState().updateTimerState.timerState
        
        if (newTimerState !== currTimerState) {
            currTimerState = newTimerState

            switch(newTimerState) {
                case timerStates.START:
                    startTimer()
                    break
                    
                case timerStates.PAUSE:
                    pauseTimer()
                    break

                case timerStates.STOP:
                    stopTimer()
                    break

                default:
                    break

            }
        }
    }

    const subscribe = () => {
        store.subscribe(controlTimer)
    }

    useEffect(subscribe)

    return (
        <div id="clock-container">
            <ClockRed/>
            <ClockWhite/>
        </div>
    )
}

export default ClockCarrier