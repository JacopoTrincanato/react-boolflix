import './App.css'

import { useState } from 'react'

//importo AppHeader
import AppHeader from './components/Appheader'

//importo AppMain
import AppMain from './components/AppMain'

//importo FilmsContext
import FilmsContext from './contexts/FilmsContext'

function App() {

  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY

  const [filmsData, setFilmsData] = useState([])

  const [tvSeriesData, setTvSeriesData] = useState([])

  return (
    <>
      <FilmsContext.Provider value={{ filmsData, setFilmsData, tvSeriesData, setTvSeriesData, api_key }}>
        <AppHeader></AppHeader>
        <AppMain></AppMain>
      </FilmsContext.Provider>
    </>
  )
}

export default App
