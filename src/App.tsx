import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { AppThemeProvider } from './shared/contexts'
import { AppBarRodape, AppBarSite, MenuLateral } from './shared/components'

export const App = () => {
  console.log('Routes')

  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  )
}
