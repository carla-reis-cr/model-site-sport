import { Navigate, Route, Routes } from 'react-router-dom'
import { Box, Button, Drawer, IconButton, useTheme } from '@mui/material'
import { useAppThemeContext } from '../shared/contexts'
import Brightness6Icon from '@mui/icons-material/Brightness6'
export const AppRoutes = () => {
  const theme = useTheme()
  const { toggleTheme } = useAppThemeContext()
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                borderRadius: 1
              }}
            >
              <IconButton color="primary" onClick={toggleTheme}>
                <Brightness6Icon />
              </IconButton>
            </Box>
          </Box>
        }
      />
      <Route path="*" element={<Navigate to="/Home" />} />
    </Routes>
  )
}
