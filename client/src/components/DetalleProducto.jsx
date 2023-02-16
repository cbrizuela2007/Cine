import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'

const DetalleProducto = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const [detalleProducto, setDetalleProducto] = useState({})

  useEffect(() => apiListarProductoID(), [])

  const apiListarProductoID = () => {
    axios.get('http://localhost:8000/api/producto/detalle/' + id)
      .then(res => {
        setDetalleProducto(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  const recorrerObjeto = () => {
    let content = []
    let key = 0
    for (const property in detalleProducto) {
      //console.log(`${property}: ${detalleProducto[property]}`);
      //console.log(property, property != "_id" && property !="__v");

      if (property != "_id" && property != "__v") {
        content.push(<p key={key}>{property}: {detalleProducto[property]}</p>)
      }
      key +=1
    }
    return content;
  }

  const handleClickBorrar = () => {
    axios.delete('http://localhost:8000/api/producto/delete/' + id)
      .then(res=> navigate("/"))//console.log(res))
      .catch(error => console.log(error))
  }

  const handleClickEditar = () => {
    navigate("/producto/editar/"+id)
  }

  
  const handleClickLista = () => {
    navigate("/")
  }

  return (
    <div>
      <h3>Detalle del Producto:</h3>
      {
        recorrerObjeto()
      }
      <button onClick={handleClickBorrar}>Borrar</button>
      <button onClick={handleClickEditar}>Editar</button>
      <button onClick={handleClickLista}>Lista</button>
    </div>
  )
}

export default DetalleProducto