const express = require('express');
const { dbconection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//console.log("Hola");

// usuario : userNontol
//password : y5XQJ7BaQBbpNV8  
//string conection: mongodb+srv://userNontol:<password>@cluster0.tbqmr.mongodb.net/test  

const server = express();

//configurando cors
server.use(cors());


//const app = Express();
//Primera peticion get
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicio Rest'
    });
});

dbconection();

//CODIGO PARA DESPLEGAR EL SERVIDOR 
//const app = express();
//Depliege del servidor 
server.listen(process.env.PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto: ' + 3000),
        console.log('Kevin Ñontol Estacio')
});