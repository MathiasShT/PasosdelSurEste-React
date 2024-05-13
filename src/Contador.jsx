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
        props.handleConsulta(numero)
    }

  return (
    <>
    <h3>Alumnos</h3>
    <p>{numero}</p>
    <button onClick={disminuir} className='rounded-full bg-blue-500'>-</button>
    <button onClick={aumentar} className='rounded-full bg-blue-500'>+</button>
    <button onClick={consultar}>Consultar</button>


    </>
  )
}

export default Contador