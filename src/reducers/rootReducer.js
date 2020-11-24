import { combineReducers } from 'redux';
import updateTimerState from './updateTimerState';

const rootReducer = combineReducers({
    updateTimerState,
});

export default rootReducer;