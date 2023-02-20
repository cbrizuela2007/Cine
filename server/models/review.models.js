const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
    /*movie: {type:Number, ref:"Movie"},*/
    name: {
        type: String
    },
    rating: { type: Number },
    opinion: { type: String }
});

const Review = mongoose.model("Review", ReviewSchema)
module.exports = Review; 