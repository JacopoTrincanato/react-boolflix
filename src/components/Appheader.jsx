//importo il componente Searchbar
import Searchbar from "./Searchbar";

//creo il componente AppHeader
export default function AppHeader() {

    //eseguo il return
    return (
        <header className="justify-content-between align-items-center p-3 d-flex">
            <div className="logo">
                <img src="../img/logo-boolflix.png" alt="" />
            </div>

            <Searchbar />
        </header>
    )
}