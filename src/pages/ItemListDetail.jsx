import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../ProgramDatabase'
import Contador from '../Contador'
import Swal from 'sweetalert2'
import { contexto } from '../Context'
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'
import { app } from '../Firebase'
import { getDescription } from '../Utilities'



function Descripcion() {

  const valorActual = useContext(contexto)
  const handleConsulta = (numero) => {
    console.log(numero, disciplina)
    valorActual.addToCart(numero, disciplina)
  }

  const { id } = useParams()
  const [disciplina, setDisciplina] = useState({})
  useEffect(() => {

    /*getDescription(id)
      .then((resultado)=> {
        setDisciplina(resultado)
      })
      .catch((error)=>{
        console.log(error)
      })
     */
    const miPromesa = new Promise((res) => {
      res(data)
    })
    miPromesa.then((res) => {

      const value = res.find(element => element.id === parseInt(id, 10))
      setDisciplina(value)
    })
}, [])

  return (
    <>
      <h2>Descripcion</h2>
      <h3>{disciplina.name}</h3>
      <img src={disciplina.img} alt={disciplina.name} height={150} width={150} />
      <p>{disciplina.description}</p>
      <Contador handleConsulta={handleConsulta} />

    </>
  )
}


export default Descripcion