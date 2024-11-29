//importo useState e useContext
import { useState, useContext } from "react";

//importo FilmsContext
import FilmsContext from "../contexts/FilmsContext";

//creo il componente Searchbar
export default function Searchbar() {

    const [searchText, setSearchText] = useState('')

    const { filmsData, setFilmsData, tvSeriesData, setTvSeriesData } = useContext(FilmsContext)

    //creo una funzione che permetta di effettuare la ricerca
    function searchField(e) {
        e.preventDefault()

        //faccio una chiamata AJAX per caricare i dati
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=bff31b40b387dfa9ed50515734d4b3ce&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => setFilmsData(data.results))
            .catch((err) => console.error("Errore nel caricamento:", err))

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=bff31b40b387dfa9ed50515734d4b3ce&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => setTvSeriesData(data.results))
            .catch((err) => console.error("Errore nel caricamento:", err))

    }

    console.log(filmsData);
    console.log(tvSeriesData);

    return (
        <>
            <form onSubmit={searchField}>

                <input type="search" placeholder="Inserisci il nome del film"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

            </form>

        </>
    )

}