import ItemListContainer from "./itemlist";
import Navbarindex from "./navbar";

function Main () {
    return (
        <main className="mainIndex">
            <h1 className="nombreTienda">Monitorealo</h1> 
            <Navbarindex/>
            <ItemListContainer/>
            


        </main>
    );
};

export default Main