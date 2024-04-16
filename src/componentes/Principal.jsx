import { Route, Routes } from 'react-router-dom'
import Programas from '../pages/Programas'
import Productos from '../pages/Productos'
import Contacto from '../pages/Contacto'
import Inicio from '../pages/Inicio'
import Descripcion from '../pages/Descripcion'


function Main() {
    return (
        <main className='p-4 grow'>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Programas' element={<Programas/>}/>
            <Route path='/:id' element={<Descripcion/>}/>
            <Route path='/Productos' element={<Productos/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>           
        </Routes>           
           
        </main>
    )
}

export default Main