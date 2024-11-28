import { useState } from 'react'
import './App.css'

//importo FilmsContext
import FilmsContext from './contexts/FilmsContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FilmsContext.Provider>

      </FilmsContext.Provider>
    </>
  )
}

export default App
