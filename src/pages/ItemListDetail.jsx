import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../ProgramDatabase'
import Contador from '../Contador'
import Swal from 'sweetalert2'



function Descripcion() {
  const [consulta, setConsulta] = useState(false)
  const [alumnos, setAlumnos] = useState(0)
  const onConsulta = (consulta) => {
    setAlumnos(alumnos)
    setConsulta(true)

  }
  const { id } = useParams()
  const [disciplina, setDisciplina] = useState({})
  useEffect(() => {
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
      {consulta ? Swal.fire({
        position: "center",
        icon: "success",
        title: "Se envio su consulta",
        showConfirmButton: false,
        timer: 3000
      }) : <Contador onConsulta={onConsulta} />}

    </>
  )
}



export default Descripcion