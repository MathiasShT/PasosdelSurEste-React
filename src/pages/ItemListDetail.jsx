import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../ProgramDatabase'


function Descripcion() {
const {id} = useParams()
const [disciplina, setDisciplina] = useState({})
useEffect(() => {
  const miPromesa = new Promise((res) => {
      res(data)  
  })
  miPromesa.then((res) => {

   const value = res.find(element => element.id === parseInt(id, 10))
    setDisciplina(descripcion)
  })
},[])

  return (
    <>
    <h2>Descripcion</h2>
    <h3>{disciplina.name}</h3>
    <img src={disciplina.img} alt={disciplina.name} />
    <p>{disciplina.description}</p>
    </>
  )
}

export default Descripcion