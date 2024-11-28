//importo useState e useContext
import { useState, useContext } from "react";

//importo FilmsContext
import FilmsContext from "../contexts/FilmsContext";

//creo il componente Searchbar
export default function Searchbar() {

    const [searchText, setSearchText] = useState('')

    const [filmsData] = useContext(FilmsContext)



    //creo una costante che filtri il film cercato
    const [filteredFilm, setFilteredFilm] = useState([])


    //creo una funzione che permetta di effettuare la ricerca
    function searchFilm(e) {
        e.preventDefault()

        //faccio una chiamata AJAX per caricare i dati
        /*fetch(`https://api.themoviedb.org/3/search/tv?api_key=bff31b40b387dfa9ed50515734d4b3ce&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => setFilteredFilm(data.results))
            .catch((err) => console.error("Errore nel caricamento dei film:", err))*/

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=bff31b40b387dfa9ed50515734d4b3ce&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => setFilteredFilm(data.results))
            .catch((err) => console.error("Errore nel caricamento dei film:", err))


        const filtered = filmsData.filter((film) => film.title.toLowerCase().includes(searchText.toLowerCase()))

        setFilteredFilm(filtered)



    }

    console.log(filteredFilm);


    return (
        <>
            <form onSubmit={searchFilm}>

                <input type="search" placeholder="Inserisci il nome del film"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <button>Cerca</button>
            </form>

            <ul>
                {/*per le serie tv al posto di title e original title metti name e original name */}
                {filteredFilm && filteredFilm.map((film, index) => (
                    <li key={index}>
                        <h3>{film.title}</h3>
                        <p>Titolo Originale: {film.original_title}</p>
                        <p>Lingua:
                            <img src={`https://flagcdn.com/16x12/${film.original_language.toLowerCase()}.png`} alt="" />
                        </p>
                        <p>Voto: {film.vote_average}</p>
                    </li>
                ))}
            </ul>
        </>
    )

}