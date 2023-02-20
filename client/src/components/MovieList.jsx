import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const MovieList = () => {
    const navigate = useNavigate()
    const [listaMovie, setListaMovie] = useState([])

    useEffect(() => obtenerMovies(), [])

    const obtenerMovies = () => {
        axios.get('http://localhost:8000/api/movies')
            .then(res => {
                setListaMovie(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const promedio = (e) => {
       console.log("promedio", e)
       if (e != null){
        var prom = 0
        var contador = 0
        e.map(valor=>{
            prom = prom + valor.rating
            contador += 1
        })
       }
       return (prom/contador).toFixed(1)
    }

    const handleClickWrite = (_id)=>{
        navigate("/movies/"+_id+"/review")
    }

    const handleClickRead = (_id)=>{
        navigate("/movies/"+_id)
    }


    return (
        <div className='wrapper'>

            <div className='titulo flex'>
                <h2>Movie List</h2>
                <button className='btn btn-primary' onClick={() => { navigate("/movies/new") }}>Add a New Movie</button>
            </div>

            <div className='contenido flex'>

                <table className="table table-hover table-striped tamaño">
                    <thead className="table-dark">
                        <tr>
                            <th>Movie Title</th>
                            <th>Avg. Rating</th>
                            <th colSpan={"2"}>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {listaMovie.map(e=> 
                            <tr key={e._id}>
                                <td>{e.title}</td>
                                <td>{promedio(e.reviews)}</td>
                                <td><button className="btn btn-success" onClick={() => handleClickRead(e._id) }>Read Reviews</button></td>
                                <td><button className="btn btn-success" onClick={() => handleClickWrite(e._id) } >Write a Review</button></td>
                            </tr>
                       )}
                    </tbody>

                </table>
                {/* {listaMovie.map(e=><p>{e.title}</p>)} */}
                {/* {listaMovie.map(e=>console.log(e))} */}
            </div>
        </div>
    )
}

export default MovieList