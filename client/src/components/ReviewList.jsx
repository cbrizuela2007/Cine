import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const ReviewList = () => {

    const { _id } = useParams()
    const [listaReview, setListaReview] = useState({ reviews: [] })
    const navigate = useNavigate()

    useEffect(() => obtenerReviews(), [])

    const obtenerReviews = () => {
        axios.get('http://localhost:8000/api/reviews/' + _id)
            .then(res => {
                setListaReview(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const eliminar = () => {
        axios.delete('http://localhost:8000/api/movies/delete/' + _id)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='wrapper'>
            <div className='titulo flex'>
                <h2>Reviews for</h2>
            </div>


            <div className='contenido'>

                <table className="table table-hover table-striped tamaño celdas">
                    <thead className="table-dark">
                        <tr>
                            <th>Reviewer</th>
                            <th>Rating</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaReview.reviews.map(e =>
                            <tr key={e._id}>
                                <td>{e.name}</td>
                                <td>{e.rating}</td>
                                <td>{e.opinion}</td>
                            </tr>
                        )}
                    </tbody>

                </table>

                {/* {listaMovie.map(e=><p>{e.title}</p>)} */}
                {/* {listaMovie.map(e=>console.log(e))} */}
            </div>
            <div className='botones flex'>
                <button className='btn btn-danger mr' onClick={eliminar}>Delete Movies</button>
                <button className='btn btn-info ms-2' onClick={() => navigate("/")}>Volver a Lista de Películas</button>
            </div>

        </div>
    )
}

export default ReviewList