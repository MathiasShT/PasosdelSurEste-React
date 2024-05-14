import React from 'react'
import Input from '../input'



export default function Contacto() {
  return (
    <>
    <h2>Contacto</h2>
    <form>
      <Input id='name' text='Nombre' placeholder='Nombre y apellido'/>
      <Input id='email' text='Email' type="email" placeholder='eMail' />
      <Input id='telefono' text='Celular' type="text" placeholder='Solo numeros' />
      <Input id='mensaje' text='Mensaje' type="text" placeholder='Escriba un mensaje' />
      <button className='bg-indigo-500 text-white rounded p-2 border shadow-md'>Enviar</button>

    </form>
    </>
  )
}
