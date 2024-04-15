import {useEffect, useState} from 'react'
import miImagen from "/atletismo.webp"
import { Button } from 'antd'
import React from 'react'


function ProgramCard(props) {
  return (
    <div className='hover:scale-105 group program-card'>
        <img id="imagen" src={miImagen} className="group-hover:scale-110 transition-all duration-500" alt="Imagen atletismo" />
        <h2>{props.disciplina}</h2>
        <Button>Mas informacion</Button>
    </div>
  )
}

export default ProgramCard