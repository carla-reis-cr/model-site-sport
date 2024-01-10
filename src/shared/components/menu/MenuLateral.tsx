import { Button, Drawer, TextField, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { ReactNode } from 'react'

interface MenuLateralProps {
  children: ReactNode
}

export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {
  const theme = useTheme()
  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(25)}>
          <Box
            height={theme.spacing(3)}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            margin={theme.spacing(1)}
          >
            <Button>Jogos</Button>
          </Box>
          <Box
            height={theme.spacing(3)}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            margin={theme.spacing(1)}
          >
            <Button>Classificação</Button>
          </Box>
          <Box
            height={theme.spacing(3)}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            margin={theme.spacing(1)}
          >
            <Button>Noticias</Button>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(25)}>
        {children}
      </Box>
    </>
  )
}
