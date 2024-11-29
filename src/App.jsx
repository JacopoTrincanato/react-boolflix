import './App.css'

import { useState } from 'react'

//importo Searchbar
import Searchbar from './components/Searchbar'

//importo FilmsContext
import FilmsContext from './contexts/FilmsContext'
import FilmList from './components/FilmList'
import TvSeriesList from './components/TvSeriesList'

/*Milestone 3:
stampare a schermo un numero di stelle piene che vanno da 1 a 5,
lasciando le restanti vuote (troviamo le icone in FontAwesome).*/

function App() {

  const [filmsData, setFilmsData] = useState([])

  const [tvSeriesData, setTvSeriesData] = useState([])

  //creo una costante con la parte dell'url iniziale dell'immagine
  const imageInitialUrl = 'https://image.tmdb.org/t/p/w342'

  return (
    <>
      <FilmsContext.Provider value={[filmsData, setFilmsData, tvSeriesData, setTvSeriesData, imageInitialUrl]}>
        <Searchbar></Searchbar>
        <FilmList></FilmList>
        <TvSeriesList></TvSeriesList>
      </FilmsContext.Provider>
    </>
  )
}

export default App
