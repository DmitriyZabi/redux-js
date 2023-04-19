import '@/styles/styles.css'
import '@/styles/scss.scss'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/rootReducer'
import {
  asyncIncrement,
  changeTheme,
  decrement,
  increment,
} from './redux/actions'
import logger from 'redux-logger'

const $counter = document.querySelector('#counter')
const $add = document.querySelector('#add')
const $sub = document.querySelector('#sub')
const $async = document.querySelector('#async')
const $theme = document.querySelector('#theme')

// function logger(state) {
//   return function (next) {
//     return function (action) {
//       console.log('Prev state: ', state.getState())
//       console.log('Action', action)
//       const newState = next(action)
//       console.log('Current state: ', state.getState())
//       return newState
//     }
//   }
// }

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

$add.addEventListener('click', () => {
  store.dispatch(increment())
})
$sub.addEventListener('click', () => {
  store.dispatch(decrement())
})
$async.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})
$theme.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
  store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
  const state = store.getState()
  $counter.textContent = state.counter.toString()
  document.body.className = state.theme.value
  ;[$add, $sub, $async, $theme].forEach((btn) => {
    btn.disabled = state.theme.disabled
  })
})

store.dispatch({ type: 'init' })
