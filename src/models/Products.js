const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
    type_product: { type: String, required: true},
    Nombre: { type: String, required: true},
    Peso: { type: int, required: true},
    Precio_unit: { type: int, required: true},
    date: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Products', ProductsSchema)