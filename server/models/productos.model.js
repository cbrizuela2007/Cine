const mongoose = require("mongoose");

const SchemaProducto = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Debe ingresar el título"]
    },
    price: {
        type: Number,
        required: [true, "Debe ingresar el precio"]
    },
    description: {
        type: String,
        required: [true, "Debe ingresar la descripción"]
    }
}, { timestamps: true })

const Producto = mongoose.model("Producto", SchemaProducto)

module.exports = Producto; 