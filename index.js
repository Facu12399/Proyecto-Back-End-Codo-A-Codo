const express = require("express");
const cors = require("cors");
const PostRouter = require("./routes/postRouter.js");
const app = express();
const port = 3030;

const db = require("./data/db.js");

app.use(cors()); //habilito el intercambio de información
app.use(express.json()); //analiza los request

app.get("/",(req,res)=>{
    res.send("Estas en el home");
}); //sin modularizar

app.use("/posteos", PostRouter); // modularizando

// convexion a la base de datos

const conexionDB = async ()=>{
    try {
        await db.authenticate();
        console.log(`Conectado OK a la Base de datos`);
    } catch (error) {
        console.log(`Hay un error y es el siguiente : ${error}`)
    }
}

app.listen(port,()=>{
    conexionDB();
    console.log(`Servidor OK en el puerto ${port}`);
})

