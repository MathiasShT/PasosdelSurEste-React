import { Route, Routes } from 'react-router-dom'
import ProgramCardContainer from '../ProgramCardContainer.jsx'





function Main() {
    return (
        <main className="p-3 grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Routes>
            <Route path='/Programas' element={ <p>Programas</p> }/>
            <Route path='/Productos' element={ <p>Productos</p> }/>
            <Route path='/Contacto' element={ <p>Contacto</p> }/>           
        </Routes>           
           
         <ProgramCardContainer/>             

        </main>
    )
}

export default Main