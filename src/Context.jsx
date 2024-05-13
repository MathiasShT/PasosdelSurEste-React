import { createContext, useState } from "react";


export const contexto = createContext ();
const Provider = contexto.Provider;

function CartProvider (props) {

    const [cantCart, setCantCart] = useState(0)
    const [carrito, setCarrito] = useState([])

    const addToCart = (cant, item) => {
        setCantCart(cantCart + cant)
        const copia = carrito.slice(0)
        copia.push(item)
        setCarrito(copia)
    }

    const removeCart = () => {}

    const emptyCart = () => {
        setCantCart(0)
        setCarrito([])
    }

    const valorActual = {
        carrito: carrito,
        cantCart: cantCart,
        addToCart : addToCart,
        removeCart : removeCart,
        emptyCart : emptyCart
    }


    return (
<Provider value={valorActual}>
    {props.children}
</Provider>

)

}

export default CartProvider