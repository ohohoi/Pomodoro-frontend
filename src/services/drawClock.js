import { increaseSeconds, resetSeconds } from '../actions/actionMaker'
import store from '../store/store'

export const increase = () => {
    const increaseAction = increaseSeconds()
    store.dispatch(increaseAction)
}

export const reset = () => {
    const resetAction = resetSeconds()
    store.dispatch(resetAction)
}