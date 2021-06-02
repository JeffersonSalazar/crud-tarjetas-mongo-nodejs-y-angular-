let express = require('express'),
    app = express(),
    port = 3000,
    morgan = require('morgan'),
    cors = require('cors'),
    path = require('path');

// midelware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// rutas estaticas
app.use('/uploads', express.static(path.resolve('uploads')));

// llamado de los metodos
let methods = require('./methods');
app.use('/pets', methods);

// llamado del servidor
app.set('port', process.env.PORT || port);
app.listen(app.get('port'), (err)=> {
    if(err) {
        console.log ('server fail');
    } else {
        console.log ('server ok');
    }
})