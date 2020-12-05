import { increaseSeconds, resetSeconds } from '../actions/actionMaker'
import store from '../store/store'
import './soundNoti'

export const increase = () => {
    const increaseAction = increaseSeconds()
    store.dispatch(increaseAction)
}

export const reset = () => {
    const resetAction = resetSeconds()
    store.dispatch(resetAction)
}