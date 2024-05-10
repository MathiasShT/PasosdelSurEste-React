import React, { useState } from 'react'

function Contador(props) {
    const [numero, setNumero] = useState(0)

    const aumentar = () => {
        setNumero(numero + 1)
    }

    const disminuir = () => {
        setNumero(numero - 1)
    }

    const consultar = () => {
        props.onConsulta(numero)
    }

  return (
    <>
    <h3>Alumnos</h3>
    <p>{numero}</p>
    <button onClick={disminuir}>-</button>
    <button onClick={aumentar}>+</button>
    <button onClick={consultar}>Enviar Consulta</button>


    </>
  )
}

export default Contador