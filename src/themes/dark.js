import { createMuiTheme } from '@material-ui/core/styles';
import { primaryAccentDark, primaryAccentTextDark, secondaryAccentDark, secondaryAccentTextDark, backgroundDark, themeDark } from '../AppConfig';
// Dark theme
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: primaryAccentDark,
      AccentText: primaryAccentTextDark
    },
    secondary: {
      main: secondaryAccentDark,
      AccentText: secondaryAccentTextDark
    },
    background: {
      default: backgroundDark,
      paper: themeDark
    }
  }
})

export default theme