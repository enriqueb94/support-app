'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;
var uri = 'mongodb+srv://user_1:NjGReyr9qIf9J1t1@cluster0.dm3gz.mongodb.net/supportContact?retryWrites=true&w=majority';

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