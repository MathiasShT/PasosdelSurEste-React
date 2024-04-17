import React from 'react'
import { Link } from 'react-router-dom'


function ProgramCard({program}) {
  
  console.log(program)
  const {name, img, id} = program
  return (
    <div className='hover:scale-105 group program-card'>
        <img id="imagen" src={img} className="group-hover:scale-110 transition-all duration-500" height={100} width={100} alt="Imagen atletismo"/>
        <h2>{name}</h2>
        <Link to={`/${id}`} >Mas informacion</Link>
    </div>
  )
}

export default ProgramCard