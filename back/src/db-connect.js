// requerimiento de mongoose
let mongoose = require('mongoose');

// requerimiento de dotenv
require('dotenv').config();

let user = process.env.USER,
    password = process.env.PASSWORD,
    dbName = process.env.DBNAME;

const url = `mongodb+srv://${user}:${password}@cluster0.ggild.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
).then( (res)=> console.log('db connect') ).catch( (err)=> console.log('fail connect') );

module.exports = mongoose;
