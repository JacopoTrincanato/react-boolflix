import { useContext } from "react";
import FilmsContext from "../contexts/FilmsContext";

//importo le icone di fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function FilmList() {

    const { filmsData } = useContext(FilmsContext)

    return (
        <ul>

            {filmsData && filmsData.map((film, index) => (
                <li key={index}>
                    {film.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}
                            alt={`${film.title} poster`}
                        />
                    ) : (
                        <p>Immagine non disponibile</p>
                    )}
                    <h3>{film.title}</h3>
                    <p>Titolo Originale: {film.original_title}</p>
                    <p>Lingua:
                        <img src={`https://flagcdn.com/16x12/${film.original_language.toLowerCase()}.png`} alt={film.original_language} />
                    </p>
                    <p>
                        Voto: {Math.ceil(film.vote_average / 2) > 0 ? Array.from({ length: Math.ceil(film.vote_average / 2) }).map(() => <FontAwesomeIcon icon={faStar} className="star-rating" />) : Math.ceil(film.vote_average / 2)}
                    </p>
                </li>
            ))}

        </ul>
    )
}