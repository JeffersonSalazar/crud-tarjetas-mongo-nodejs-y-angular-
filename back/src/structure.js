let db_connect = require('./db-connect');

let mongoose = require('mongoose'),
    schema = mongoose.Schema;

let collection = new schema ({
    nombre: { type:String, required:true },
    raza:   { type:String, required:true },
});

let dataCollection = mongoose.model('serie', collection);

module.exports = dataCollection;