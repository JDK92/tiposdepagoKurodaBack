var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formadepagoSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    img: {
        type: String,
        required: [true, 'La imagen es requerida']
    },
    steps: {
        type: Array,
        required: [true, 'Los pasos son requeridos']
    },
    infographics: {
        type: String,
        required: [true, 'La infografía es requerida']
    }
}, {
    collection: 'EstructuraDePago'
});

module.exports = mongoose.model('EstructuraDePago', formadepagoSchema);