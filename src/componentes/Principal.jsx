import { Route, Routes } from 'react-router-dom'
import Programas from '../pages/Programas'
import Productos from '../pages/Productos'
import Contacto from '../pages/Contacto'
import Inicio from '../pages/Inicio'


function Main() {
    return (
        <main className="p-3 grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Programas' element={<Programas/>}/>
            <Route path='/Productos' element={<Productos/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>           
        </Routes>           
           
        </main>
    )
}

export default Main