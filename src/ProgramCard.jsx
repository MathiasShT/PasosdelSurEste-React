import { Button } from 'antd'
import React from 'react'

function ProgramCard(props) {
  return (
    <div className='program-card'>
        <h2>{props.disciplina}</h2>
        <img src="/img/atletismo.webp" alt="Imagen atletismo" />
        <Button>Mas informacion</Button>
    </div>
  )
}

export default ProgramCard