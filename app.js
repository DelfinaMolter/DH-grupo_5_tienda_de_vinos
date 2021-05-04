const express = require ('express');
const path = require ('path');
const app = express(); 
app.listen(3000, () => console.log('Servidor corriendo'));

app.get ('/',(req,res)=>{
    res.send('Bienvenido al sitio');
});

app.get ('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.js'));
});