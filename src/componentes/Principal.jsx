import ProgramCard from "../ProgramCard"


function Main() {
    return (
        <main className="p-3 grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                       
            <ProgramCard disciplina="Atletismo"/>

            <ProgramCard disciplina="Ciclismo"/>  

            <ProgramCard disciplina="Natacion"/>
          
            <ProgramCard disciplina="Triatlon"/>
        
        </main>
    )
}

export default Main