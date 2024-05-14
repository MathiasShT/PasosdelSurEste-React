import { useContext } from "react";
import { contexto } from "./Context";


const useCart = () => {
    const valorActual = useContext(contexto)
    return valorActual
}

export default useCart;