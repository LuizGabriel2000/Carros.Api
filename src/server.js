require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const routes = require('./routes')



const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.json())

// Aqui ele esta fazendo com que todos os endereços das rotas tenham /api
server.use('/api', routes);

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor Ativo em http://localhost:${process.env.PORT}`);
})