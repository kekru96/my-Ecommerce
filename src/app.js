import "./app.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {NavBar} from "./components/navbar.js"

import {CardList} from "./components/cardList.js"
import {Carrito} from "./components/carrito.js"
import {Item} from "./components/item.js"
import {Celulares} from "./pages/celulares.js"
import {Computadoras} from "./pages/computadoras.js"


export const App = () =>{
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<CardList/>}></Route>
                <Route path="/carrito" element={<Carrito/>}></Route>
                <Route path="/item/:id" element={<Item/>}></Route>
                <Route path="/celulares" element={<Celulares/>}></Route>
                <Route path="/computadoras" element={<Computadoras/>}></Route>
            </Routes>

        </Router>

    )
}