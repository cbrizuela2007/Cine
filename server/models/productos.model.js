const mongoose = require("mongoose");

const SchemaProducto = mongoose.Schema({
    title: String,
    price: Number,
    description: String
})

const Producto = mongoose.model("Producto", SchemaProducto)

module.exports = Producto; 