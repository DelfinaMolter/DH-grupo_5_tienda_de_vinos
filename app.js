const express = require ('express');
const path = require ('path');
const app = express(); 

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => console.log('Servidor esta corriendo en http://localhost:'+app.get("port")));

app.use(express.static(path.resolve(__dirname,'./public')));

app.get('/',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/carrito_de_compra',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'carrito_de_compra.html')));
app.get('/detalle_producto',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'detalle_producto.html')));
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/registro',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'registro.html')));

