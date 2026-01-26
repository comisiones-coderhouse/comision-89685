function Header(props) {

    console.log(props);
    console.log(props.mensaje);

    return (
        <header>
            <h1>{props.mensaje}</h1>
            <nav>
                <a href="#" id="soy-un-link">link</a>
                <a href="#">link</a>
                <a href="#">link</a>
            </nav>
        </header>
    )
}

export default Header