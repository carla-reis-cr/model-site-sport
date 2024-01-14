import {
  AppBar,
  Button,
  Container,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  useTheme
} from '@mui/material'
import { Box } from '@mui/system'
import { ReactNode } from 'react'
import SportsIcon from '@mui/icons-material/Sports'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

interface MenuLateralProps {
  children: ReactNode
}

export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {
  const theme = useTheme()
  return (
    <>
      <Drawer
        variant="permanent"
        background-color={theme.palette.secondary}
        sx={{ bgcolor: 'primary.main' }}
      >
        <Box width={theme.spacing(28)} sx={{ bgcolor: 'primary.main' }}>
          <Box flex={1} sx={{ bgcolor: 'primary.main' }}>
            <List component="nav" background-color={theme.palette.primary}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <SportsIcon />
                </ListItemIcon>
                <ListItemText primary="Tabela de Jogos" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <EmojiEventsIcon />
                </ListItemIcon>
                <ListItemText primary="Classificação" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(25)}>
        {children}
      </Box>
    </>
  )
}
