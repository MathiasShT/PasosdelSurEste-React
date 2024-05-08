import { Route, Routes } from 'react-router-dom'
import Programas from '../pages/Programas'
import Contacto from '../pages/Contacto'
import Descripcion from '../pages/ItemListDetail'

function Main() {
    return (
        <main className='p-4 grow'>
        <Routes>
            <Route path='/' element={<Programas/>}/>
            <Route path='/Programas' element={<Programas/>}/>
            <Route path='/:id' element={<Descripcion/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>           
        </Routes>           
           
        </main>
    )
}

export default Main