import React, { useEffect, useState } from 'react'
import {data} from './database.js'
import Programa from './Programa.jsx'



function ProgramCardContainer() {
    const [program, setProgram] = useState({})

    useEffect(() => {
        const miPromesa = new Promise((res) => {
            setTimeout(() => {
              res (data)
            }, 2000)
          })
          miPromesa.then((res) => {
            console.log(res)
          })
          .then((Programa) => {
            setProgram(Programa)
          })
    }, []);

    return (
    <Programa program={Programa}/>
  )
}
