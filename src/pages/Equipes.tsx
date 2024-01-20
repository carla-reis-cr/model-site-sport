import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Paper,
  Select,
  responsiveFontSizes,
  useTheme
} from '@mui/material'
import { useEffect, useState } from 'react'

export const Equipes = () => {
  const theme = useTheme()
  const [data, setData] = useState<
    {
      id: number
      nomeTime: string
      naipe: string
      grupo: string
    }[]
  >([])
  const [filtroNaipe, setFiltroNaipe] = useState('Todos')
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Não é mais necessário fazer a solicitação para o script do Google
      // Uma vez que você está usando dados fixos
      const jsonData = {
        Times: [
          {
            id: 1,
            nomeTime: 'TNT',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 2,
            nomeTime: 'DALLAS',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 3,
            nomeTime: 'MILAN B',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 4,
            nomeTime: 'SANTOS/PIT STOP',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 5,
            nomeTime: 'RAJA CASABLANCA',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 6,
            nomeTime: 'AMIGOS DA COPA',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 7,
            nomeTime: 'MONKEY',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 8,
            nomeTime: 'HOMERO CAR',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 9,
            nomeTime: 'NIGHT BEER',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 10,
            nomeTime: 'HENRIQUE´S',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 11,
            nomeTime: 'PIQUETENSE',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 12,
            nomeTime: 'RESENHA',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 13,
            nomeTime: 'ATLÉTICO CAIENSE',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 14,
            nomeTime: 'RED BULL FUTSAL',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 15,
            nomeTime: 'BALANÇA REDE',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 16,
            nomeTime: 'JARDIM JULIANA',
            naipe: 'Masc',
            grupo: ''
          },
          {
            id: 17,
            nomeTime: 'CLÍNICA FUTSAL',
            naipe: 'Fem.',
            grupo: ''
          },
          {
            id: 18,
            nomeTime: 'RAYO',
            naipe: 'Fem.',
            grupo: ''
          },
          {
            id: 19,
            nomeTime: 'AMIGAS DO COPO',
            naipe: 'Fem.',
            grupo: ''
          },
          {
            id: 20,
            nomeTime: 'PFC',
            naipe: 'Fem.',
            grupo: ''
          },
          {
            id: 21,
            nomeTime: 'FÊNIX',
            naipe: 'Fem.',
            grupo: ''
          },
          {
            id: 22,
            nomeTime: 'GERBAC',
            naipe: 'Fem.',
            grupo: ''
          },
          {
            id: 23,
            nomeTime: 'ATLÉTICO CAIENSE/DEVASTADORAS',
            naipe: 'Fem.',
            grupo: ''
          },
          {
            id: 24,
            nomeTime: 'ANTES DO BAR',
            naipe: 'Fem.',
            grupo: ''
          }
        ]
      }
      setData(jsonData.Times)
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    }
  }
  const filterByNaipe = () => {
    // Se o filtro for 'Todos', retorne todos os times
    if (filtroNaipe === 'Todos') {
      return data
    }
    // Caso contrário, filtre pelos naipe selecionado
    return data.filter(time => time.naipe === filtroNaipe)
  }

  const styles = {
    paperContainer: {
      backgroundImage: '../images/logo/Layout.png',
      width: '100%',
      height: '100%'
    }
  }
  return (
    <Paper style={styles.paperContainer}>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row', // Alterado para linha para que o FormControl fique à direita
          justifyContent: 'space-between', // Adicionado para espaçar os itens na linha
          alignItems: 'flex-start'
        }}
      >
        <Grid container spacing={2}>
          {/* FormControl à direita */}
          <Grid item xs={4} md={8}>
            <Box sx={{ padding: 0, margin: 0 }}>
              <FormControl
                sx={{
                  padding: '10px',
                  margin: '20px'
                }}
              >
                <InputLabel
                  id="filtroNaipe-label"
                  sx={{
                    padding: 0,
                    margin: 0,
                    color: 'white',
                    '&.Mui-focused': {
                      color: 'white' // Manter a cor branca quando estiver focado
                    }
                  }}
                >
                  Filtrar por Tipo
                </InputLabel>
                <Select
                  sx={{
                    height: '40px',
                    width: '150px',
                    color: 'inherit',
                    backgroundColor: 'white'
                  }}
                  labelId="filtroNaipe-label"
                  id="filtroNaipe"
                  value={filtroNaipe}
                  onChange={event => setFiltroNaipe(event.target.value)}
                >
                  <MenuItem value="Todos">Todos</MenuItem>
                  <MenuItem value="Masc">Masculino</MenuItem>
                  <MenuItem value="Fem.">Feminino</MenuItem>
                  {/* Adicione mais opções conforme necessário */}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {/* Box à direita que contém o Paper */}
          <Grid item xs={5} md={9} sx={{ padding: 0, margin: '10px' }}>
            <Box
              sx={{
                padding: 0,
                flexGrow: 1,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white', // Cor do texto, ajuste conforme necessário
                fontSize: '2rem' // Tamanho da fonte, ajuste conforme necessário
              }}
            >
              <Paper
                elevation={3}
                style={{
                  padding: '20px',
                  marginTop: '20px',
                  marginBottom: '20px',
                  width: '1800px',
                  backgroundColor: `rgba(${theme.palette.background.paper}, 0.5)`,
                  boxShadow: 'none'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                  }}
                >
                  <Grid container spacing={2}>
                    {/* Use a função filterByNaipe para exibir os times filtrados */}
                    {filterByNaipe().map(time => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={time.id}>
                        <List
                          sx={{
                            fontFamily: 'Segoe UI',
                            fontSize: '18px',
                            color: 'inherit'
                          }}
                        >
                          <ListItem>{time.nomeTime}</ListItem>
                        </List>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}
