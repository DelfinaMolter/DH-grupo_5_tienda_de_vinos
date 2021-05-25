const express = require ('express');
const path = require ('path');
const app = express(); 
app.listen(3000, () => console.log('Servidor corriendo'));

// app.get ('/',(req,res)=>{
//     res.send('Bienvenido al sitio');
// });

app.get('/',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'index.html')))
app.get('/carrito_de_compra',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'carrito_de_compra.html')));
app.get('/detalle_producto',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'detalle_producto.html')));
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/registro',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'registro.html')));
