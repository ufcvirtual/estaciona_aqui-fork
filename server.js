const express = require('express');
const app = express();
// const path =require('path');

app.set('view engine','ejs');

app.use(express.static("public"));
app.use(express.json);

//O problema do Css
//Colocar o codigo  da tela no node js
//Mostrar 1 tela para 2 diferentes usuarios com alteração remota
//Login-Pode ser resolvido no próxima acompanhamento
//Organizar o node js nas routers-Pode ser resolvido no próxima acompanhamento
app.get('/',(req,res) =>{

    res.render('selecao_de_vagas/index');

} )


const server = app.listen("localhost","3000", ()=>{
    
    console.log(`"Servidor rodando em: ${server.adddress().address}`);

})