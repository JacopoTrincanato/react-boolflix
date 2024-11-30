import { useContext } from "react";
import FilmsContext from "../contexts/FilmsContext";

//importo le icone di fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function FilmList() {

    const { filmsData } = useContext(FilmsContext)

    return (
        <>
            <h2 className="text-center py-4">LISTA DEI FILM</h2>
            <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">

                {filmsData && filmsData.map((film, index) => (
                    <li key={index}>

                        <div className="album">
                            <div className="layover"></div>

                            {film.poster_path ? (
                                <img className="bordered-img"
                                    src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}
                                    alt={film.title}

                                />
                            ) : (
                                <p className="noImage">Immagine non disponibile</p>
                            )}

                            <div className="img-content text-white d-none">
                                <strong>{film.title}</strong>
                                <p><strong>Titolo Originale:</strong> {film.original_title}</p>
                                <p><strong>Lingua:</strong>
                                    <img src={`https://flagcdn.com/16x12/${film.original_language.toLowerCase()}.png`} alt={film.original_language} />
                                </p>
                                <p>
                                    <strong>Voto:</strong> {Math.ceil(film.vote_average / 2) > 0 ? Array.from({ length: Math.ceil(film.vote_average / 2) }).map(() => <FontAwesomeIcon icon={faStar} className="star-rating" />) : Math.ceil(film.vote_average / 2)}
                                </p>

                                <p>
                                    <strong>Overview:</strong>
                                    {film.overview}
                                </p>
                            </div>
                        </div>



                    </li>
                ))}

            </ul>
        </>

    )
}