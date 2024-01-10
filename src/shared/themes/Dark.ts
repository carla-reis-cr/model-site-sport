import { createTheme } from '@mui/material'
import { yellow, cyan } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#f4cf33',
      dark: '#f4cf33',
      light: '#f4cf33',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#056499',
      dark: '#056499',
      light: '#056499',
      contrastText: '#ffffff'
    },
    background: {
      default: '#303134',
      paper: '#202124'
    }
  }
})
