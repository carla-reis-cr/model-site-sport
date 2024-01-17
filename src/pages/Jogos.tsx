import { Box, Grid, Paper } from '@mui/material'
import BackgroundPage from '../images/logo/teste1.png'
export const Jogos = () => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${BackgroundPage})`
    }
  }

  return (
    <Paper style={styles.paperContainer}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-1',
          backgroundPosition: 'center',
          width: '100%',
          height: '850px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white', // Cor do texto, ajuste conforme necessário
          fontSize: '2rem' // Tamanho da fonte, ajuste conforme necessário
        }}
      >
        Jogos
      </Box>
    </Paper>
  )
}
