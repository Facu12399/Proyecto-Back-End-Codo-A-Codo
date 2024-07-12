const express = require("express");

// controladores
const {traerPosteos, traerUnPost, crearPosteo, editarPosteo, borrarPosteo} = require("../controllers/postControllers.js");

// configuracion de rutas express // metodos de HTTP
const router = express.Router();

router.get("/", traerPosteos);
router.get("/:id",traerUnPost);
router.post("/", crearPosteo);
router.put("/:id", editarPosteo);
router.delete("/:id", borrarPosteo);
/*
router.get("/",(req,res)=>{
    res.send("aca van los posteos");
}); //funcion que envia los posteos

router.post("/",()=>{

}); //funcion que envia un posteo a la base de datos
router.put("/",()=>{

}); //funcion que actualiza un posteo de la base de datos
router.delete("/",()=>{

}); //funcion que borra un posteo de la base de datos
*/

module.exports = router;
