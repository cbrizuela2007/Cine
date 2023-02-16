import {useEffect, useState} from 'react'
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
        axios.put('http://localhost:8000/api/producto/update/'+id, campos)
            .then(res => {
                console.log(res)
                navigate("/")
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
                    <input type="text" name="title" value={campos.title}  onChange={handleChange} className="mb" />

                    <label htmlFor="">Price</label>
                    <input type="number" name='price' value={campos.price} onChange={handleChange} className="mb" />

                    <label htmlFor="">Description</label>
                    <input type="text" name='description' value={campos.description} onChange={handleChange} className="mb" />

                    <input type="submit" value="Actualizar" />
                </form>
            </div>
        </>
    )
}

export default EditarProducto