import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { ReactNode } from 'react'
import Logo from '../../../images/logo/LOGO_SOL.png'
import CopaVerao from '../../../images/logo/COPA_VERAO.png'
import LogoPatrocinadorMaster from '../../../images/logo/HUNSRUCK.png'
import { Copyright } from '@mui/icons-material'
import { MenuLateral } from './MenuLateral'
const pages = [
  { title: 'Home', path: '/Home' },
  { title: 'Tabela de Jogos', path: '/tabela-de-jogos' },
  { title: 'Resultados', path: '/resultados' },
  { title: 'Estatísticas', path: '/estatisticas' },
  { title: 'Equipes', path: '/equipes' }
]
interface AppBarSiteProps {
  to?: string
  onClick?: (() => void) | undefined
  children: ReactNode
}

export const AppBarSite: React.FC<AppBarSiteProps> = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const navigate = useNavigate()
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ padding: 0, margin: 0 }}>
        <Toolbar disableGutters sx={{ padding: 0, margin: 0 }}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Segoe UI',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            <Box sx={{ margin: 0, padding: 0 }}>
              <img src={Logo} width="120" height="60" />
              <img src={CopaVerao} width="120" height="60" />
            </Box>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map(page => (
                <MenuItem
                  key={page.title}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'inherit', display: 'block' }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Segoe UI',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            <Box height={'50px'}>
              <img src={CopaVerao} width="110" height="50" />
            </Box>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                key={page.title}
                component={Link}
                onClick={handleCloseNavMenu}
                to={page.path}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box height={'50px'}>
              <img src={LogoPatrocinadorMaster} width="110" height="50" />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
