import { Box, Container, Typography, Link } from '@mui/material'

export const AppBarRodape = () => {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        height: '100%',
        minHeight: '100%',
        position: 'relative',
        paddingBottom: '40px',
        width: '100%',
        maxHeight: '100px',
        backgroundPosition: 'absolute'
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.secondary.light
              : theme.palette.secondary.dark
        }}
      >
        <Container maxWidth="sm"></Container>
      </Box>
    </Box>
  )
}
