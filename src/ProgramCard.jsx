import { Button } from 'antd'
import React from 'react'


function ProgramCard({program}) {
  const {name, image} = program

  return (
    <div className='hover:scale-105 group program-card'>
        <img id="imagen" src={image} className="group-hover:scale-110 transition-all duration-500" alt="Imagen atletismo" />
        <h2>{name}</h2>
        <Button>Mas informacion</Button>
    </div>
  )
}

export default ProgramCard