import { useEffect, useState } from 'react'
import { data } from '../ProgramDatabase.js'
import ProgramCard from '../ProgramCard.jsx'
import { getProducts } from '../Utilities.js'


function ProgramCardContainer() {

  const [program, setPrograms] = useState([])

  useEffect(() => {

    getProducts()
    .then((resultado) => {
      setPrograms(resultado)
    })
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
