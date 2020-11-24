import * as types from './ActionTypes'

export const updateTimerState = (timerState) => ({
    type: types.UPDATE_TIMER_STATE,
    timerState: timerState,
})
