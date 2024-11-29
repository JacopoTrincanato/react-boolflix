import { useContext } from "react";
import FilmsContext from "../contexts/FilmsContext";

export default function TvSeriesList() {

    const [tvSeriesData] = useContext(FilmsContext)

    return (
        <ul>
            {/*per le serie tv al posto di title e original title metti name e original name */}
            {tvSeriesData && tvSeriesData.map((serie, index) => (
                <li key={index}>
                    <h3>{serie.name}</h3>
                    <p>Titolo Originale: {serie.original_name}</p>
                    <p>Lingua:
                        <img src={`https://flagcdn.com/16x12/${serie.original_language.toLowerCase()}.png`} alt="" />
                    </p>
                    <p>Voto: {Math.ceil(serie.vote_average / 2)}</p>
                </li>
            ))}
        </ul>
    )
}