import * as types from './ActionTypes'

export const updateTimerState = (timerState) => ({
    type: types.UPDATE_TIMER_STATE,
    timerState: timerState,
})

export const increaseSeconds = () => ({
    type: types.INCREASE_SECONDS,
})

export const resetSeconds = () => ({
    type: types.RESET_SECONDS,
})