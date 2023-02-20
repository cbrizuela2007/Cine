const Movie = require("../models/movie.models")
const Review = require("../models/review.models")

const obtenerReviews = (req, res) => {
    console.log(req.params._id)
    Movie.findById(req.params._id)
        .populate('reviews')
        .exec()
        .then(resultado => {
            res.json(resultado)
        })
        .catch(error => res.json(error))
}

const obtenerMovies = (req, res) => {

    /*const _id = req.params._id
    Productos.findById(_id).exec()
    .then(resultado => {res.json(resultado)
    })
    .catch(error=> res.json(error))*/

    Movie.find()
        .populate('reviews')
        .exec()
        .then(resultado => {
            res.json(resultado)
        })
        .catch(error => res.json(error))

    /*(err, movie) => {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log(`Tl movie ${movie.title} tiene ${movie.reviews.length} reviews`);
})*/
}

const crearMovie = async (req, res) => {

    try {
        console.log("iniciando", req.body)

        const new_movie = new Movie(req.body) //creamos el usuario con los datos que envia el cliente
        const new_review = new Review(req.body.review) //creamos la empresa con los datos que envia el cliente
        new_movie.reviews.addToSet(new_review._id) //se agrega el id de la empresa al campo enterprice del modelo de usuario
        await new_movie.save() //guardamos el usuario en la bd
        await new_review.save() //guardamos la empresa en la bd
        return res.status(200).json({ message: "success", nuevapeli: new_movie }) //respondemos al cliente
    }
    catch (err) {
        console.error(err) //mostramos el error por consola para poder solucionar futuros errores
        return res.status(400).json(err) //en caso de error respondemos al cliente con un 500
    }

}

const crearReview = async (req, res) => {

    try {
        console.log("iniciando", req.body)

        const movie = await Movie.findById(req.body._id).exec() //creamos el usuario con los datos que envia el cliente
        const new_review = new Review(req.body.review) //creamos la empresa con los datos que envia el cliente
        movie.reviews.addToSet(new_review._id) //se agrega el id de la empresa al campo enterprice del modelo de usuario
        await movie.save() //guardamos el usuario en la bd
        await new_review.save() //guardamos la empresa en la bd
        return res.status(200).json({ message: "success", movie }) //respondemos al cliente
    }
    catch (err) {
        console.error(err) //mostramos el error por consola para poder solucionar futuros errores
        return res.status(400).json(err) //en caso de error respondemos al cliente con un 500
    }

}

const eliminarMovie = async (req, res) => {
    /*try {
        console.log("entrando")
        const resultado = await Movie.findById("63f2bbc12a3dc0209e6e483d")
            .populate('reviews')
            .exec()
        const matriz = resultado.reviews.map(r => r._id)
        const rev = await Review.findById(matriz[0])

        Movie.deleteOne({ _id: "63f2bbc12a3dc0209e6e483d" })
            .then(() => {
                for (var i = 0; matriz.length; i++) {
                    Review.deleteOne({ _id: matriz[i] })
                        .then(resultado => {
                            res.json(resultado)
                        })
                        .catch(error => res.json(error))
                }
            })
            .catch(error => res.json(error))
        console.log(rev)
        return res.status(200).json({ message: "success"})
    } catch (error) {
        console.error(err) //mostramos el error por consola para poder solucionar futuros errores
        return res.status(400).json(err) //en caso de error respondemos al cliente con un 500
    }*/
    Movie.deleteOne({_id: req.params._id})
    .then(resultado => res.json(resultado))
    .catch(error=> res.json(error))
}

module.exports = { obtenerMovies, crearMovie, crearReview, obtenerReviews, eliminarMovie } 