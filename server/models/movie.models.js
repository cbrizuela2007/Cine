const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Debe ingresar el título"]
    },
   reviews: [{
        type: mongoose.ObjectId,
        ref: 'Review'
    }]
})


const Movie = mongoose.model("Movie", MovieSchema)


module.exports = Movie; 