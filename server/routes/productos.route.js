const ControladorProducto = require("../controllers/productos.controller")

module.exports = (app) => {
    
    app.get("/api/producto", ControladorProducto.obtenerProductos)
    
    app.get("/api/producto/detalle/:_id", ControladorProducto.obtenerProducto)
    
    app.post("/api/producto/new", ControladorProducto.crearProducto)
    

}
