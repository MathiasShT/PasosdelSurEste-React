import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../Context"


function Header (){

const contextValue = useContext(contexto)


    return(
        <header className="bg-indigo-600 p-5 flex justify-between shadow-md">
        <Link to="/">
          <img src="../LogoPSE.webp" width={150} height={60} className="logo" alt="Logo" />
        </Link>
    <nav className="md:gap-4 md:flex">
      <section className="md:gap-4 md:flex">
      <Link to="/Programas">Programas</Link>
      <Link to="/Contacto">Contacto</Link>
      </section>
      <img src="/Shoppingcart.png" height={30} width={40} id="carrito" alt="Shopping Cart" />
      {contextValue.cantCart}
    </nav>
    </header>
    )
}

export default Header