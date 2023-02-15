import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Producto from './components/Producto';
import DetalleProducto from './components/DetalleProducto';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Producto />}></Route>
          <Route path="/producto/new" element={<Producto />}></Route>
          <Route path="/producto/detalle/:id" element={<DetalleProducto/>}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
