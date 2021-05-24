'use strict'
require('dotenv').config();
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;
var uri = process.env.MONGO_URI;

mongoose.Promise = global.Promise;
mongoose.connect(uri,{
    useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: false
})
.then(() =>{
    console.log('Conexion a la BD establecida');
    app.listen(port, () => {
        console.log('Servidor corriendo correctamente');
    })
})
.catch(error => {
    console.log(error);
});