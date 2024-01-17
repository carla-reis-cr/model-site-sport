import { Box, Grid } from '@mui/material'
import styled from '@mui/system/styled'
import { useEffect, useState } from 'react'
export const Equipes = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://script.googleusercontent.com/macros/echo?user_content_key=cEaPLvWkCJ2Fu0pkBi9h61TXK5LwnV-qnhNhTgcGRu-xyIhyaQtGnvANgWG6ooAoRuqwZmHcV_5DKqPx_dt98NpDrWxqRsV8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNFFjACSud4v75HG9F-zZdJbp2MrGh2mK5MI1J8fCPLNQKkC15Y7qmh7zi_drlz9qDq5EYnJg7ctnVa9VwYbL_6u4wUoZ85dhdz9Jw9Md8uu&lib=MrhtkAC6OTVQuWoMp5RgU89t8g4NIcXat'
      )
      const jsonData = await response.json()
      setData(jsonData.Times) // Ajuste de acordo com a estrutura do seu JSON
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    }
  }
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
      <div>
        <h1>Dados da Planilha</h1>
        <ul>
          {data.map(time => (
            <li key={time}>{time}</li>
          ))}
        </ul>
      </div>
    </Box>
  )
}
function fetchData() {
  throw new Error('Function not implemented.')
}
