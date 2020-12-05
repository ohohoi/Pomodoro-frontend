import * as timerStates from '../store/TimerStates'
import store from '../store/store'
import { increase, reset } from './drawClock'
import { updateTimerState } from '../actions/actionMaker'
import './soundNoti'

const interval = 1000
const totalSeconds = 1500
let currTimerState = timerStates.RESET
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
    store.dispatch(updateTimerState(timerStates.RESET))
    
    const soundNotiOn = store.getState().setSoundNoti.soundNotiOn
    if (soundNotiOn) {
        soundNoti()
    }
}

const controlTimer = () => {
    const newTimerState = store.getState().updateTimerState.timerState
    const currSec = store.getState().updateTimerSeconds.seconds
    
    if (newTimerState !== currTimerState) {
        currTimerState = newTimerState

        switch(newTimerState) {
            case timerStates.START:
                startTimer()
                break
                
            case timerStates.PAUSE:
                pauseTimer()
                break

            case timerStates.RESET:
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