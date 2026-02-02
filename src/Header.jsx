import { useState } from "react";

function Header(props) {

    //Estados
    const [items,setItems] = useState(0);

    
    //Acciones
    //setItems(10);
    function agregarAlCarrito(){
        setItems(10)
    }
    

    //Vista
    return (
        <header>
            <h1>{props.mensaje}</h1>
            <nav>
                <a href="#" id="soy-un-link">link</a>
                <a href="#">link</a>
                <a href="#">link</a>
            </nav>
            <button>
                🛒 {items}
            </button>
            <button onClick={agregarAlCarrito}>agregar a carrito</button>
        </header>
    )
}

export default Header