import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './componentes/Navbar'
import Container from './ItemListContainer'
import Main from './componentes/Principal'
import Footer from './componentes/Footer'


function App() {
  
  return (
    <>
    <Header/>
    <Container
      greeting="Bienvenido"
    />
    <Main/>
    <Footer/>
    </>
  )
}

export default App
