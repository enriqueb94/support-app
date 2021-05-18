'use strict'

var express = require('express');

var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//archivo de rutas
var contact_routes = require('./routes/contact');

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('/api',contact_routes);

//exportar
module.exports = app;