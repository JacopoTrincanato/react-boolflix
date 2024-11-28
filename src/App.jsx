import './App.css'

import { useState } from 'react'

/*Milestone 2:
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della
nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della
nazione ritornata dall’API (le flag non ci sono in FontAwesome).
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando
attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di
risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv */

//importo Searchbar
import Searchbar from './components/Searchbar'

//importo FilmsContext
import FilmsContext from './contexts/FilmsContext'

function App() {

  const [filmsData, setFilmsData] = useState([])

  return (
    <>
      <FilmsContext.Provider value={[filmsData, setFilmsData]}>
        <Searchbar></Searchbar>
      </FilmsContext.Provider>
    </>
  )
}

export default App
