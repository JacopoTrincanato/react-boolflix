import './App.css'

//importo Searchbar
import Searchbar from './components/Searchbar'

//importo FilmsContext
import FilmsProvider from './contexts/FilmsProvider'

function App() {

  return (
    <>
      <FilmsProvider>
        <Searchbar></Searchbar>
      </FilmsProvider>
    </>
  )
}

export default App
