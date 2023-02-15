import { Link } from "react-router-dom"

const ListaProductos = ({ listaProductos }) => {
  return (
    <>
      <hr />
      <h2>Lista Productos:</h2>
        {listaProductos.map((e, i) => (
          <div className="detalle"><p className="dato">{e.title}</p><p><Link to={"/producto/detalle/" + e._id} key={i} className='link'>ver detalle</Link></p></div>


        ))}
    </>
  )
}

export default ListaProductos