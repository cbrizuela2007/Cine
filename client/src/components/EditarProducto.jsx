import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ListaProducto from './ListaProducto'


const EditarProducto = () => {

    const { id } = useParams()
    const navigate = useNavigate();

    /****** ESTADOS */
    const [campos, setCampos] = useState(
        {
            title: "",
            price: "",
            description: ""
        }
    )

    const [listaProductos, setlistaProductos] = useState([])

    const [errores, setErrores] = useState({})

    useEffect(() => apiListarProductoPorID(), [])

    const apiListarProductoPorID = () => {
        axios.get('http://localhost:8000/api/producto/detalle/' + id)
            .then(res => {
                setCampos(res.data)
            })
            .catch(err => console.log(err))
    }

    //****EVENTO Onchage
    const handleChange = (e) => {
        setCampos(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    //****EVENTO Enviar Form
    const handleSubmit = (e) => {
        e.preventDefault()

        // const {title, price, description} = campos
        // console.log(campos.)
        axios.put('http://localhost:8000/api/producto/update/' + id, campos)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                setErrores(err.response.data.errors)
            })
    }

    const apiListarProductos = () => {
        axios.get('http://localhost:8000/api/producto')
            .then(res => {
                setlistaProductos(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <h1>Product Manager</h1>
                <form onSubmit={handleSubmit} className="form">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" value={campos.title} onChange={handleChange} className="mb" />
                    {errores.title ? <p className='error'>{errores.title.message}</p> : null}

                    <label htmlFor="">Price</label>
                    <input type="number" name='price' value={campos.price} onChange={handleChange} className="mb" />
                    {errores.price ? <p className='error'>{errores.price.message}</p> : null}

                    <label htmlFor="">Description</label>
                    <input type="text" name='description' value={campos.description} onChange={handleChange} className="mb" />
                    {errores.description ? <p className='error'>{errores.description.message}</p> : null}

                    <input type="submit" value="Actualizar" />
                </form>
            </div>
        </>
    )
}

export default EditarProducto