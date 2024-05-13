import { BrowserRouter } from 'react-router-dom'
import Header from './componentes/Navbar'
import Container from './Saludo'
import Main from './componentes/Principal'
import Footer from './componentes/Footer'
import CartProvider from './Context'



function App() {

  return (
    <BrowserRouter>
      <CartProvider>
      <Header />
      <Container
        greeting="Bienvenido"
      />
      <Main />
      <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
