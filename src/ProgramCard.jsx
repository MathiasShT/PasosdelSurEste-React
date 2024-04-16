import React from 'react'
import { Link } from 'react-router-dom'


function ProgramCard({}) {
  
  return (
    <div className='hover:scale-105 group program-card'>
        <img id="imagen" src="/LogoPSE.webp" className="group-hover:scale-110 transition-all duration-500" alt="Imagen atletismo" />
        <h2>Disciplina</h2>
        <Link to="/descrpcion" >Mas informacion</Link>
    </div>
  )
}

export default ProgramCard