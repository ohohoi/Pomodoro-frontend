import { combineReducers } from 'redux';
import updateTimerState from './updateTimerState';
import updateTimerSeconds from './updateTimerSeconds';

const rootReducer = combineReducers({
    updateTimerState,
    updateTimerSeconds,
})

export default rootReducer