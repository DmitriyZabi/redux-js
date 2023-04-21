export class ThemeActionInit {
  execute(state) {
    return state
  }
}

export class ThemeActionChange {
  execute(state, action) {
    return { ...state, value: action.payload }
  }
}

export class ThemeActionEnableButtons {
  execute(state) {
    return { ...state, disabled: false }
  }
}

export class ThemeActionDisableButtons {
  execute(state) {
    return { ...state, disabled: true }
  }
}

export class ThemeReducer {
  static actions = [
    ThemeActionInit,
    ThemeActionChange,
    ThemeActionEnableButtons,
    ThemeActionDisableButtons,
  ]
  static initialState = {
    value: 'light',
    disabled: false,
  }
  reduce(state = ThemeReducer.initialState, action) {
    if (action && ThemeReducer.actions.includes(action.type)) {
      const instance = new action.type()
      return instance.execute(state, action)
    }
    return state
  }
}
