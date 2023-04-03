
import "./navbar.css";
import {Link} from "react-router-dom"


export const NavBar = ()=>{

    return <div className="container">
        <ul>
            <Link className="links" to="/">Inicio</Link>   
            <Link className="links" to="/celulares">Celulares</Link>   
            <Link className="links" to="/computadoras">Computadoras</Link>   
        </ul>
        <CartWidget/>
    </div>
}


export const CartWidget = ()=>{

    return <ul>
        
            <Link className="links bi bi-cart4" to="carrito">0</Link>
            
        </ul>
    
}
