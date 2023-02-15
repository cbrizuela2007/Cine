import axios from 'axios'
import { useState,useEffect } from 'react'
import ListaProducto from './ListaProducto'
import './Producto.css'

const Producto = () => {

    /****** ESTADOS */
    const [campos, setCampos] = useState(
        {
            title: "hola",
            price: "hola",
            description: "hola"
        }
    )

    const [listaProductos, setlistaProductos] = useState([])

    useEffect(()=>apiListarProductos(), [])
    

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
            })
            .catch(err => console.log(err))




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
                    <input type="text" name="title" onChange={handleChange} className="mb"/>

                    <label htmlFor="">Price</label>
                    <input type="number" name='price' onChange={handleChange} className="mb"/>

                    <label htmlFor="">Description</label>
                    <input type="text" name='description' onChange={handleChange} className="mb"/>

                    <input type="submit" value="Create" />
                </form>
            </div>
            <ListaProducto listaProductos={listaProductos}></ListaProducto>
        </>
    )
}

export default Producto