//importo il componente Searchbar
import Searchbar from "./Searchbar";

//creo il componente AppHeader
export default function AppHeader() {

    //eseguo il return
    return (
        <header>
            <div className="logo">
                <img src="../img/logo-boolflix.png" alt="" />
            </div>

            <Searchbar />
        </header>
    )
}