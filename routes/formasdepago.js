// VAR
var express = require('express');
var FormaDePago = require('../models/formadepago');

var app = express();

app.get('/', (req, res, next) => {
    return res.status(200).json({
        ok: true,
        message: "It's alive!"
    })
});

app.get('/formasdepago', (req, res, ext) => {
    FormaDePago.find({available: true}, 'name img', (err, formadepagoDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: 'Ocurrió un error al consultar las formas de pago',
                    errors: err
                })
            }
            return res.status(200).json({
                ok: true,
                formasdepago: formadepagoDB
            });
        })
});

app.get('/formasdepago/:id', (req, res, ext) =>{
    id = req.params.id;
    FormaDePago.findById(id, 'name img steps infographics', (err, formadepagoDB)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Ocurrió un error al consultar forma de pago por ID',
                errors: err
            })
        }
        return res.status(200).json({
            ok: true,
            formasdepago: formadepagoDB
        })
    })
} )

module.exports = app;