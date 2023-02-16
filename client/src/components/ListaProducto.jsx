import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const ListaProductos = ({ listaProductos, removeFromDom }) => {

  const navigate = useNavigate()

  function handleClickBorrar(e){
    //console.log(e)
   // console.log('http://localhost:8000/api/producto/delete/'+ e._id)
    axios.delete('http://localhost:8000/api/producto/delete/'+e._id)
            .then(res => {
                console.log("borrado", res)
                removeFromDom(e._id)
            })
            .catch(err => console.log(err))
  }

  return (
    <>
      <hr />
      <h2>Lista Productos:</h2>
        {listaProductos.map((e, i) => (
          <div className="detalle" key={i}>
            <p className="dato">{e.title}</p>
            <Link className='link' to={"/producto/detalle/" + e._id} key={i}>ver detalle</Link>
            <Link className='link' onClick={()=> handleClickBorrar(e)}>Borrar</Link>
          </div>
        ))}
    </>
  )
}

export default ListaProductos