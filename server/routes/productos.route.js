const ControladorProducto = require("../controllers/productos.controller")
const {authenticate} = require("../config/jwt.config")


module.exports = (app) => {
    
    app.get("/api/producto", authenticate, ControladorProducto.obtenerProductos)
    
    app.get("/api/producto/detalle/:_id", authenticate, ControladorProducto.obtenerProducto)
    
    app.post("/api/producto/new", authenticate, ControladorProducto.crearProducto)

    app.put("/api/producto/update/:_id", authenticate, ControladorProducto.actualizarProducto)

    app.delete("/api/producto/delete/:_id", authenticate, ControladorProducto.eliminarProducto)

}
