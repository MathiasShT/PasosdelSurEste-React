import { useEffect, useState } from 'react'
import { data } from '../ProgramDatabase.js'
import ProgramCard from '../ProgramCard.jsx'
import { app } from '../Firebase.js'
import { collection, getDocs, getFirestore } from 'firebase/firestore'



function ProgramCardContainer() {

  const [program, setPrograms] = useState([])

  useEffect(() => {

    const bd = getFirestore(app)
    const disciplinaCollection = collection(bd, "disciplina")
    const query = getDocs(disciplinaCollection)
    query
      .then((resultado) => {
        const disciplinas = resultado.docs.map(doc => { return doc.data() })
        setPrograms(disciplinas)
      })
      .catch((error) => {
        console.log(error)
      })

    /*  const miPromesa = new Promise((res) => {
        setTimeout(() => {
          res (data)
        }, 2000)
      })
      miPromesa.then((res) => {
        
      })
      miPromesa.then((Programa) => {
        setPrograms(Programa)
      })*/
  }, [])
  return (
    <>
      {data.map((program) => {
        return <ProgramCard key={program.name} program={program} />

      })}
    </>
  )
}


export default ProgramCardContainer
