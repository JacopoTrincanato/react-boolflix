/*Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo
scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
film trovato:
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto */

//importo useState e useContext
import { useState, UseE, useContext } from "react";
import FilmsContext from "../contexts/FilmsContext";

//creo il componente Searchbar
export default function Searchbar() {

    const [searchText, setSearchText] = useState('')

    const [filmsData] = useContext(FilmsContext)
    console.log(filmsData);


    //creo una costante che filtri il film cercato
    const [filteredFilm, setFilteredFilm] = useState([])


    //creo una funzione che permetta di effettuare la ricerca
    function searchFilm(e) {
        e.preventDefault()

        //faccio una chiamata AJAX per caricare i dati

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
                {filteredFilm && filteredFilm.map((film, index) => (
                    <li key={index}>
                        <h3>{film.title}</h3>
                        <p>Titolo Originale: {film.original_title}</p>
                        <p>Lingua: {film.original_language}</p>
                        <p>Voto: {film.vote_average}</p>
                    </li>
                ))}
            </ul>
        </>
    )

}