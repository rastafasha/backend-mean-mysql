require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

//express
const app = express();

//admitir
app.use(express.json());

//config
app.set('port', port);

//rutas
app.use('/api', require('./routes'));






//iniciar express
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('error al iniciar servidor: ' + error);
    } else {
        console.log('Servidor iniciado en el puerto ' + port);
    }
});