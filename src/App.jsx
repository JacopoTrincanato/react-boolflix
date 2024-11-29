import './App.css'

import { useState } from 'react'

//importo Searchbar
import Searchbar from './components/Searchbar'

//importo FilmsContext
import FilmsContext from './contexts/FilmsContext'
import FilmList from './components/FilmList'
import TvSeriesList from './components/TvSeriesList'

/*Milestone 3:
In questa milestone come prima cosa aggiungiamo la copertina del film o della serie
al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo
perché poi potremo generare da quella porzione di URL tante dimensioni diverse.
Dovremo prendere quindi l’URL base delle immagini di TMDB:
https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare
(troviamo tutte le dimensioni possibili a questo link:
https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la
parte finale dell’URL passata dall’API.
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da
permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5,
lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze
piene (o mezze vuote :P) */

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
