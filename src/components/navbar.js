import CartWidget from "./iconocarrito";


function Navbarindex () {
    return (
        
        <nav className="navbar bg-body-tertiary">
            
            <div className="container-fluid">
                <span className="navbar-text">
                    
                    <a className="nav-link active" aria-current="page" href="./public/index.html">Inicio</a>
                    <a className="nav-link active" aria-current="page" href="./public/index.html">Contácto</a>
                    <a className="nav-link active" aria-current="page" href="./public/index.html">Sobre nosotros</a>
                    <CartWidget/>

                </span>
            </div>
        </nav>
    );
};

export default Navbarindex