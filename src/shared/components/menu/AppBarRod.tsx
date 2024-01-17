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
    <footer className="footer" style={{ flexShrink: 0, padding: '20px' }}>
      <Container maxWidth="xl" sx={{ flexGrow: 1, padding: 0, margin: 0 }}>
        <Toolbar disableGutters sx={{ padding: 0, margin: -5.5 }}>
          <Box
            component="footer"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              py: 4,
              px: 4,
              mt: 'auto',
              backgroundColor: theme =>
                theme.palette.mode === 'light'
                  ? theme.palette.secondary.light
                  : theme.palette.secondary.dark
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                py: 1,
                px: 1,
                fontFamily: 'Segoe UI',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Patrocinadores
              <Box sx={{ padding: '10px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <img src={Patrocinador2} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador3} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador4} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador5} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador6} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador7} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador9} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador10} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador11} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador12} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador13} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador14} width="130" height="70" />
                  </Grid>
                  <Grid item xs={2}>
                    <img src={Patrocinador15} width="130" height="70" />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </footer>
  )
}
