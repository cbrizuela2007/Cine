const Productos = require("../models/Productos.model")

const obtenerProductos = (req,res) =>{
    
    Productos.find()
    .then(resultado => {res.json(resultado)})
    .catch(error=> res.json(error))
}

const obtenerProducto = (req,res) =>{
    const _id = req.params._id
    Productos.findById(_id).exec()
    .then(resultado => {res.json(resultado)
    })
    .catch(error=> res.json(error))
}

const crearProducto = (req,res) =>{
    console.log("Cuerpo", req.body)
    Productos.create(req.body)
    .then(resultado => {res.json(resultado)})
    .catch(error=> res.json(error))
}

const actualizarProducto = (req,res) =>{
    const _id = req.params._id
    console.log(req.body)
    Productos.updateOne({_id: _id}, req.body)
    .then(resultado => res.json(resultado))
    .catch(error=> res.json(error))
}

const eliminarProducto = (req,res) =>{
    Productos.deleteOne({_id: req.params._id})
    .then(resultado => res.json(resultado))
    .catch(error=> res.json(error))
}

module.exports = {obtenerProductos, obtenerProducto, crearProducto, actualizarProducto, eliminarProducto} 


