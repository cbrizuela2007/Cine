import { useState, useEffect,useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Review = () => {

    const inputName = useRef()
    const navigate = useNavigate()
    const { _id } = useParams()

    const [errores, setErrores] = useState({})
    const [review, setReview] = useState({
        name: "",
        rating: "",
        opinion: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault()

        if (e.target.innerHTML === "Cancel") {
            navigate("/")
            return
        }

        if (inputName.current.value===""){
            setErrores({name:"Debe ingresar su nombre"})
            return
        }

        console.log("metiendo review")
        axios.post("http://localhost:8000/api/movies/review", {
            _id: _id,
            review: review
        }, { withCredentials: true })
            .then(resultado => navigate("/movies/"+_id))
            .catch(err => {
                setErrores(err.response.data.errors)
            })

 
    }

    const handleChange = (e) => {
        if (inputName.current.value !== ""){
            setErrores({name:""})
        }
            setReview(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    return (

        <div className='wrapper'>
            <div className='titulo flex'>
                <h2>Add a Review for</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>

                    <label className='form-label'>Your Name</label>
                    <input type="text" onChange={handleChange} name="name" className='form-control recortar' ref={inputName}/>
                    {errores.name ? <p className='error'>{errores.name}</p> : null}<br />

                    <label className='form-label'>Rating</label>
                    <select  onChange={handleChange} name="rating" className="form-select recortar" aria-label="Default select example">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select><br />

                    <label className='form-label'>Your Review</label>
                    <textarea onChange={handleChange} className="form-control recortar" placeholder="Leave a comment here" name="opinion"></textarea>
                    <br />

                    <button className='btn btn-success' type='submit'>Submit</button>
                    <button className='btn btn-danger ms-2' onClick={e => handleSubmit(e)} type='cancel'>Cancel</button>
                </form>

            </div>
        </div>
    )
}
