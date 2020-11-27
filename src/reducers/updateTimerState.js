import * as types from '../actions/ActionTypes'
import * as timerStates from '../store/TimerStates'

const initialState = {
    timerState: timerStates.RESET
}

const updateTimerState = (state, action) => {
    if (state === undefined) {
        return initialState
    }

    switch(action.type) {
        case types.UPDATE_TIMER_STATE:
            return { timerState: action.timerState }
        
        default:
            return state
    }
}

export default updateTimerState