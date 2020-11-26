import * as types from '../actions/ActionTypes'

const initialState = {
    seconds: 0
}

const updateTimerSeconds = (state, action) => {
    if (state === undefined) {
        return initialState
    }

    switch(action.type) {
        case types.INCREASE_SECONDS:
            return { 
                seconds: state.seconds + 1 
            }

        case types.RESET_SECONDS:
            return { 
                seconds: 0 
            }
        
        default:
            return state
    }
}

export default updateTimerSeconds