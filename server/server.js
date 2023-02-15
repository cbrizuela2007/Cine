const express = require("express");
const app = express();
const port=8000;
const cors = require("cors")

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


//base de datos
require("./config/mongoose.config")


//enrutamiento
const RutaUsuarios = require("./routes/productos.route")
RutaUsuarios(app);

//levantar servidor node
app.listen(port, ()=> console.log("servidor corriendo en puerto:"+port))


