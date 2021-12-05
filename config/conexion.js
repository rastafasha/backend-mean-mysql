const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'api_rest_basico_nodejs'
});

conexion.connect((err) => {
    if (err) {
        console.log('ha ocurrido un error al conectarse a la bd');
    } else {
        console.log('la DB se ha conectado');
    }
});

module.exports = conexion;