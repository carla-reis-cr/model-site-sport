import { Navigate, Route, Routes } from 'react-router-dom'
import { Button } from '@mui/material'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Button>Teste</Button>} />
      <Route path="*" element={<Navigate to="/Home" />} />
    </Routes>
  )
}
