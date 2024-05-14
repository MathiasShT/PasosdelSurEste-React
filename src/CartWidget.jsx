import { Link } from "react-router-dom"
import useCart from "./UseCart.jsx"



function CartWidget() {

    const contextValue = useCart()

    return (
        <Link to="/Cart" className="flex items-center">
            <img src="/Shoppingcart.png" height={30} width={40} id="carrito" alt="Shopping Cart" />
            {contextValue.cantCart}
        </Link>
    )


}

export default CartWidget