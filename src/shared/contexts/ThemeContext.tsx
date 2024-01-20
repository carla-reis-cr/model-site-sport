import { ThemeProvider } from '@emotion/react'
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { DarkTheme, LightTheme } from '../themes'
import { Box } from '@mui/material'

interface IThemeContextData {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
}
interface IAppThemeProviderProps {
  children?: ReactNode
}
const ThemeContextApp = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
  return useContext(ThemeContextApp)
}
export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children
}) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')
  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => (oldThemeName === 'light' ? 'dark' : 'light'))
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme
    return DarkTheme
  }, [themeName])
  return (
    <ThemeContextApp.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100%"
          height="100%"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContextApp.Provider>
  )
}
