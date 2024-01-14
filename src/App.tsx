import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { AppThemeProvider } from './shared/contexts'
import { AppBarRodape, AppBarSite, MenuLateral } from './shared/components'

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppBarSite>
          <AppRoutes />
        </AppBarSite>
        <AppBarRodape />
      </BrowserRouter>
    </AppThemeProvider>
  )
}
