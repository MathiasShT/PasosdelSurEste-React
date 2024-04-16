import { Link } from "react-router-dom"

function Header (){
    return(
        <header className="bg-indigo-600 p-5 flex justify-between shadow-md">
        <Link to="/">
          <img src="../LogoPSE.webp" width={100} height={50} className="logo" alt="Logo" />
        </Link>
    <nav className="md:gap-4 md:flex">
      <Link to="/Programas">Programas</Link>
      <Link to="/Productos">Productos</Link>
      <Link to="/Contacto">Contacto</Link>
      <img src="/Shoppingcart.png" height={40} width={40} alt="Shopping Cart" />
      <p>3</p>
    </nav>
    </header>
    )
}

export default Header