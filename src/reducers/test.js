import * as types from '../actions/ActionTypes'
import * as timerStates from '../store/timerStates'

const initialState = {
    timerState: timerStates.STOP
}

const testReducer = (state, action) => {
    if (state === undefined) {
        return initialState
    }

    switch(action.type) {
        case types.START:
            return { timerState: timerStates.START }
        
        default:
            return state
    }
}

export default testReducer