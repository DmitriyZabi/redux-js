export class CounterActionInit {
  execute(state) {
    return state
  }
}

export class CounterActionIncrement {
  execute(state) {
    return ++state
  }
}

export class CounterActionDecrement {
  execute(state) {
    return --state
  }
}

export class CounterReducer {
  static actions = [
    CounterActionInit,
    CounterActionIncrement,
    CounterActionDecrement,
  ]
  static initialState = 0
  reduce(state = CounterReducer.initialState, action) {
    if (action && CounterReducer.actions.includes(action.type)) {
      const instance = new action.type()
      return instance.execute(state, action)
    }
    return state
  }
}
