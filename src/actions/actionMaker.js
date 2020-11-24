import * as types from './ActionTypes'

export const updateTimerState = (timerState) => ({
    type: types.START,
    timerState: timerState,
})
