import { createTheme } from '@mui/material'
import { yellow, cyan } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#f4cf33',
      dark: yellow[600],
      light: yellow[800],
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#056499',
      dark: '#056499',
      light: '#056499',
      contrastText: '#ffffff'
    },
    background: {
      default: '#056499',
      paper: '#ffffff'
    }
  }
})
