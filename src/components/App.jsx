import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'


function App() {

  function handleClick() { }

  return (
    <>
      <Header
        mensaje="Comision 89685"
        edad={35}
        llegaHoy={true}
        hacerAlgo={handleClick}
      />
      <Content />
      <Footer />
    </>
  )
}

export default App