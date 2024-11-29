//importo FilmList e TvSeriesList
import FilmList from "./FilmList";
import TvSeriesList from "./TvSeriesList";

//creo il componente AppMain
export default function AppMain() {

    //eseguo il return
    return (
        <main>
            <FilmList />
            <TvSeriesList />
        </main>
    )
}