//importo useState e useContext
import { useState, useContext } from "react";

//importo FilmsContext
import FilmsContext from "../contexts/FilmsContext";

//creo il componente Searchbar
export default function Searchbar() {

    const [searchText, setSearchText] = useState('')

    const [filmsData, setFilmsData, tvSeriesData, setTvSeriesData] = useContext(FilmsContext)

    //creo una costante che filtri il film cercato
    //const [filteredFilm, setFilteredFilm] = useState([])

    //creo una costante che filtri la serie cercata
    //const [filteredTvSeries, setFilteredTvSeries] = useState([])


    //creo una funzione che permetta di effettuare la ricerca
    function searchField(e) {
        e.preventDefault()

        //faccio una chiamata AJAX per caricare i dati
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=bff31b40b387dfa9ed50515734d4b3ce&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => setFilmsData(data.results))
            .catch((err) => console.error("Errore nel caricamento:", err))

        //const filteredFilm = filmsData.filter((film) => film.title.toLowerCase().includes(searchText.toLowerCase()))

        //setFilteredFilm(filteredFilm)

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=bff31b40b387dfa9ed50515734d4b3ce&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => setTvSeriesData(data.results))
            .catch((err) => console.error("Errore nel caricamento:", err))

        //const filteredTvSeries = tvSeriesData.filter((serie) => serie.name.toLowerCase().includes(searchText.toLowerCase()))

        //setFilteredTvSeries(filteredTvSeries)

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

                <button>Cerca</button>
            </form>

        </>
    )

}