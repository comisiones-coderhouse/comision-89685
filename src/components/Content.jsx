import { useState } from "react";
import { Image } from 'antd';
import miImagen from "../images/hero-background.jpg";

function Content() {

    //estados   
    const [isOpen, setIsOpen] = useState(false);

    //acciones
    function handleTogglePopup() {
        setIsOpen(true);
    };

    function handleClosePopup() {
        setIsOpen(false);
    }


    //vista
    return (
        <main>
            
            <Image src="./hero-background.jpg" alt="Hero background" width={300}/>
            <Image src={miImagen} alt="Hero background" width={300}/>
        

            <h2>Home</h2>
            <button onClick={handleTogglePopup}>abrir popup</button>
            {isOpen == true ? (
                <div className="popup">
                    <h3>Soy el Popup</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure adipisci reiciendis quidem ratione soluta laudantium laboriosam harum aspernatur atque vel?</p>
                    <button onClick={handleClosePopup}>X</button>
                </div>
            ) : null}
        </main>
    )
}

export default Content