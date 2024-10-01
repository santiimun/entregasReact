import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BaseLayout from './layout/baseLayaout';
import Inicio from './pages/inicio';
import Tienda from './pages/tienda';
import Contacto from './pages/contacto';
import Detalle from './pages/detalle';
import PageCarrito from './pages/carrito';
import Error404 from './pages/error404';
import { CarritoContextProvider } from './context/carritoContext';

function App() {

  return (
    <CarritoContextProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route exact path='*' element = {<Error404/>}/>
            <Route exact path='/' element ={<Inicio/>}/>
            <Route exact path='/contacto' element ={<Contacto/>}/>       
            <Route exact path='/carrito' element ={<PageCarrito/>}/>
            <Route exact path='/tienda' element ={<Tienda/>}/>
            <Route exact path='/tienda/:categoria' element= {<Tienda/>}/>
            <Route exact path='/detalle/:id' element ={<Detalle/>}/>
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </CarritoContextProvider>
  )
}

export default App
