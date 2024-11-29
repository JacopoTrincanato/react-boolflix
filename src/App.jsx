import './App.css'

import { useState } from 'react'

/*Milestone 2:
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando
attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di
risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv */

//importo Searchbar
import Searchbar from './components/Searchbar'

//importo FilmsContext
import FilmsContext from './contexts/FilmsContext'
import FilmList from './components/FilmList'
import TvSeriesList from './components/TvSeriesList'

function App() {

  const [filmsData, setFilmsData] = useState([])

  const [tvSeriesData, setTvSeriesData] = useState([])

  return (
    <>
      <FilmsContext.Provider value={[filmsData, setFilmsData, tvSeriesData, setTvSeriesData]}>
        <Searchbar></Searchbar>
        <FilmList></FilmList>
        <TvSeriesList></TvSeriesList>
      </FilmsContext.Provider>
    </>
  )
}

export default App
