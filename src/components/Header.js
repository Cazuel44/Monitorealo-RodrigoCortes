import Navbarindex from "../components/navbar"

function Header() {
    return(
        <div className="hederIndex">
           {/*  <img className="logoTienda" src="img/storelogo.png" alt="" /> */}
            <h1 className="nombreTienda">Monitorealo</h1> 
            <Navbarindex/>
        </div>
    );
};

export default Header