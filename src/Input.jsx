import React from 'react'

function Input({id = "Prueba", type = "text", placeholder="Escriba un mensaje...", text="Categoria"}) {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor={id} className='text-black text-bold'>{text}</label>
        <input type={type} placeholder={placeholder} className='text-black rounded-md shadow-md p-2'/>
    </div>
  )
}

export default Input