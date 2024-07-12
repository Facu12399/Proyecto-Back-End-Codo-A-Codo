const posteosModel = require ("../models/posteosModel.js");

// Funcion para traer todos los posteo

const traerPosteos = async (req, res) =>{
    try {
        const posteos = await posteosModel.findAll();
        res.json(posteos);
    } catch (error) {
        res.json({message:error.message});
    }
}

// Funcion para traer un posteo

const traerUnPost = async (req, res) =>{
    try {
        const posteo = await posteosModel.findByPk(req.params.id);
        res.json(posteo);
    } catch (error) {
        res.json({message:error.message});
    }
}

// Funcion para crear un posteo 

const crearPosteo = async (req, res) =>{
    try {
        await posteosModel.create(req.body);
        res.json("Registro creado correctamente");
    } catch (error) {
        res.json({message:error.message});
    }
}

// Funcion para actualizar un registro

const editarPosteo = async (req, res) =>{
    try {
        await posteosModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("Registro actualizado correctamente");
    } catch (error) {
        res.json({message:error.message});
    }
}

const borrarPosteo = async (req, res) =>{
    try {
        await posteosModel.destroy({
            where:{id:req.params.id}
        })
        res.json("Registro borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports= {traerPosteos, traerUnPost, crearPosteo, editarPosteo, borrarPosteo};