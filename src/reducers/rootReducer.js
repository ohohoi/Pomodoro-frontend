import { combineReducers } from 'redux'
import updateTimerState from './updateTimerState'
import updateTimerSeconds from './updateTimerSeconds'
import setSoundNoti from './setSoundNoti'

const rootReducer = combineReducers({
    updateTimerState,
    updateTimerSeconds,
    setSoundNoti,
})

export default rootReducer