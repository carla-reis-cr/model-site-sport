import { Box } from '@mui/system'

export const LayoutBasePages = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
        minHeight: '100vh' // Garante que o componente ocupe pelo menos a altura total da viewport
      }}
    >
      teste
    </Box>
  )
}
