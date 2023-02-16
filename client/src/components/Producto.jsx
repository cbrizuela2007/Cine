import axios from 'axios'
import { useState, useEffect } from 'react'
import ListaProducto from './ListaProducto'
import './Producto.css'

const Producto = () => {

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

    useEffect(() => apiListarProductos(), [])


    //****EVENTO Onchage
    const handleChange = (e) => {
        setCampos(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    //****EVENTO Enviar Form
    const handleSubmit = (e) => {
        e.preventDefault()

        // const {title, price, description} = campos
        // console.log(campos.)
        axios.post('http://localhost:8000/api/producto/new', campos)
            .then(res => {
                console.log(res)
                apiListarProductos()
                setCampos({
                    title: "",
                    price: "",
                    description: ""
                })
            })
            .catch(err => {
                setErrores(err.response.data.errors)
                console.log(err)
            })
    }

    const apiListarProductos = () => {
        axios.get('http://localhost:8000/api/producto')
            .then(res => {
                setlistaProductos(res.data)
            })
            .catch(err => console.log(err))
    }

    const removeFromDom = (id) => {
        setlistaProductos(listaProductos.filter(producto => producto._id !== id));

    }

    return (
        <>
            <div>
                <h1>Product Manager</h1>
                <form onSubmit={handleSubmit} className="form">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" onChange={handleChange} value={campos.title} className="mb" />
                    {errores.title ? <p className='error'>{errores.title.message}</p> : null}

                    <label htmlFor="">Price</label>
                    <input type="number" name='price' onChange={handleChange} value={campos.price} className="mb" />
                    {errores.price ? <p className='error'>{errores.price.message}</p> : null}

                    <label htmlFor="">Description</label>
                    <input type="text" name='description' onChange={handleChange} value={campos.description} className="mb" />
                    {errores.description ? <p className='error'>{errores.description.message}</p> : null}

                    <input type="submit" value="Create" />
                </form>
            </div>
            <ListaProducto listaProductos={listaProductos} removeFromDom={removeFromDom}></ListaProducto>
        </>
    )
}

export default Producto