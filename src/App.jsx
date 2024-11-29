import './App.css'

import { useState } from 'react'

//importo AppHeader
import AppHeader from './components/Appheader'

//importo AppMain
import AppMain from './components/AppMain'

//importo FilmsContext
import FilmsContext from './contexts/FilmsContext'

function App() {

  const [filmsData, setFilmsData] = useState([])

  const [tvSeriesData, setTvSeriesData] = useState([])

  return (
    <>
      <FilmsContext.Provider value={{ filmsData, setFilmsData, tvSeriesData, setTvSeriesData }}>
        <AppHeader></AppHeader>
        <AppMain></AppMain>
      </FilmsContext.Provider>
    </>
  )
}

export default App
