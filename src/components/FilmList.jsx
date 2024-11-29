import { useContext } from "react";
import FilmsContext from "../contexts/FilmsContext";

export default function FilmList() {

    const [filmsData] = useContext(FilmsContext)

    return (
        <ul>

            {filmsData && filmsData.map((film, index) => (
                <li key={index}>
                    <h3>{film.title}</h3>
                    <p>Titolo Originale: {film.original_title}</p>
                    <p>Lingua:
                        {<img src={`https://flagcdn.com/16x12/${film.original_language.toLowerCase()}.png`} alt="" /> || film.original_language.toLowerCase()}
                    </p>
                    <p>Voto: {Math.ceil(film.vote_average / 2)}</p>
                </li>
            ))}

        </ul>
    )
}