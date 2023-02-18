import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Producto from './components/Producto';
import DetalleProducto from './components/DetalleProducto';
import EditarProducto from './components/EditarProducto';
import Registro from './components/Registro';
import Login from './components/Login';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Producto />}></Route>
          <Route path="/producto/new" element={<Producto />}></Route>
          <Route path="/producto/detalle/:id" element={<DetalleProducto/>}></Route>
          <Route path="/producto/editar/:id" element={<EditarProducto/>}></Route>
          <Route path="/registro" element={<Registro/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
