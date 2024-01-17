import { Navigate, Route, Routes } from 'react-router-dom'
import { AppBarRodape, AppBarSite } from '../shared/components'
import { Classificacao, Equipes, Estatisticas, Home, Jogos } from '../pages'
export const AppRoutes = () => {
  console.log('AppRoutes')
  return (
    <div className="app">
      <AppBarSite />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/classificacao" element={<Classificacao />} />
        <Route path="/estatisticas" element={<Estatisticas />} />
        <Route path="/equipes" element={<Equipes />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <AppBarRodape />
    </div>
  )
}
