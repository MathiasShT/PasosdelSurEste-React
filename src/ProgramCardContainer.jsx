import { useEffect, useState } from 'react'
import {data} from './database.js'
import ProgramCard from './ProgramCard.jsx'


function ProgramCardContainer() {
    
  const [programs, setPrograms] = useState([])
  
  /*useEffect(() => {
  const miPromesa = new Promise((res) => {
    setTimeout(() => {
      res (data)
    }, 2000)
  })
  miPromesa.then((res) => {
    console.log(res)
  })
  miPromesa.then((Programa) => {
    setPrograms(Programa)
  })*/
  return (
     <>
      {data.map((program)=>{
        return <ProgramCard key={program.name} program={program}/>

      })} 
      </>
  )
  }/*)}*/;
        

   

export default ProgramCardContainer