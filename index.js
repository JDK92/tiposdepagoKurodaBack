// VAR
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicialización de variables
var app = express();

// CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS")
    next();
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// Conexión a Mongoose
mongoose.connection.openUri('mongodb://localhost:27017/FormasDePago', (err, res)=>{
    if(err) throw err;

    console.log('BD Conectada');
})


// Rutas
var formasdepagoRoutes = require('./routes/formasdepago');
app.use('/', formasdepagoRoutes);

// Escuchar peticiones
app.listen(3000, ()=> {
    console.log("ESTOY ESCUCHANDO PRRO");
})