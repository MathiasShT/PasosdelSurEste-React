import { BrowserRouter } from 'react-router-dom'
import Header from './componentes/Navbar'
import Container from './ItemListContainer'
import Main from './componentes/Principal'
import Footer from './componentes/Footer'






function App() {

  return (
    <BrowserRouter>
      <Header />
      <Container
        greeting="Bienvenido"
      />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
