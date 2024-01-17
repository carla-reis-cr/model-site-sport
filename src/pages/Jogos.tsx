import { Box, Grid, Paper } from '@mui/material'
import BackgroundPage from '../images/logo/layout.png'
import LogoPatrocinadorMaster from '../images/patrocinadores/HUNSRUCK.png'
export const Jogos = () => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${BackgroundPage})`
    },
    position: 'relative',
    height: '300px',
    minHeight: '300px'
  }

  return (
    <Paper style={styles.paperContainer}>
      <Box
        sx={{
          flexGrow: 1,
          fontFamily: 'Segoe UI',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'white',
          textDecoration: 'none'
        }}
      >
        Jogos
      </Box>
    </Paper>
  )
}
