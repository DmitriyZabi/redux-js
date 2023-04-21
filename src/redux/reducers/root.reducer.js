import { combineReducers } from 'redux'
import { CounterReducer } from './counter.reducer'
import { ThemeReducer } from './theme.reducer'

export const rootReducer = combineReducers({
  counter: new CounterReducer().reduce,
  theme: new ThemeReducer().reduce,
})
