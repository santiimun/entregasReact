import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BaseLayout from './layout/baseLayaout'
import Inicio from './pages/inicio'
import Tienda from './pages/tienda'
import Contacto from './pages/contacto'
import Detalle from './pages/detalle'
import PageCarrito from './pages/carrito'

function App() {

  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route exact path='/' element ={<Inicio/>}/>
          <Route exact path='/tienda' element ={<Tienda/>}/>
          <Route exact path='/contacto' element ={<Contacto/>}/>
          <Route exact path='/carrito' element ={<PageCarrito/>}/>
          <Route exact path='/detalle/:id' element ={<Detalle/>}/>

        </Routes>
      </BaseLayout>
    </BrowserRouter>
  )
}

export default App
