import React from 'react'
import { useParams } from 'react-router-dom'


function Descripcion() {
const params = useParams()
console.log(params)

  return (
    <div>Descripcion</div>
  )
}

export default Descripcion