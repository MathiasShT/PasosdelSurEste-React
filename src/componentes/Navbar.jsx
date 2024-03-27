function Header (){
    return(
        <header className="bg-indigo-600 p-5 flex justify-between shadow-md">
    <h1>Pasos del Sur-Este</h1>
    <nav className="md:gap-4 md:flex">
      <a href="">Programas</a>
      <a href="">Productos</a>
      <a href="">Consultas</a>
      <img src="/Shoppingcart.png" alt="Shopping Cart" />
      <p>3</p>
    </nav>
    </header>
    )
}

export default Header