import * as types from '../actions/ActionTypes'

const initialState = {
    soundNotiOn: false
}

const setSoundNoti = (state, action) => {
    if (state === undefined) {
        return initialState
    }

    if (action.type === types.SET_SOUND_NOTI) {
        return {
            soundNotiOn: !state.soundNotiOn
        }
    }
    else return state
}

export default setSoundNoti