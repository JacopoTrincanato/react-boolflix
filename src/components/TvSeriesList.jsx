import { useContext } from "react";
import FilmsContext from "../contexts/FilmsContext";

//importo le icone di fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function TvSeriesList() {

    const { tvSeriesData } = useContext(FilmsContext)
    console.log(tvSeriesData);

    return (
        <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {/*per le serie tv al posto di title e original title metti name e original name */}
            {tvSeriesData && tvSeriesData.map((serie, index) => (
                <li key={index}>
                    {serie.poster_path ? (
                        <img className="bordered-img"
                            src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
                            alt={`${serie.name} poster`}
                        />
                    ) : (
                        <p>Immagine non disponibile</p>
                    )}

                    <h3>{serie.name}</h3>
                    <p>Titolo Originale: {serie.original_name}
                    </p>
                    <p>Lingua:

                        <img
                            src={`https://flagcdn.com/16x12/${serie.original_language.toLowerCase()}.png`}
                            alt={serie.original_language}
                        />



                    </p>
                    <p>
                        Voto: {Math.ceil(serie.vote_average / 2) > 0 ? Array.from({ length: Math.ceil(serie.vote_average / 2) }).map(() => <FontAwesomeIcon icon={faStar} className="star-rating" />) : Math.ceil(serie.vote_average / 2)}
                    </p>
                </li>
            ))}
        </ul>
    )
}