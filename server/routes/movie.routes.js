const controladorMovie = require("../controllers/movie.controllers")

module.exports = (app) => {

    app.get("/api/movies", controladorMovie.obtenerMovies)
    app.get("/api/reviews/:_id", controladorMovie.obtenerReviews)

    app.post("/api/movies/new", controladorMovie.crearMovie)
    app.post("/api/movies/review", controladorMovie.crearReview)

    app.delete("/api/movies/delete/:_id", controladorMovie.eliminarMovie)


}