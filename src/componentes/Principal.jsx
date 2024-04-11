import ProgramCard from "../ProgramCard"
import Programa from "../Programas"

function Main() {
    return (
        <main className="grow">
            <a href="">Inicio</a>
           
            <ProgramCard disciplina="Atletismo"/>

            <ProgramCard disciplina="Ciclismo"/>  

            <ProgramCard disciplina="Natacion"/>
          
            <ProgramCard disciplina="Triatlon"/>
        
        </main>
    )
}

export default Main