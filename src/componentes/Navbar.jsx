import { Link } from "react-router-dom"

function Header (){
    return(
        <header className="bg-indigo-600 p-5 flex justify-between shadow-md">
        <a href="/">
          <img src="../LogoPSE.webp" width={100} height={50} className="logo" alt="Logo" />
        </a>
    <nav className="md:gap-4 md:flex">
      <Link to="/Programas">Programas</Link>
      <Link to="/Productos">Productos</Link>
      <Link to="/Contacto">Contacto</Link>
      <img src="/Shoppingcart.png" alt="Shopping Cart" />
      <p>3</p>
    </nav>
    </header>
    )
}

export default Header