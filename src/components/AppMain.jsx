//importo FilmList e TvSeriesList
import FilmList from "./FilmList";
import TvSeriesList from "./TvSeriesList";

//creo il componente AppMain
export default function AppMain() {

    //eseguo il return
    return (
        <main>
            <div className="container align-items-center">

                <h2 className="text-center py-4">LISTA DEI FILM</h2>

                <FilmList />

                <h2 className="text-center py-4">LISTA DELLE SERIE TV</h2>
                <TvSeriesList />



            </div>

        </main>
    )
}