import './App.css'

import { useState } from 'react'

//importo AppHeader
import AppHeader from './components/Appheader'

//importo AppMain
import AppMain from './components/AppMain'

//importo FilmsContext
import FilmsContext from './contexts/FilmsContext'

/*Milestone 4:
Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp,
creando un layout completo simil-Netflix:
● Un header che contiene logo e search bar
● Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma
di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio
la poster_path con w342)
● Andando con il mouse sopra una card (on hover), appaiono le informazioni
aggiuntive già prese nei punti precedenti più la overview
Mockup:*/

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
