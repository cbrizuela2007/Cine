const mongoose = require("mongoose");

const SchemaProducto = mongoose.Schema({
    title: String,
    price: Number,
    description: String
}, { timestamps: true })

const Producto = mongoose.model("Producto", SchemaProducto)

module.exports = Producto; 