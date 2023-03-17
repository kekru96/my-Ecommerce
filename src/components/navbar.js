
import "./navbar.css";


export const NavBar = ()=>{

    return <div className="container">
        <ul>
            <li><a href="a">Inicio</a></li>
            <li><a href="a">Comprar</a></li>
            <li><a href="a">Contactanos</a></li>    
        </ul>
        <CartWidget/>
    </div>
}


export const CartWidget = ()=>{

    return <ul>
            <li>
                <a href="a"><i class="bi bi-cart4"></i> 0</a>
            </li>
        </ul>
    
}
