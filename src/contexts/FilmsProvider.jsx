//importo useState e useEffect
import { useState, useEffect } from "react";

//importo FilmContext
import FilmsContext from "./FilmsContext";

//creo il provider
export default function FilmsProvider({ children }) {
    const [filmsData, setFilmsData] = useState([])

    //faccio una chiamata AJAX per caricare i dati
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=bff31b40b387dfa9ed50515734d4b3ce&query=")
            .then((res) => res.json())
            .then((data) => setFilmsData(data.results))
            .catch((err) => console.error("Errore nel caricamento dei film:", err))
    }, []);

    return (
        <FilmsContext.Provider value={[filmsData, setFilmsData]}>
            {children}
        </FilmsContext.Provider>
    )
}
