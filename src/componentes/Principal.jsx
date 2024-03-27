import Programa from "../Programas"

function Main() {
    return (
        <main className="grow">
            <a href="">Inicio</a>
            <Programa
                disciplina="Atletismo"
            />
            <Programa
                disciplina="Ciclismo"
            />
            <Programa
                disciplina="Natacion"
            />
            <Programa
                disciplina="Triatlon"
            />
        </main>
    )
}

export default Main