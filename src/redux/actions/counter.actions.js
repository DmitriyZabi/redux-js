import {
  CounterActionDecrement,
  CounterActionIncrement,
  CounterActionInit,
} from '../reducers/counter.reducer'
import { themeActions } from './theme.actions'

export const counterActions = {
  init() {
    return { type: CounterActionInit }
  },
  increment() {
    return { type: CounterActionIncrement }
  },
  decrement() {
    return { type: CounterActionDecrement }
  },
  asyncIncrement() {
    const action = this.increment
    return function (dispatch) {
      dispatch(themeActions.disableButtons())
      setTimeout(() => {
        dispatch(action())
        dispatch(themeActions.enableButtons())
      }, 2000)
    }
  },
}
