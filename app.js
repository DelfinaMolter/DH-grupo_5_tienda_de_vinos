const express = require ('express');
const app = express(); 
app.listen(3000, () => console.log('Servidor corriendo'));

app.get ('/',(req,res)=>{
    res.send('Bienvenido al sitio');
});

app.get ('/contacto',(req,res)=>{
    res.send('Contactate con nosotros');
});