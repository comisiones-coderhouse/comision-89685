import { useState } from "react";
import { Button } from 'antd';
import { Badge } from 'antd';

function Header(props) {

    //Estados
    const [items, setItems] = useState(0);


    //Acciones
    function agregarAlCarrito() {
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
            <Badge count={items}>
                <Button shape="circle">
                    🛒
                </Button>
            </Badge>
            <Button onClick={agregarAlCarrito}>agregar a carrito</Button>
        </header>
    )
}

export default Header