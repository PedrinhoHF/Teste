const express = require("express");

let app = express();

app.get('/',(req, res)=>res.send("Ola Mundo"));
app.get('/contato',(req, res)=> res.send(['Contato1','Contato2','Pagina contatos','teste nodemon']));

app.listen(1214, ()=>console.log('Servidor esta Rodando na porta 1214!'))