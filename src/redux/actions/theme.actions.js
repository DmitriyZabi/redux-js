import {
  ThemeActionChange,
  ThemeActionDisableButtons,
  ThemeActionEnableButtons,
  ThemeActionInit,
} from '../reducers/theme.reducer'

export const themeActions = {
  init() {
    return { type: ThemeActionInit }
  },
  changeTheme(theme) {
    return { type: ThemeActionChange, payload: theme }
  },
  enableButtons() {
    return { type: ThemeActionEnableButtons }
  },
  disableButtons() {
    return { type: ThemeActionDisableButtons }
  },
}
