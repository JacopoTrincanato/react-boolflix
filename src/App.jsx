import './App.css'

import { useState } from 'react'

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
