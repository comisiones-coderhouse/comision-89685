/* 
Componentes : Es una funcion con la capacidad de mostrar elementos en pantalla.

Ejemplo : 

-Declaracion del componente
function UnComponente(){}

-Uso del componente
<UnComponente/>

Reglas : 

- Todos los componentes son funciones.
- El nombre del componente debe iniciar con mayuscula.
- Todos los componentes tiene que tener retorno (return).
- Un archivo por componente


*/
//Header - MainHeader - LayoutHeader - AppHeader - NavBar - Etc...
//Main - Content - AppMain - LayoutMain - LayoutContent - Etc...
//Footer - AppFooter - LayoutFooter - MainFooter - Etc...

import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'


function App() {
  return (
    <>
      <Header mensaje="Comision 89685"/>
      <Header mensaje="Soy otra app"/>
      <Content />
      <Footer />
    </>
  )
}

export default App