import CartWidget from "../CartWidget/CartWidget";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()


    return (
        <>
            <div id='nav'>
                <div className='widthNav' id='posButtonPrincipal'>
                    <button>
                        <a className="nav-link" aria-current="page" href="#" onClick={()=>navigate(`/`)}>DISTRIBUIDORA KHG</a>
                    </button>
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg" id="navGround">
                        <div className="container">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={()=>navigate(`/category/Gaseosas`)}>Gaseosas</a>                                    
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={()=>navigate(`/category/Aguas`)}>Aguas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={()=>navigate(`/category/Aguas Saborizadas`)}>Aguas Saborizadas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={()=>navigate(`/category/Cervezas`)}>Cervezas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={()=>navigate(`/category/Vinos`)}>Vinos</a>
                                    </li>
                                </ul>                        
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='widthNav' >
                    <CartWidget/>
                </div>
            </div>
        </>

    )
}

export default Navbar;