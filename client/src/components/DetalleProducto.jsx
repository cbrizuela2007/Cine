import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'

const DetalleProducto = () => {

  const { id } = useParams()
  const [detalleProducto, setDetalleProducto] = useState({})

  useEffect(() => apiListarProductoID(), [])

  const apiListarProductoID = () => {
   axios.get('http://localhost:8000/api/producto/detalle/'+id)
      .then(res => {
        setDetalleProducto(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  const recorrerObjeto = ()=>{
    let content = []
    for (const property in detalleProducto) {
      //console.log(`${property}: ${detalleProducto[property]}`);
      //console.log(property, property != "_id" && property !="__v");
      if (property != "_id" && property !="__v"){
        content.push(<p>{property}: {detalleProducto[property]}</p>)
      }
    }
    return content;
  }

  return (
    <div>
        <h3>Detalle del Producto:</h3>
        {
          recorrerObjeto()
        }
    </div>
  )
}

export default DetalleProducto