import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  Toolbar,
  AppBar
} from '@mui/material'
import LogoPatrocinadorMaster from '../../../images/patrocinadores/HUNSRUCK.png'
import Patrocinador2 from '../../../images/patrocinadores/2.png'
import Patrocinador3 from '../../../images/patrocinadores/3.png'
import Patrocinador4 from '../../../images/patrocinadores/4.png'
import Patrocinador5 from '../../../images/patrocinadores/5.png'
import Patrocinador6 from '../../../images/patrocinadores/6.png'
import Patrocinador7 from '../../../images/patrocinadores/7.png'
import Patrocinador9 from '../../../images/patrocinadores/9.png'
import Patrocinador10 from '../../../images/patrocinadores/10.png'
import Patrocinador11 from '../../../images/patrocinadores/11.png'
import Patrocinador12 from '../../../images/patrocinadores/12.png'
import Patrocinador13 from '../../../images/patrocinadores/13.png'
import Patrocinador14 from '../../../images/patrocinadores/14.png'
import Patrocinador15 from '../../../images/patrocinadores/15.png'

export const AppBarRodape = () => {
  return (
    <AppBar position="static">
      <Box
        component="footer"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '20vh',
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.secondary.light
              : theme.palette.secondary.dark,
          padding: '10px'
        }}
      >
        <Box
          sx={{
            py: 1,
            px: 3,
            fontFamily: 'Segoe UI',
            fontWeight: 700,
            alignItems: 'center',
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
            marginBottom: 0
          }}
        >
          Patrocinadores
          <Box sx={{ padding: '10px' }}>
            <Grid container spacing={4}>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador2}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador3}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador4}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador5}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador6}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador7}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador9}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador10}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador11}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador12}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador13}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador14}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
              <Grid xs={6} sm={3}>
                <img
                  src={Patrocinador15}
                  style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </AppBar>
  )
}
