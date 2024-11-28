//importo useState e useContext
import { useState, useContext } from "react";

//importo FilmsContext
import FilmsContext from "../contexts/FilmsContext";

//creo il componente Searchbar
export default function Searchbar() {

    const [searchText, setSearchText] = useState('')

    const [filmsData] = useContext(FilmsContext)

    const countryCodes = [
        "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD",
        "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV",
        "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW",
        "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR",
        "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY",
        "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO",
        "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW",
        "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM",
        "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK", "PW", "PS", "PA",
        "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM",
        "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES",
        "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM",
        "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM",
        "ZW"
    ];



    //creo una costante che filtri il film cercato
    const [filteredFilm, setFilteredFilm] = useState([])


    //creo una funzione che permetta di effettuare la ricerca
    function searchFilm(e) {
        e.preventDefault()

        //faccio una chiamata AJAX per caricare i dati
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=bff31b40b387dfa9ed50515734d4b3ce&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => setFilteredFilm(data.results))
            .catch((err) => console.error("Errore nel caricamento dei film:", err))

        /*fetch(`https://api.themoviedb.org/3/search/movie?api_key=bff31b40b387dfa9ed50515734d4b3ce&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => setFilteredFilm(data.results))
            .catch((err) => console.error("Errore nel caricamento dei film:", err))*/


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
                        <p>Lingua:

                            {/*se la lingua corrisponde al codice, fai vedere l'immagine */}
                            {countryCodes && countryCodes.find((c, index) => {

                                return (film.original_language === c.toLowerCase() &&
                                    <div key={index}>
                                        <img src={`https://flagcdn.com/${c.toLowerCase()}.png`} width="30" alt={c} />
                                    </div>)


                            })}</p>
                        <p>Voto: {film.vote_average}</p>
                    </li>
                ))}
            </ul>
        </>
    )

}