import * as React from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Modal,
  Paper,
  Select,
  SelectChangeEvent,
  useTheme
} from '@mui/material'
import { useEffect, useState } from 'react'
import BackGroundPage from '../images/logo/Layout.png'

export const Equipes = () => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [fullWidth, setFullWidth] = React.useState(true)
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm')
  const [data, setData] = useState<
    {
      id: number
      nomeTime: string
      naipe: string
      grupo: string
      nomeImage?: string
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
            naipe: 'Masculino',
            grupo: 'M3',
            nomeImage: 'TNT'
          },
          {
            id: 2,
            nomeTime: 'DALLAS',
            naipe: 'Masculino',
            grupo: 'M1',
            nomeImage: 'DALLAS'
          },
          {
            id: 3,
            nomeTime: 'MILAN B',
            naipe: 'Masculino',
            grupo: 'M2',
            nomeImage: 'MILAN_B'
          },
          {
            id: 4,
            nomeTime: 'SANTOS/PIT STOP',
            naipe: 'Masculino',
            grupo: 'M2',
            nomeImage: 'SANTOS_PIT_STOP'
          },
          {
            id: 5,
            nomeTime: 'RAJA CASABLANCA',
            naipe: 'Masculino',
            grupo: 'M1',
            nomeImage: 'RAJA_CASABLANCA'
          },
          {
            id: 6,
            nomeTime: 'AMIGOS DA COPA',
            naipe: 'Masculino',
            grupo: 'M3',
            nomeImage: 'AMIGOS_DA_COPA'
          },
          {
            id: 7,
            nomeTime: 'MONKEY',
            naipe: 'Masculino',
            grupo: 'M3',
            nomeImage: 'MONKEY'
          },
          {
            id: 8,
            nomeTime: 'HOMERO CAR',
            naipe: 'Masculino',
            grupo: 'M4',
            nomeImage: 'HOMERO_CAR'
          },
          {
            id: 9,
            nomeTime: 'NIGHT BEER',
            naipe: 'Masculino',
            grupo: 'M4',
            nomeImage: 'NIGHT_BEER'
          },
          {
            id: 10,
            nomeTime: 'HENRIQUE´S',
            naipe: 'Masculino',
            grupo: 'M1',
            nomeImage: 'HENRIQUE_S'
          },
          {
            id: 11,
            nomeTime: 'PIQUETENSE',
            naipe: 'Masculino',
            grupo: 'M4',
            nomeImage: 'PIQUETENSE'
          },
          {
            id: 12,
            nomeTime: 'RESENHA',
            naipe: 'Masculino',
            grupo: 'M1',
            nomeImage: 'RESENHA'
          },
          {
            id: 13,
            nomeTime: 'ATLÉTICO CAIENSE',
            naipe: 'Masculino',
            grupo: 'M4',
            nomeImage: 'ATLÉTICO_CAIENSE'
          },
          {
            id: 14,
            nomeTime: 'RED BULL FUTSAL',
            naipe: 'Masculino',
            grupo: 'M2',
            nomeImage: 'RED_BULL_FUTSAL'
          },
          {
            id: 15,
            nomeTime: 'BALANÇA REDE',
            naipe: 'Masculino',
            grupo: 'M2',
            nomeImage: 'BALANCA_REDE'
          },
          {
            id: 16,
            nomeTime: 'JARDIM LUCIANA',
            naipe: 'Masculino',
            grupo: 'M3',
            nomeImage: 'JARDIM_LUCIANA'
          },
          {
            id: 17,
            nomeTime: 'CLÍNICA FUTSAL',
            naipe: 'Feminino',
            grupo: 'F2',
            nomeImage: 'CLINICA_FUTSAL'
          },
          {
            id: 18,
            nomeTime: 'RAYO',
            naipe: 'Feminino',
            grupo: 'F1',
            nomeImage: 'RAYO'
          },
          {
            id: 19,
            nomeTime: 'AMIGAS DO COPO',
            naipe: 'Feminino',
            grupo: 'F1',
            nomeImage: 'AMIGAS_DO_COPO'
          },
          {
            id: 20,
            nomeTime: 'PFC',
            naipe: 'Feminino',
            grupo: 'F1',
            nomeImage: 'PFC'
          },
          {
            id: 21,
            nomeTime: 'FÊNIX',
            naipe: 'Feminino',
            grupo: 'F2',
            nomeImage: 'FÊNIX'
          },
          {
            id: 22,
            nomeTime: 'GERBAC',
            naipe: 'Feminino',
            grupo: 'F1',
            nomeImage: 'GERBAC'
          },
          {
            id: 23,
            nomeTime: 'ATLÉTICO CAIENSE / DEVASTADORAS',
            naipe: 'Feminino',
            grupo: 'F2',
            nomeImage: 'ATLÉTICO_CAIENSE_DEVASTADORAS'
          },
          {
            id: 24,
            nomeTime: 'ANTES DO BAR / IMPACTO',
            naipe: 'Feminino',
            grupo: 'F2',
            nomeImage: 'ANTES_DO_BAR_IMPACTO'
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

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    // @ts-expect-error autofill of arbitrary value is not handled.
    setMaxWidth(event.target.value)
  }

  const handleFullWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullWidth(event.target.checked)
  }

  const styles = {
    paperContainer: {
      backgroundImage: '/images/site/Layout.png',
      width: '100%',
      height: '100%'
    }
  }
  return (
    <Paper style={styles.paperContainer}>
      <Box sx={{ direction: 'left', textAlign: 'left', padding: 0, margin: 0 }}>
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
              <MenuItem value="Masculino">Masculino</MenuItem>
              <MenuItem value="Feminino">Feminino</MenuItem>
              {/* Adicione mais opções conforme necessário */}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row', // Alterado para linha para que o FormControl fique à direita
          justifyContent: 'space-between', // Adicionado para espaçar os itens na linha
          alignItems: 'flex-start'
        }}
      >
        <Grid container spacing={2} sx={{ padding: 0, margin: 0 }}>
          {/* Box à direita que contém o Paper */}
          <Grid item xs={8} md={12} sx={{ padding: 0, margin: 0 }}>
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
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                          }}
                        >
                          {/* Adicione a imagem aqui (substitua 'SUA_IMAGEM_URL' pelo URL real da sua imagem) */}{' '}
                          <React.Fragment>
                            <Button onClick={handleClickOpen}>
                              <img
                                src={`/images/Times/logos/${time.naipe}/${time.nomeImage}.png`}
                                style={{
                                  padding: 0,
                                  margin: 0,
                                  width: '100%',
                                  maxWidth: '150px',
                                  height: 'auto'
                                }}
                              />
                            </Button>

                            <Dialog
                              sx={{
                                width: '100%',
                                backgroundColor: 'transparent'
                              }}
                              fullWidth={fullWidth}
                              maxWidth={maxWidth}
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="responsive-dialog-title"
                              PaperProps={{
                                style: {
                                  width: '100%',
                                  backgroundColor: 'white',
                                  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'
                                }
                              }}
                            >
                              <DialogTitle>Optional sizes</DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  You can set my maximum width and whether to
                                  adapt or not. You can set my maximum width and
                                  whether to adapt or not. You can set my
                                  maximum width and whether to adapt or not. You
                                  can set my maximum width and whether to adapt
                                  or not.
                                </DialogContentText>
                              </DialogContent>
                            </Dialog>
                          </React.Fragment>
                          <List
                            sx={{
                              fontFamily: 'Segoe UI',
                              fontSize: '18px',
                              color: 'inherit',
                              textAlign: 'center',
                              marginTop: '8px'
                            }}
                          >
                            <ListItem>{time.nomeTime}</ListItem>
                            <ListItem>Grupo {time.grupo}</ListItem>
                          </List>
                        </Box>
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
