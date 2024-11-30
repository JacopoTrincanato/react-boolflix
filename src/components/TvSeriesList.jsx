import { useContext } from "react";
import FilmsContext from "../contexts/FilmsContext";

//importo le icone di fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function TvSeriesList() {

    const { tvSeriesData } = useContext(FilmsContext)
    console.log(tvSeriesData);

    return (
        <>
            <h2 className="text-center py-4">LISTA DELLE SERIE TV</h2>
            <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">

                {tvSeriesData && tvSeriesData.map((serie, index) => (
                    <li key={index}>

                        <div className="album">
                            <div className="layover"></div>

                            {serie.poster_path ? (
                                <img className="bordered-img"
                                    src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
                                    alt={serie.name}

                                />
                            ) : (
                                <div className="noImage">
                                    <p>Immagine non disponibile</p>
                                </div>
                            )}

                            <div className="img-content">
                                <strong>{serie.name}</strong>
                                <p><strong>Titolo Originale:</strong> {serie.original_name}</p>
                                <p><strong>Lingua:</strong>
                                    <img src={`https://flagcdn.com/16x12/${serie.original_language.toLowerCase()}.png`} alt={serie.original_language} />
                                </p>
                                <p>
                                    <strong>Voto:</strong> {Math.ceil(serie.vote_average / 2) > 0 ? Array.from({ length: Math.ceil(serie.vote_average / 2) }).map(() => <FontAwesomeIcon icon={faStar} className="star-rating" />) : Math.ceil(serie.vote_average / 2)}
                                </p>

                                <p>
                                    <strong>Overview:</strong>
                                    {serie.overview === "" ? 'Overview non disponibile' : serie.overview}
                                </p>
                            </div>
                        </div>



                    </li>
                ))}

            </ul>
        </>
    )
}