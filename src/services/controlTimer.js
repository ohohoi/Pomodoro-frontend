import * as timerStates from '../store/TimerStates'
import store from '../store/store'

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

export default controlTimer