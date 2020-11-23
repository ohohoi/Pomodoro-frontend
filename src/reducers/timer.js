import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
}
  
function timer(state = initialState, action) {
    switch (action.type) {
        case types.START:
            return {
                number: 1,
            }
        default:
            return state;
    }
}

export default timer;