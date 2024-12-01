import { useContext } from "react";
import FilmsContext from "../contexts/FilmsContext";

//importo le icone di fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function FilmList() {

    const { filmsData } = useContext(FilmsContext)

    return (
        <>
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
                                <div className="noImage">
                                    <p>Immagine non disponibile</p>
                                </div>
                            )}

                            <div className="img-content">
                                <strong>{film.title}</strong>
                                <p><strong>Titolo Originale:</strong> {film.original_title}</p>
                                <p><strong>Lingua:</strong>
                                    {film.original_language === 'en' ? <img src={`https://flagcdn.com/16x12/us.png`} alt={film.original_language} /> : <img src={`https://flagcdn.com/16x12/${film.original_language.toLowerCase()}.png`} alt={film.original_language} />}
                                </p>
                                <p>
                                    <strong>Voto:</strong> {Math.ceil(film.vote_average / 2) > 0 ? Array.from({ length: Math.ceil(film.vote_average / 2) }).map(() => <FontAwesomeIcon icon={faStar} className="star-rating" />) : Math.ceil(film.vote_average / 2)}
                                </p>

                                <p>
                                    <strong>Overview:</strong>
                                    {film.overview === "" ? 'Overview non disponibile' : film.overview}
                                </p>
                            </div>
                        </div>



                    </li>
                ))}

            </ul>
        </>

    )
}