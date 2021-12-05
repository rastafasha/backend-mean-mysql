const router = require('express').Router();
const conexion = require('./config/conexion');


//---------- agregamos rutas--------
//get equipos
router.get('/', (req, res) => {
    let sql = 'select * from td_equipo';
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows);
        }
    });

});

// get un equipo
router.get('/:id', (req, res) => {
    const { id } = req.params;
    let sql = 'select * from td_equipo where id = ?';
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows);
        }
    });
});

//agregar equipo
router.post('/', (req, res) => {
    const { nombre, logo } = req.body;

    let sql = `insert into td_equipo(nombre, logo) values('${nombre}','${logo}')`;
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'equipo agregado' });
        }
    });
});

//eliminar 
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    let sql = `delete from td_equipo where id = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'equipo eliminado' });
        }
    });
});

//modificar
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, logo } = req.body;

    let sql = `update td_equipo set 
                nombre ='${nombre}',
                logo='${logo}'
                where id = '${id}'`;

    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'equipo modificado' });
        }
    });

});
//----------------------------------

module.exports = router;