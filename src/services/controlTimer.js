import * as timerStates from '../store/TimerStates'
import store from '../store/store'
import { increase, reset } from './drawClock'
import { updateTimerState } from '../actions/actionMaker'

const interval = 1000
const totalSeconds = 1500
let currTimerState = timerStates.STOP
let timerId = 0

const startTimer = () => {
    timerId = setInterval(increase, interval)
}

const pauseTimer = () => {
    clearInterval(timerId)
}

const stopTimer = () => {
    clearInterval(timerId)
    reset()
    store.dispatch(updateTimerState(timerStates.STOP))
}

const controlTimer = () => {
    const newTimerState = store.getState().updateTimerState.timerState
    const currSec = store.getState().updateTimerSeconds.seconds
    
    if (newTimerState !== currTimerState) {
        currTimerState = newTimerState

        switch(newTimerState) {
            case timerStates.START:
                console.log('start timer')
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

    if (currSec === totalSeconds) {
        stopTimer()
    }
}

export default controlTimer